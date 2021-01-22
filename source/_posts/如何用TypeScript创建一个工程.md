---
title: 如何用TypeScript创建一个工程
top: false
cover: false
toc: true
mathjax: true
summary: >-
  TypeScript 是 JavaScript
  的一个超集，由于现在TypeScript比较热门，学习掌握它已成为一种趋势，今天来说说如何用TypeScript创建一个工程
tags:
  - typescript
categories: typescript
abbrlink: 57766
date: 2020-12-08 09:23:32
password:
---

目录
===
<!-- TOC -->
  - [目录](#目录)
  - [typescript开发的准备工作：](#typescript开发的准备工作)
  - [开始建立typescript的工程](#开始建立typescript的工程)
  - [补充1：tsconfig.json配置详解](#补充1tsconfigjson配置详解)
  - [补充2：React ts 项目搭建](#补充2react-ts-项目搭建)
  - [使用TS小技巧](#使用ts小技巧)

TypeScript 是 JavaScript 的一个超集，由于现在TypeScript比较热门，学习掌握它已成为一种趋势，今天来说说如何用TypeScript创建一个工程

## typescript开发的准备工作：

**1.node安装**

下载地址：https://nodejs.org/en/
安装成功后，配置环境变量 在path中添加：
在命令窗口测试node 是否配置成功：
```bash
node -v
```
输出node版本即为成功

**2.安装TypeScript**

1.NPM 安装 TypeScript

```node
通过命令：npm install -g typescript
```
2.Yarn 安装 TypeScript

```node
通过命令：yarn add  TypeScript
```

安装完成后我们可以使用 tsc 命令来执行 TypeScript 的相关代码，以下是查看版本号：
```node
$ tsc -v
Version 3.2.2
```

## 开始建立typescript的工程


**1.初始tsc环境，生成tsconfig.json文件**

在命令窗口输入：
```bash
tsc --init
```


**2.初始化 npm环境，生成package.json文件**

在命令窗口输入：
```bash
npm init -y
```

## 补充1：tsconfig.json配置详解

```bash
{
 
  "compilerOptions": {
    "allowUnreachableCode": true, // 不报告执行不到的代码错误。
    "allowUnusedLabels": false,	// 不报告未使用的标签错误
    "alwaysStrict": false, // 以严格模式解析并为每个源文件生成 "use strict"语句
    "baseUrl": ".", // 工作根目录
    "experimentalDecorators": true, // 启用实验性的ES装饰器
    "jsx": "react", // 在 .tsx文件里支持JSX
    "sourceMap": true, // 是否生成map文件
    "module": "commonjs", // 指定生成哪个模块系统代码
    "noImplicitAny": false, // 是否默认禁用 any
    "removeComments": true, // 是否移除注释
    "types": [ //指定引入的类型声明文件，默认是自动引入所有声明文件，一旦指定该选项，则会禁用自动引入，改为只引入指定的类型声明文件，如果指定空数组[]则不引用任何文件
      "node", // 引入 node 的类型声明
    ],
    "paths": { // 指定模块的路径，和baseUrl有关联，和webpack中resolve.alias配置一样
      "src": [ //指定后可以在文件之直接 import * from 'src';
        "./src"
      ],
    },
    "target": "ESNext", // 编译的目标是什么版本的
    "outDir": "./dist", // 输出目录
    "declaration": true, // 是否自动创建类型声明文件
    "declarationDir": "./lib", // 类型声明文件的输出目录
    "allowJs": true, // 允许编译javascript文件。
    "lib": [ // 编译过程中需要引入的库文件的列表
      "es5",
      "es2015",
      "es2016",
      "es2017",
      "es2018",
      "dom"
    ]
  },
  // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": [
    "demo.ts"
  ],
  // 指定哪些文件使用该配置（属于手动一个个指定文件）
  "files": [
    "demo.ts"
  ]

}
```

## 补充2：React ts 项目搭建

React 是一个用于构建用户界面的 JavaScript 库。使用 create-react-app 创建项目

**1.全局安装 create-react-app**
在命令窗口输入：
```bash
npm i create-react-app -g 
或 
yarn global add create-react-app
```
**2.查看版本，检查是否安装成功**

在命令窗口输入：
```bash
create-react-app --version

```
**3.项目安装运行**

在命令窗口输入：
```bash
create-react-app  demo（你的项目名） --typescript  
```
**4.运行**

在命令窗口输入：
```bash
1. cd demo
2. npm start / yarn start
```

##  使用TS小技巧

**1. ?.(可选链)**

在判断是否空值的时候可以使用，比如我们需要判断obj里面的某个深层次的属性是否存在，一般写法是


在命令窗口输入：
```js
if(obj && obj.person && obj.person.name)

```
而有了 ?.之后，则可以简写为

```ts
if(obj?.person?.name)

```
**2. 属性或参数中使用 !.**

属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值）

```js
let a=[1,2,3]
if(a){
a.push(45,6)
console.log(a)
}

```
而有了 !.之后，则可以简写为

```ts
let a:number[]=[1,2,3]

a!.push(45,6)

console.log(a)
```

**3.| 分隔符**

在 TypeScript 中联合类型（Union Types）表示取值可以为多种类型中的一种，联合类型使用 | 分隔每个类型。联合类型通常与 null 或 undefined 一起使用：


```js
let  arr:(string|number|boolean)[]=["字符串1",3,true]


```