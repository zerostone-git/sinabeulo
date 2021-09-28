const fs = require('fs');
const path = require('path');
const { red, yellow, green } = require('ansi-colors');
const { exec } = require('child_process');

const packageName = process.argv[2];

if (packageName) {
  exec('yarn workspaces info', (error, stdout, stderr) => {
    if (error) {
      console.error(red(`Find workspaces error: ${error}`));
      return;
    }

    const packageInfo = JSON.parse(stdout)[packageName];
    if (packageInfo) {
      (function findTestsDirectories(dir, done) {
        let results = [];
        fs.readdir(dir, function (err, files) {
          if (err) {
            return done(err);
          }

          let i = 0;
          (function next() {
            let file = files[i++];
            if (file) {
              const isTestsDirectory = file === '__tests__';
              file = path.resolve(dir, file);
              fs.stat(file, function (_, stat) {
                if (stat && stat.isDirectory()) {
                  if (isTestsDirectory) {
                    results.push(file);
                    next();
                  } else {
                    findTestsDirectories(file, function (_, res) {
                      results = results.concat(res);
                      next();
                    });
                  }
                } else {
                  next();
                }
              });
            } else {
              return done(null, results);
            }
          })();
        });
      })(path.resolve(__dirname, packageInfo.location, 'dist'), (_, files) => {
        for (const file of files) {
          if (fs.existsSync(file)) {
            fs.rmdirSync(file, { recursive: true, force: true });
            console.log(yellow(`${green('Deleted:')} ${yellow(file)}`));
          }
        }
      });
    }
  });
}
