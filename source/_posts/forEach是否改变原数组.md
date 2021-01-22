---
title: forEach是否改变原数组
top: false
cover: false
toc: true
mathjax: true
summary: forEach是没有返回值并且不直接改变原数组的，今天发现是不能直接改变，用些技巧是可以间接改变的。
tags:
  - JavaScript
categories:
  - JavaScript
  - 前端
abbrlink: 2693
date: 2021-01-06 09:57:14
password:
---


## 1、基本数据类型 

例子1:不改变原数组

```js
var arrNumber = [1,2,3,4];
arrNumber.forEach(item=>{
   item = 2
});
console.log(arrNumber);// [1,2,3,4] 未改变原数组

```

forEach(item, index, arr)，三个参数，如果直接用item=xxx是无法改变原数组的，但是如果用arr[index]就可以改变原数组。


例子2:改变原数组

```js

var arrNumber = [1,2,3,4];
arrNumber.forEach((item, index, arr)=>{
   arr[index] = 6
});
console.log(arrNumber);//[ 6, 6, 6, 6 ]改变了原数组

```

## 2、引用类型

例子1:不改变原数组

```js
var arrObject = [{a:1}, {a:1}];
arrObject.forEach(item=>{
    item = null;
});
console.log(arrObject);//[{a: 1} ,{a: 1}] 未改变原数组

```

例子2:改变原数组

```js
var arrObject = [{a:1}, {a:1}];
arrObject.forEach(item=>{
    item .a= 66;
});
console.log(arrObject);//[ { a: 66 }, { a: 66 } ]


```



## 总结一下


专业的概念说就是：JavaScript是有基本数据类型与引用数据类型之分的。对于基本数据类型：number,string,Boolean,null,undefined它们在栈内存中直接存储变量与值。而Object对象的真正的数据是保存在堆内存，栈内只保存了对象的变量以及对应的堆的地址，所以操作Object其实就是直接操作了原数组对象本身。

forEach 的基本原理也是for循环，使用arr[index]的形式赋值改变，无论什么就都可以改变了。
