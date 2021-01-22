---
title: npm使用介绍
top: false
cover: false
toc: true
mathjax: true
summary: NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题
tags: npm
categories: 包管理工具
abbrlink: 4400
date: 2020-12-24 10:07:48
password:
---

npm是Node官方提供的包管理工具，用于Node包的发布、传播、依赖控制。npm提供了命令行工具，使你可以方便地下载、安装、升级、删除包，也可以让你作为开发者发布并维护包。


## npm的安装

npm不需要单独安装。在安装Node的时候，会连带一起安装npm。通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

``` js
npm -v
6.14.10
```
## npm的更新升级
如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级，命令如下：
``` js
sudo npm install npm -g
```

如果是 Window 系统使用以下命令即可：

```npm
npm install npm -g

```

## 安装cnpm(淘宝镜像)

因为npm安装插件是从国外服务器下载，受网络的影响比较大，可能会出现异常,所以淘宝团队自建cnpm用此代替npmjs.org 镜像官方版本(只读)，来解决受网络异常的影响.

```npm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

这样就可以使用 cnpm 命令来安装模块了：

```npm
 cnpm install [name]
 ```

## 使用 npm 命令安装模块

```npm
npm install module_name(模块名称)
```


## npm install -S -D -g 区别
```npm

npm install module_name -S 即 npm install module_name --save  写入dependencies

//dependencies 是需要发布到生产环境的

npm install module_name -D   即  npm install module_name --save-dev 写入devDependencies
//devDependencies 里面的插件只用于开发环境，不用于生产环境

npm install module_name -g 全局安装(命令行使用)

npm install module_name 本地安装(将安装包放在 ./node_modules 下)

```





## 更新模块
```npm
 npm update 

```


## 卸载模块


```npm
npm uninstall module_name(模块名称)
```

## 搜索模块
```npm
 npm search module_name(模块名称)
 
```

## 查看安装信息

你可以使用以下命令来查看所有全局安装的模块：

```npm
$ npm list -g

```

你可以使用以下命令来查看某个全局安装的模块：

```npm
npm list module_name(模块名称)

```



## package.json 

package.json 文件其实就是对项目或者模块包的描述，里面包含许多元信息。比如项目名称，项目版本，项目执行入口文件，项目贡献者等等。npm install 命令会根据这个文件下载所有依赖模块。

**package.json 文件创建**

```npm
npm init

```
**package.json 文件示例及文件配置说明**

```npm
{
  "name": "exchange", //项目/模块名称，长度必须小于等于214个字符，不能以"."(点)或者"_"(下划线)开头，不能包含大写字母。

  "version": "0.1.0", //项目版本。

  "author": "zhangsan <zhangsan@163.com>",//项目开发者，它的值是你在https://npmjs.org网站的有效账户名，遵循“账户名<邮件>”的规则，例如：zhangsan zhangsan@163.com。

  "description": "第一个node.js程序",//项目描述，是一个字符串。它可以帮助人们在使用npm search时找到这个包。


  "keywords":["node.js","javascript"],//项目关键字，是一个字符串数组。它可以帮助人们在使用npm search时找到这个包。

  "private": true,//是否私有，设置为 true 时，npm 拒绝发布。

  "bugs":{"url":"http://path/to/bug","email":"bug@example.com"},//bug 提交地址。


  "contributors":[{"name":"李四","email":"lisi@example.com"}],//项目贡献者 。


  "repository": { // 项目仓库地址。
		"type": "git",
		"url": "https://path/to/url"
  },
  
  "homepage": "http://necolas.github.io/normalize.css", //项目包的官网 URL。

  "license":"MIT",// 软件授权条款，让用户知道他们的使用权利和限制。

  "dependencies": { //生产环境下，项目运行所需依赖。

    "react": "^16.8.6",
    "react-dom": "^16.8.6", //上标号^ 向新兼容依赖
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.0.1"
  },

  "devDependencies": { //开发环境下，项目所需依赖。

    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1" //波浪号~ 向新兼容下载最新库包
  },

  "scripts": {//执行 npm 脚本命令简写，比如 “start”: “react-scripts start”, 执行 npm start 就是运行 “react-scripts start”
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

  "bin": { //内部命令对应的可执行文件的路径。
  "webpack": "./bin/webpack.js"
  },

  "main": "lib/webpack.js", //项目默认执行文件，比如 require(‘webpack’)；就会默认加载 lib 目录下的 webpack.js 文件，如果没有设置，则默认加载项目跟目录下的 index.js 文件。

  "module": "es/index.js",// 是以 ES Module(也就是 ES6)模块化方式进行加载，因为早期没有 ES6 模块化方案时，都是遵循 CommonJS 规范，而 CommonJS 规范的包是以 main 的方式表示入口文件的，为了区分就新增了 module 方式，但是 ES6 模块化方案效率更高，所以会优先查看是否有 module 字段，没有才使用 main 字段。


  "eslintConfig": {//EsLint 检查文件配置，自动读取验证。
    "extends": "react-app"
  },

  "engines" : { //项目运行的平台。
    "node" : ">=0.10.3 <0.12" 
  },

  "browserslist": { //供浏览器使用的版本列表。
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "style": [// 供浏览器使用时，样式文件所在的位置；样式文件打包工具parcelify，通过它知道样式文件的打包位置。
  "./node_modules/tipso/src/tipso.css"
],
  "files": [ //被项目包含的文件名数组。

    "lib/",
    "bin/",
    "buildin/",
    "declarations/",
    "hot/",
    "web_modules/",
    "schemas/",
    "SECURITY.md"
  ]
}


```

## 两种标号 ^ ~的解释

(1)上标号^ 向新兼容依赖

```npm
    "react": "^16.8.6"
```

(2)波浪号~ 向新兼容下载最新库包

```npm
 "devDependencies": { 。

    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1" 
  },
```

## package.json与package-lock.json的关系

   package-lock.json是当 node_modules 或 package.json 发生变化时自动生成的文件。这个文件主要功能是确定当前安装的包的依赖，以便后续重新安装的时候生成相同的依赖，而忽略项目开发过程中有些依赖已经发生的更新。