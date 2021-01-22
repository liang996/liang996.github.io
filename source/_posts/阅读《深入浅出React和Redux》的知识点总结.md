---
title: 阅读《深入浅出React和Redux》的知识点总结
top: false
cover: false
toc: true
mathjax: true
summary: >-
  《深入浅出React和Redux》的作者程墨　资深架构师，曾任职于摩托罗拉、雅虎和微软，云鸟配送平台联合创始人，本片博客我将阅读本书的知识点加以总结，方便感兴趣的开发人员学习。
tags:
  - React
  - npm
  - Redux
categories:
  - 前端
  - React
  - Redux
abbrlink: 14509
date: 2020-11-10 11:03:17
password:
---

目录
===
《深入浅出React和Redux》的作者程墨　资深架构师，曾任职于摩托罗拉、雅虎和微软，云鸟配送平台联合创始人，本片博客我将阅读本书的知识点加以总结，方便感兴趣的开发人员学习。
## 1.如何初始化一个 React 项目？

安装靠：`npm install --global create-react-app`

初始化项目靠：`create-react-app first_react_app`

启动项目靠：1.`cd first_react_app `
          2. `npm start （npm run start）`

## 2.为什么要减少对Dom的操作？
因为浏览器在渲染html格式的网页时，先会将html文本解析来构建Dom树，然后根据Dom树渲染用户看到的界面，当要改变界面内容的时候，就会改变Dom树上的节点，Dom操作会引起浏览器对网页的重新布局，这个过程肯定效率不高。

## 3.React函数式编程的优点？
React 利用函数式编程的思维来解决用户界面渲染的问题，最大的优势是开发者的效
率会大大提高，开发出来的代码可维护性和可阅读性也大大增强

## 4.低耦合和高内聚的概念理解
低耦合：指的是不同组件之间的依赖关系要尽量弱化，也就是每个组件要尽量独立。
高内聚：指的是把逻辑紧密相关的内容放在一个组件中。


## 5.什么时候选择用 prop ？什么时候选择用state 呢？
prop 是组件的对外接口，当外部世界要传递一些数据给 React 组件，一个最直接的方式就是通过 prop ；同样，
React 组件要反馈数据给外部世界，也可以用 prop

state 是组件的内部状态，对外用
prop ，内部用 state

## 6.虚拟Dom(Virutal DOM)的概念及其原理？
虚拟Dom就是对 DOM 树的抽象,虚拟Dom 不会触及浏览器的部分，只是存在于 JavaScript 空间的树形结构，每次自上而下
React 组件时，会对比这一次产生的 虚拟Dom 和上一次渲染的虚拟Dom 进行对比，然后修改真正的 DOM 树时就只需要触及差别中的部分就行。


## 7.JSX 中引入样式注意要点
JSX 中引入样式须用花括号｛｝把 prop 值包住，所以 style 的值有两层花括号，外层花括号代表是 JSX语法，内层的花括号代表这是一个对象常量。

例：
```css
style={{color :”red”}}
```

## 8.在构造函数中为什么要调用super(props)?
ES6 语法中，super 指代父类的构造函数，React 里面就是指代 React.Component 的构造函数。

在你调用 super() 之前，你无法在构造函数中使用 this，类实例的所有成员函数就无法通过 this.props 访问到父组件传递过来的 props 值.

## 9.propTypes是用来做什么的?
propTypes 检查是一个辅助开发的功能，用来定义 prop 规格，这不只是声明，而且是一种限制，在运行时和静态代码检查时，都可以根据propTypes 判断外部世界是否正确地使用了组件的属性.


## 10.组件的生命周期
生命周期可能会经历如下三个过程：

1.装载过程（Mount ），也就是把组件第一次在 DOM 树中渲染的过程；

2.更新过程（Update ），当组件被重新渲染的过程；

3.卸载过程（Unmount ），组件从 DOM 中删除的过程；

**装载过程**

1.constructor ：作用（初始化 state，绑定成员函数的 this 环境）

2.componentWillMount：componentWillMount 会在调用 render 函数之前被调用，

3.render （作用：渲染挂载组件）

4.componentDidMount: componentDidMount 会在调用 render 函数之后被调用


**注：剩下的文章后续补充**
