const path = require('path');
const uploadDirToAws = require('./uploadDirToAws');
const createVersionTxt = require('./createVersionTxt');

const distFolder = path.resolve(__dirname, '../build');

createVersionTxt(distFolder, () => {
  console.log('version.txt created');
  uploadDirToAws({
    empty: true,
    BUCKET: process.env.AWS_S3_HOST_BUCKET_NAME,
    KEY: process.env.AWS_ACCESS_KEY_ID,
    SECRET: process.env.AWS_SECRET_ACCESS_KEY,
    distFolder
  });
});
