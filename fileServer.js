/**
 * Created by Administrator on 2017/6/5.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const PORT = 9001;
const IP = "localhost";

http.createServer((req, res) => {
  //  /user/login.action  --> user_login.json
  let pathName = url.parse(req.url).pathname;
  let fileName = pathName.slice(1).replace(path.extname(pathName), '.json').replace(/\//g, '_');
  fs.readFile(path.join(__dirname, `./src/mock/json/${fileName}`), 'utf-8', (err, data) => {
    if (err) {
      responseData(404, "");
    } else {
      if (pathName && req.method != "OPTIONS" && pathName != '/user/login.action' && pathName != '/logout.action') {
        var auth = req.headers['authorization'];
        if (auth != 'Auth0000') {
          responseData(401, "token error");
        } else {
          responseData(200, data);
        }
      } else {
        responseData(200, data);
      }
    }
  })

  function responseData(status, data) {
    res.setHeader('Content-Type', 'text/json;charset=UTF-8');
    res.setHeader('Access-Control-Allow-Origin', req.headers['origin']);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    setTimeout(() => {
      res.writeHead(status, {});
      res.end(data);
    }, req.method == "OPTIONS" ? 0 : 1000)
  }
}).listen(PORT, IP, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://' + IP + ':' + PORT + '\n')
});




