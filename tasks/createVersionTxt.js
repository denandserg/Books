const childProcess = require('child_process');
const fs = require('fs');
const { name, version } = require('../package');

module.exports = function createVersionTxt(distFolder, cb) {
  getBranchAndHash((err, { commitHash }) => {
    if (err) {
      cb(err);
      return;
    }

    const buildDate = new Date().toISOString();

    const fileContent = [
      `${name} v${version}`,
      `Commit hash: ${commitHash}`,
      buildDate
    ].join('\n');

    fs.writeFile(`${distFolder}/version.txt`, fileContent, writeErr => {
      if (writeErr) {
        cb(writeErr);
        return;
      }

      cb();
    });
  });
};

function getBranchAndHash(cb) {
  let commitHash = null;
  let branchName = null;

  childProcess.exec('git rev-parse HEAD', (err, stdout) => {
    if (err) {
      cb(err);
    }

    commitHash = stdout.substr(0, 8);
    tryConclude();
  });

  childProcess.exec("git branch | grep \\* | cut -d ' ' -f2", (err, stdout) => {
    if (err) {
      cb(err);
    }

    branchName = stdout.trim();
    tryConclude();
  });

  function tryConclude() {
    if (!commitHash || !branchName) {
      return;
    }

    cb(null, { branchName, commitHash });
  }
}
