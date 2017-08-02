/**
 * Created by Administrator on 2017/6/5.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const PORT = 8080;
const IP = "localhost";

http.createServer((req, res) => {
  //  /user/login.action  --> user_login.json
  let pathName = path.normalize(url.parse(req.url).pathname);
  if (path.extname(pathName)) {
    var fileName = pathName.replace(path.extname(pathName), '.json').replace(new RegExp('\\' + path.sep, 'g'), '_').slice(1);
  } else {
    var fileName = pathName.replace(new RegExp('\\' + path.sep, 'g'), '_').slice(1) + '.json';
  }
  fs.readFile(path.join(__dirname, `./src/mock/json/${fileName}`), 'utf-8', (err, data) => {
    if (err) {
      responseData(404, `未配置json文件: ${fileName}`);
    } else {
      responseData(200, data);
    }
  })

  function responseData(status, data) {
    res.setHeader('Content-Type', 'text/json;charset=UTF-8');
    res.setHeader('Access-Control-Allow-Origin', req.headers['origin'] || req.headers['referer']);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    setTimeout(() => {
      res.writeHead(status, {});
      res.end(data);
    }, req.method == "OPTIONS" ? 0 : 1)
  }
}).listen(PORT, IP, (err) => {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://' + IP + ':' + PORT + '\n')
});




