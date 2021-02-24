---
title: json.stringify()的妙用，json.stringify()与json.parse()的区别
top: false
cover: false
toc: true
mathjax: true
abbrlink: 5580
date: 2021-02-24 16:16:08
password:
summary: 今天学习了了来一下JSON.stringify()，发现JSON.stringify()使用场景真的挺多，我现在将学习经验分享大家。
tags: json
categories: json
---

## 一、JSON.stringify()与JSON.parse()的区别

今天学习了了来一下JSON.stringify()，发现JSON.stringify()使用场景真的挺多，我现在将学习经验分享大家。

简单点说，它们的作用是相对的，我用JSON.stringify()将对象a变成了字符串c，那么我就可以用JSON.parse()将字符串c还原成对象a。

```js
let arr = [1,2,3];
JSON.stringify(arr);//'[1,2,3]'
typeof JSON.stringify(arr);//string

let string = '[1,2,3]';
console.log(JSON.parse(string))//[1,2,3]
console.log(typeof JSON.parse(string))//object
```
在使用JSON.parse()需要注意一点，由于此方法是将JSON字符串转换成对象，所以你的字符串必须符合JSON格式，即键值都必须使用双引号包裹：
```js
let a = '["1","2"]';
let b = "['1','2']";
console.log(JSON.parse(a));// Array [1,2]
console.log(JSON.parse(b));// 报错

```
上面例子中变量b就无法转换，因为格式不符合，那么知道了这些知识点，我们能用来做什么呢？

## 二、JSON.stringify()的几种妙用

1.判断数组是否包含某对象，或者判断对象是否相等。

```js
//判断数组是否包含某对象
let data = [
    {name:'echo'},
    {name:'听风是风'},
    {name:'天子笑'},
    ],
    val = {name:'天子笑'};
JSON.stringify(data).indexOf(JSON.stringify(val)) !== -1;//true

//判断两数组/对象是否相等
let a = [1,2,3],
    b = [1,2,3];
JSON.stringify(a) === JSON.stringify(b);//true
```
**2.让localStorage/sessionStorage可以存储对象**

localStorage/sessionStorage默认只能存储字符串，而实际开发中，我们往往需要存储的数据多为对象类型，那么这里我们就可以在存储时利用json.stringify()将对象转为字符串，而在取缓存时，只需配合json.parse()转回对象即可。

```js

//存
function setLocalStorage(key,val){
    window.localStorage.setItem(key,JSON.stringify(val));
};
//取
function getLocalStorage(key){
    let val = JSON.parse(window.localStorage.getItem(key));
    return val;
};
//测试
setLocalStorage('demo',[1,2,3]);
let  a = getLocalStorage('demo');//[1,2,3]
```
 

**3.实现对象深拷贝**

实际开发中，如果怕影响原数据，我们常深拷贝出一份数据做任意操作，其实使用JSON.stringify()与JSON.parse()来实现深拷贝是很不错的选择。

```js

//深拷贝
function deepClone(data) {
    let _data = JSON.stringify(data),
        dataClone = JSON.parse(_data);
    return dataClone;
};
//测试
let arr = [1,2,3],
    _arr = deepClone(arr);
arr[0] = 2;
console.log(arr,_arr)//[2,2,3]  [1,2,3]
```

## 三、JSON.stringify()与toString()的区别

这两者虽然都可以将目标值转为字符串，但本质上还是有区别的，比如

let arr = [1,2,3];
JSON.stringify(arr);//'[1,2,3]'
arr.toString();//1,2,3
其次，JSON.stringify()的受众更多是对象，而toString()虽然可以将数组转为字符串，但并不能对{name:'天子笑'}这类对象实现你想要的操作，它的受众更多是数字。


注：文章借鉴

[json.stringify()的妙用，json.stringify()与json.parse()的区别](https://www.cnblogs.com/echolun/p/9631836.html)
