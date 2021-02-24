---
title: localStorage 与 cookie 的异同
top: false
cover: false
toc: true
mathjax: true
abbrlink: 19581
date: 2021-02-24 15:13:52
password:
summary: 常用的前端缓存:1.Cookie 2.存储简单数据webstorage（1）localStorage（2）sessionStorage 3.session 4.存储复杂数据 — IndexedDB,今天我们来聊一聊localStorage 与 cookie 的异同
tags: 前端缓存
categories: 前端缓存
---

## 常用的前端缓存
* 1.Cookie 
* 2.存储简单数据webstorage
  
（1）localStorage
（2）sessionStorage 
* 3.session
* 4.存储复杂数据 — IndexedDB


## localStorage 与 cookie 的异同

**相同点**

都是在浏览器端存储在本地的数据，需要时可以直接从本地获取。

**不同点**

* cookie 数据始终在同源的 http 请求中携带。而 localStorage 不会自动把数据发给服务器，仅在本地保存。

* cookie 数据不能超过4k，所以 cookie 只适合保存很小的数据。而 localStorage 可以达到5M或更大。

* localStorage 始终有效，窗口或浏览器关闭也一直保存。

* cookie 在过期时间之前一直有效，即使窗口或浏览器关闭。
  
### 存入和读取

#### localStorage的使用

* 写入数据
```js
localStorage.setItem("name","caibin"); // 在localStorage中存储为 name:"caibin"
// 或
localStorage.name = "lucy";            // 改变localStorage中存入的值 
```
* 读取数据
```js
localStorage.getItem("name");          // 打印结果为 caibin
// 或
let name = window.localStorage.name;   // 数据调取也可以使用这种方法
```
* 删除数据

```js
localStorage.removeItem("name");       // 删除name字段存储的数据
```
* 清空数据
```js
 localStorage.clear();                 // 清空所有存储的数据
对象存取
const students = {
  xiaomin: {
    name: "xiaoming",
    grade: 1
  },
  teemo: {
    name: "teemo",
    grade: 3
  }
}

const stuStr = JSON.stringify(students); // {"xiaomin":{"name":"xiaoming","grade":1},"teemo":{"name":"teemo","grade":3}}
localStorage.setItem("students",stuStr);

const stus = JSON.parse(localStorage.getItem("students"));
```
以上代码结果可以在控制台中的 Application 查看。

## cookie的使用

* 设置cookie的值
  
每个 cookie 都是一个键值对，可以把下面的字符串赋值给 document.cookie：
```js

document.cookie="userId=828";
```
* 修改cookie值

重新赋值即为修改。
```js
document.cookie="userId=929";
```
* cookie的读取
  
```js
let strCookie = document.cookie;
console.log(strCookie); // userId=828
```
* 设置cookie的失效日期
  
在默认情况下，一个 cookie 的生命周期就是在浏览器关闭的时候结束。如果想要 cookie 能在浏览器关掉之后还可以使用，就必须要为该 cookie 设置有效期，也就是 cookie 的失效日期。

```js

let date=new Date();
//将date设置为10天以后的时间
date.setTime(date.getTime()+10*24*3600*1000);
//将userId 的 cookie 设置为10天后过期
document.cookie="userId=929;expires=" + date.toGMTString();
```

* 设置cookie可访问的路径
  
为了控制cookie可以访问的目录，需要使用path参数设置cookie

```js
document.cookie="userId=929;path=/shop"; // 表示当前cookie仅在shop目录下使用。

document.cookie="userId=929;path=/";     // 表示当前cookie在整个网站下可用。
```
