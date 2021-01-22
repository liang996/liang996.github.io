---
title: React第一个HelloWOrd实践运用
top: false
cover: false
toc: true
mathjax: true
tags:
  - React
  - npm
categories:
  - 前端
  - React
abbrlink: 65199
date: 2020-10-22 19:43:02
password:
summary:
---


React 起源于 Facebook 的内部项于在2013年5月开源，是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。

ReactJS的官方网站为:https://reactjs.org

目录
===
- [目录](#目录)
  - [React三大体系](#react三大体系)
  - [React 特点](#react-特点)
  - [React开发环境搭建](#react开发环境搭建)
    - [1. 安装node](#1-安装node)
    - [2. 安装 create-react-app（脚手架工具）](#2-安装-create-react-app脚手架工具)
  - [创建第一个React项目](#创建第一个react项目)
  - [脚手架结构破晓](#脚手架结构破晓)
  - [第一个Hello, world示例](#第一个hello-world示例)


 
## React三大体系
*  React三大体系：用于web开发和组件的编写
*  ReactNative：用于移动端开发
*  ReactVR：用于虚拟现实技术开发

## React 特点
* 声明式设计 −React采用声明范式，可以轻松描述应用。

* 高效灵活 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
并且可以与已知的库或框架很好地配合。

* JSX语法 − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。

* 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

* 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

## React开发环境搭建

### 1. 安装node
从[nodejs官方网站](https://nodejs.org/en/)下载你的操作系统对应的node版本。和普通应用一样安装即可。
该页面会自动推荐更合适你电脑的node版本。左侧大按钮，显示的是将会下载最新的稳定版本。右侧的大按钮显示的是还处于测试阶段的新特性。因此我们通常选择左侧的下载。

Node.js 安装好以后，打开终端（或者叫命令行工具）。

**输入代码：**

```bash
node -v
```
如果正确出现版本号，说明Node安装已经成功。

**然后输入代码：**

```bash
npm -v
```
如果正确出现版本号，说明npm也是没问题的，这时候我们的Node.js安装就算完成了。


由于网络原因，当我们想要通过npm下载项目依赖包时，可能会很慢甚至直接无法下载，因此在使用时我们通常会使用淘宝NPM镜像。
首先使用如下指令安装cnpm，用以替换默认的npm

**安装cnpm：**

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 2. 安装 create-react-app（脚手架工具）


Node安装好之后，你就可以使用npm命令来安装脚手架工具了，方法很简单，只要打开终端，然后输入下面的命令就可以了。
```bash
npm install -g create-react-app
```
create-react-app是React官方出的脚手架工具，其实有很多第三方的脚手架工具，也有很多优秀的。但是作为初学者为了减少踩坑，所以我们使用官方的脚手架。

## 创建第一个React项目
脚手架安装好以后，就可以创建项目了，

**实例参考：**

```bash
E:  //选择自己项目想放的盘符，我这里选择E盘，
mkdir ReactDemo  //创建ReactDemo文件夹
create-react-app demo   //用脚手架创建React项目
cd demo  //等创建完成后，进入项目目录
npm start   //预览项目，如果能正常打开，说明项目创建成功
```
等到浏览器可以打开React网页，并正常显示图标后，说明我们的环境已经全部搭建完成了。说明项目创建成功

## 脚手架结构破晓

用脚手架生成目录后，需要对目录有个基本的认识，这里我来梳理一下脚手架生成目录和文件的作用。

* `yarn.lock`  --  项目依赖的安装包
 
* `README.md`  --  项目的说明文件,主要作用就是对项目的说明
 
* `package.json`  --  node的包文件、项目的结束（名字/版本号/依赖的第三方的包/调用的指令等）
    记录用npm安装过哪些包  ^  代表 npm install 的时候会自动安装大版本号相同的最新的
    一个版本
 
* `package-lock.json`  -，就是锁定安装时的版本号，并且需要上传到git，以保证其他人再npm install 时大家的依赖能保证一致。
* `.gitignore `
 --  git管理代码的时候，有的文件不希望传到git仓库中，可以把文件定义在这。
 * `node_modules  `
 --  放置项目依赖的第三方的包
 * `public  `
 这个文件都是一些项目使用的公共文件，也就是说都是共用的
  * `public文件有 `
  --  favico.ico: 网页tab标签小图标
 --  index.html: 初始页面
-- manifest.json: wepack打包优化相关
  * `src`
  --  放的项目所有的源代码
    所有代码的入口在 index.js 里面
 
## 第一个Hello, world示例

**入口文件src编写：**

写一个项目的时候一般要从入口文件进行编写的，在src目录下，新建一个文件index.js，然后打开这个文件。

写入下面4行代码:


```bash
import React from 'react'//React 的核心库

import ReactDOM from 'react-dom'//提供与 DOM 相关的功能
import App from './App' //导入一个APP主件

ReactDOM.render(<App />,document.getElementById('root'))//将APP组件绑定到root节点上面渲染，这个rootID是在public\index.html文件中的。
```
这样入口文件就写好了，这时候我们就需要写APP组件了。

**APP组件的编写：**
```bash
import React, {Component} from 'react'

class App extends Component{
    render(){
        return (
            <div>
               Hello, world
            </div>
        )
    }
}
export default App;
```

**补充说明:**

对import React,{Component} from 'react’写法的解释 首先关于一下写法解释
```bash
import React,{Component} from 'react'

```
作用相当于下这两句话

1.导入react模块（组件）中的默认组件，并且命名为React


```bash
import React from 'react'
```
2.引入react文件中的成员组件Component,可以用{}形式引入多个成员组件
```bash
import {Component} from 'react'
Const Component = React.Component
```

```bash
import React,{Component} from 'react'

等同于：

import React from 'react'
const Component = React.Component
```




