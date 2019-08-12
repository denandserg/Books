/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const AWS = require('aws-sdk');
const readdir = require('recursive-readdir');
const mime = require('mime');

module.exports = async function uploadToS3({
  empty,
  BUCKET,
  KEY,
  SECRET,
  distFolder
}) {
  const s3 = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: KEY,
    secretAccessKey: SECRET
  });

  try {
    const { uploadedKeys } = await uploadAll(distFolder);

    console.log('\nUpload to S3 complete');

    if (empty) {
      await emptyBucket({ keysBlacklist: uploadedKeys });

      console.log('\nS3 bucket cleaned up');
    }

    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  function getFiles(dirPath) {
    return fs.existsSync(dirPath) ? readdir(dirPath) : [];
  }

  async function emptyBucket({ keysBlacklist }) {
    const { Contents } = await s3
      .listObjects({
        Bucket: BUCKET
      })
      .promise();

    const deleteReqs = Contents.filter(
      ({ Key }) => !keysBlacklist.includes(Key)
    ).reduce(
      (result, { Key }) => [
        ...result,
        s3
          .deleteObject({
            Bucket: BUCKET,
            Key
          })
          .promise()
      ],
      []
    );

    await Promise.all(deleteReqs);
  }

  async function uploadAll(uploadFolder) {
    Object.entries({
      's3 bucket name': BUCKET,
      'access key id': KEY,
      'secret key': SECRET
    }).forEach(([name, val]) => {
      if (!val) {
        throw new Error(`you must provide: ${name}`);
      }
    });

    const filesToUpload = await getFiles(uploadFolder);

    const uploadedKeys = [];

    const uploadPromises = filesToUpload.map(async filePath => {
      const Key = filePath.replace(`${uploadFolder}/`, '');

      console.log(`uploading start: [${Key}]`);

      const Body = await readFile(filePath);

      const uploading = s3
        .upload({
          Key,
          Body,
          Bucket: BUCKET,
          ContentType: mime.getType(filePath)
        })
        .promise();

      await uploading;

      console.log(`Uploading finish: [${Key}]`);

      uploadedKeys.push(Key);

      return uploading;
    });

    return {
      allUploadedResults: await Promise.all(uploadPromises),
      uploadedKeys
    };
  }

  function readFile(filePath) {
    return new Promise((res, rej) => {
      fs.readFile(filePath, (err, data) => (err ? rej(err) : res(data)));
    });
  }
};
