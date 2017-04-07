# project

> 基于vue2.0的模板项目

### 技术栈
- 传说中的VUE全家桶(vue vue-router vuex)
- 前后端交互：axios
- css预编译：stylus
- Element-UI
- jQuery第三方插件

## 运行截图
![动图](https://github.com/mahuaide/project/raw/master/screenshots/login.png)
![首页](https://github.com/mahuaide/project/raw/master/screenshots/index.png)


## 安装运行（Build Setup）

``` bash
# install dependencies
cd project
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build
```
## 代码目录

``` bash
├─src
│  ├─common			--公共样式，第三方jQ库，图标字体
│  │  ├─css
│  │  │  ├─jcrop
│  │  │  └─progress
│  │  ├─font
│  │  ├─img
│  │  ├─js
│  │  └─stylus
│  ├─components		    --组件
│  │  ├─baseline
│  │  ├─configure
│  │  ├─data
│  │  ├─header
│  │  ├─home
│  │  ├─login
│  │  ├─nav
│  │  ├─project
│  │  │  └─projectSub
│  │  ├─version
│  │  └─view
│  │      └─timerShaft
│  ├─http			--前后端交互http.js是公共的axios设置，api.js是暴露给前端的方法，path.js后端服务路径
│  ├─mock			--mock数据
│  ├─router			--路由
│  └─store			--前端状态管理
├─static			--静态的css，js，img
│  ├─css
│  └─img
│      └─login
└─theme			      --Element-UI自定义样式
    └─fonts
