/**
 * Created by Administrator on 2017/6/5.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const port = 9001;
const IP = "localhost";

http.createServer((req, res) => {
  //  /user/login.action  --> user_login.json
  var pathName = url.parse(req.url).pathname;
  var fileName = pathName.slice(1).replace('/', '_').replace(path.extname(pathName), '.json');
  res.setHeader('Content-Type', 'text/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Authorization');
  fs.readFile(path.join(__dirname, `./src/mock/json/${fileName}`), 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, {});
      req.end();
    } else {
      if (pathName && req.method !="OPTIONS" && pathName != '/user/login.action' && pathName != '/logout.action') {
        var auth = req.headers['authorization'];
        if(auth != 'Auth0000'){
          res.writeHead(401, {});
          res.end("token error");
        }else {
          res.writeHead(200, {});
          res.end(data);
        }
        console.log(auth + "\n" + pathName + "\n" + req.method + "\n" + req.headers['cookie'] + "\n");
      }else {
        res.writeHead(200, {});
        res.end(data);
      }
    }
  })
}).listen(port, IP, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://' + IP + ':' + port + '\n')
});

