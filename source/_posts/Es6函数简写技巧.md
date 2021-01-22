---
title: Es6函数简写技巧
top: false
cover: false
toc: true
mathjax: true
summary: 现在在js的开发中，Es6使用的越来越多，下面我来总结一下Es6简写技巧
tags: Es6
categories: Es6
abbrlink: 31851
date: 2020-12-15 11:19:41
password:
---

目录
===
<!-- TOC -->
  - [目录](#目录)
  - [箭头函数简写相关](#箭头函数简写相关)
  - [属性的简写](#属性的简写)
  - [方法的简写](#方法的简写)
  - [三元操作符简写](#三元操作符简写)
  - [扩展运算符简写](#扩展运算符简写)
  - [声明变量简写方法](#声明变量简写方法)
  - [if只有一个语句,可以省略大括号](#if只有一个语句可以省略大括号)
  - [if存在条件成立简写方法](#if存在条件成立简写方法)
  - [if存在条件不成立简写方法](#if存在条件不成立简写方法)
  - [给一个变量分配的值是通过判断其值是否为null或undefined](#给一个变量分配的值是通过判断其值是否为null或undefined)
  - [模板字符串](#模板字符串)
  - [解构赋值简写方法](#解构赋值简写方法)


ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，于 2015 年 6 月正式发布




## 箭头函数简写相关

**基础语法**

通常函数的定义方法


```js
let ab = function(a, b) {
    return a + b
}
 
function ab(a, b) {
    return a + b
}
```

使用ES6箭头函数语法定义函数，将原函数的“function”关键字和函数名都删掉，并使用“=>”连接参数列表和函数体。

```js
let fn1 = (a, b) => {
    return a + b
}
 
(a, b) => {
    return a + b
}
```

当函数参数只有一个时，括号可以省略.当函数体（中括号）中有且只有一行return语句时，中括号及return 关键字可以省略。
```js
let f = function(b) => {
    return "hellowEs6"
}
 
 //简写为：
let f = (b)=>{
    return "hellowEs6"
}

//由于函数体（中括号）中有且只有一行return语句时，return 关键字可以省略：
let f = (b)=>"hellowEs6"

```

但是没有参数时，括号不可以省略。
```js
let f = function() => {
    return "hellowEs6"
}
 
 //简写为：
let f = ()=>{
    return "hellowEs6"
}

//由于函数体（中括号）中有且只有一行return语句时，return 关键字可以省略：
let f = ()=>"hellowEs6"

```


当函数参数有多个时，圆括号不可以省略,当函数体（中括号）中有且只有一行return语句时，中括号及return 关键字可以省略。

```js
let f = function(a,b){
    return a+b;
}

 //简写为：
let f = (a,b)=>{
    return a+b;
    }


 //由于函数体（中括号）中有且只有一行return语句时，return 关键字可以省略：
let f = (a,b)=>a+b;
```



## 属性的简写
如果属性名与key名相同，则可以采用ES6的方法：


```js
const obj = {x : x, y : y};
```
简写：

```js
const obj = {x, y};
```

## 方法的简写

```js
var obj = {
 run:function () {
        console.log('es6')
    }}
console.log(obj.run())

//ES6 新写法（如果键和值一样的话，可以简写）

var obj = {
   run () {
        console.log('es6')
    }
}
console.log(obj.run())
```

## 三元操作符简写

```js

let name;
	if(x > 10){
		name = '小红';
	}else{
		name = '小刚';
	}
```

简写：
```js

const name = x > 10?'小红':'小刚'
```


## 扩展运算符简写

```js
const odd = [1, 3, 5];
const nums = [2, 4, 6].concat(odd);
```


简写：
```js
const odd = [1, 3, 5];

const nums = [2,4,6, ...odd];


```

## 声明变量简写方法

```js
let x;

let y;

let z = 3;
```
简写：
```js

let x,y,z=3;
```



## if只有一个语句,可以省略大括号


```js
if(true){
alert("true")
}
```
简写：
```js
  if(true) alert("true")

```

## if存在条件成立简写方法

```js
if(a===true){
    ...
}
```
简写：
```js
if(a){
    ...
}
```

## if存在条件不成立简写方法


```js
if(a!==true){
    ...
}
```
简写：
```js
if(!a){
    ...
}
```

## 给一个变量分配的值是通过判断其值是否为null或undefined

```js
let mag;

if(a){
	mag = "小刘";
}else{
	mag = "小将";
}
```
简写：
```js
const mag = "小刘" || "小将";

```

## 模板字符串

let age=8;

```js
let mag='我今年' +age+  '岁'


```
ES6可以使用反引号和${}简写：

```js
let mag=`我今年${age}岁`

```

## 解构赋值简写方法

```js
const  store = this.props.store;
const form = this.props.form;
```

简写：
```js
const{store, form} = this.props;

```

也可以分配变量名：
```js
const{store, form:form1} = this.props;
//最后一个变量名为form1
```


