'use strict';

const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const port = process.argv[2] || 8000;

/**
 * Get the directory listing and convert them into links
 * @param filesArr
 * @param baseDir
 * @returns {string}
 */
function formatDirToHTML (filesArr, baseDir) {
  filesArr = filesArr.map((currVal) => {
    return `<li><a href=${path.basename(baseDir)}/${currVal}>${currVal}</a></li>`;
  });

  return `<ul>${filesArr.join('\n')}</ul`;
}

http.createServer((request, response) => {

  // get the path from the URL
  const uri = url.parse(request.url).pathname;

  // got to examples dir if not there already
  if (uri === '/') {
    response.writeHead(301, {'Location': '/examples'});
    response.end();
    return;
  }

  // resolve current directory to the path
  const filename = path.join(process.cwd(), uri);

  fs.stat(filename, (err, stats) => {

    if (err) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (stats.isDirectory()) {
      fs.readdir(filename, (err, files) => {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(formatDirToHTML(files, filename));
        response.end();
      });
      return;
    }

    fs.readFile(filename, "binary", (err, file) => {

      if (err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");