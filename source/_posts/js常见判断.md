---
title: js常见判断
top: false
cover: false
toc: true
mathjax: true
summary: 记录一些JavaScript常见判断的常用方法，这个笔记后面慢慢增加了许多内容，如果有错误之处，请各位多多指教。
tags:
  - 前端
  - javaScript
categories:
  - 前端
abbrlink: 22090
date: 2020-12-09 18:32:46
password:
---

## 

这里是我的笔记，记录一些JavaScript常见判断的常用方法，这个笔记后面慢慢增加了许多内容，如果有错误之处，请各位多多指教。


目录
===
  - [目录](#目录)
  - [js12种数据类型汇总](#js12种数据类型汇总)
  - [JavaScript判断是否为数字](#javascript判断是否为数字)
  - [JavaScript判断字符串是否为空](#javascript判断字符串是否为空)
  - [JavaScript判断数组是否为空](#JavaScript判断数组是否为空-1)
  - [js判断数组是否含有某个值](#js判断数组是否含有某个值)
  - [js判断一个对象是否为空](#js判断一个对象是否为空)
  - [js判断两个数组是否相等](#js判断两个数组是否相等)
  - [JS中如何对象转数组方法](#js中如何对象转数组方法)
  - [js判断是否是数组](#js判断是否是数组)
  - [js判断数组是否存在重复元素](#js判断数组是否存在重复元素)
  - [JS如何去除数组重复值](#js如何去除数组重复值)
  - [JS如何获取数组重复的元素](#js如何获取数组重复的元素)


## Js 12种数据类型汇总


 * 基本类型：String、Number、Boolean、Symbol、Undefined、Null、BigInt(7种)
 * 引用类型：Object、Array、RegExp、Date、Function (5种)

**区别**：引用类型值可添加属性和方法，而基本类型值则不可以。

**基本类型**

1.基本类型的变量是存放在栈内存（Stack）里的

2.基本数据类型的值是按值访问的

3.基本类型的值是不可变的

4.基本类型的比较是它们的值的比较

**引用类型**

1.引用类型的数据是存放在堆内存中的

2.引用类型的值是按引用访问的

3.引用类型的值是可变的

4.引用类型的比较是引用的比较

## JavaScript判断是否为数字

**使用isNaN()函数：**


isNaN()函数是js自带的全局函数，isNaN() 函数用于检查其参数是否是非数字值。


**实例参考：**

```js
document.write(isNaN(123));//数字 输出：false
document.write(isNaN("Hello"));//字符串输出：true
```
**缺点：**

isNaN()会将 null、空格以及空串按照0来处理，所以检查不严谨。
所以用加工一下，和typeof运算符一起使用。

**实例参考：**

```js
function myIsNaN(value) {
console.log((typeof value === 'number' && !isNaN(value)) + "<br>");
}
```

**结果显示：**

```js
myIsNaN(10);//true
myIsNaN(null); //false
myIsNaN(); //false
myIsNaN(); //false
```


## JavaScript判断字符串是否为空

**实例参考：**

```js
function isEmpty(obj) {
if (typeof obj == "undefined" || obj == null || obj == "") {
return true;
} else {
return false;
}
}
```
**结果显示：**

```js
console.log(isEmpty("10"));//false
```


## JavaScript判断数组是否为空

**实例参考：**

```js
let arr = [];
if (arr.length == 0) {
console.log("数组为空")
} else {
console.log("数组不为空")
}

```


## js判断数组是否含有某个值

**实例参考：**

**(1). 使用indexOf()方法**

```js
let arr = [1, 2, 3, 4];

if (arr.indexOf(2) != - 1) {
console.log("数组含有2")
} else {
console.log("数组不含2")
}

```

**(2).使用includes()方法**
数组中含有某值返回true，没有返回false。ES7新方法。

```js
let arr = [1, 2, 3, 4];
if (arr.includes(2)) {
console.log("数组中有2");
} else {
console.log("数组中无2");
}


```

**(3).使用find()方法**
数组中含有某值返回true，没有返回false。ES7新方法。

```js
let arr = [1, 2, 3, 4];
arr.find(value => {
if (value === 2) {
console.log("数组含有2")
}
})

```


## js判断一个对象是否为空

**实例参考：**


**(1). 使用Object.keys(obj)方法**
返回一个给定对象自身可枚举属性组成的数组。

```js
let obj1 = {}
if (Object.keys(obj1).length == 0) {
console.log("空对象")
} else {
console.log("非空对象")
}

```

**(2).使用JSON.stringify() 方法**
从一个对象中解析出字符串

**用法**
```js
JSON.stringify({ "a": "1", "b": "2" })
结果是："{"a":"1","b":"2"}"

```
**实例**
```js
let obj1 = {}
if (JSON.stringify(obj1) == "{}") {
console.log("空对象")
} else {
console.log("非空对象")
}

```




## js判断两个数组是否相等


**实例1**

```js
console.log(JSON.stringify([1, 2, 3].sort()) === JSON.stringify([3, 2, 1].sort())); //true

```
**实例2**

```js
console.log([1, 2, 3].sort().toString() === [3, 2, 1].sort().toString()); //true
```
`注意`，经验证，上述方法对复杂数组结构不适用。




## JS中如何对象转数组方法

**(1).使用Array.from()方法**

Array.from() 方法，用于数组的浅拷贝。就是将一个类数组对象或者可遍历对象转换成一个真正的数组。

**用法**
```js
JSON.stringify({ "a": "1", "b": "2" })
结果是："{"a":"1","b":"2"}"
```
**实例**
```js
let obj = {
0: 'nihao',
1: 'haha',
2: 'gansha',
'length': 3
}
let arr = Array.from(obj)

```
 **结果显示：**
 ```js
console.log(arr);//['nihao', 'haha', 'gansha']
 ```

 **(2).使用Object.keys(object)**


**实例**
```js
let obj = {
0: 'nihao',
1: 'haha',
2: 'gansha',
'length': 3
}
let arr = Array.from(obj)

```
 **结果显示：**
 ```js
console.log(arr);[0, 1, 2]
 ```




## js判断是否是数组

 **通过Array.isArray()判断**


```js
let a = [1, 2, 3]
Array.isArray(a);//true
 ```

## js判断数组是否存在重复元素


```js
let arr = [1, 2, 4, 3, 4, 5];

console.log(new Set(arr));//Set { 1, 2, 4, 3, 5 }

console.log(new Set(arr).size);//5

console.log(arr.length);//6

if (new Set(arr).size !== arr.length) {
console.log("存在相同的元素");
}
```
`注意`，经验证，上述方法对复杂数组结构不适用。



 **补充js里size和length的区别**

`length`
 * length是js的原生方法，用于获取元素的个数和对象的长度
 * var length = $(obj).length;

`size`
 * size()属于方法，只能作用于对象上，获取元素的个数
 * var size = $(obj).size();
 * 注：如果想要获取字符串的长度只能用length属性，如
 * var length = $(obj).html().length;


## JS如何去除数组重复值

**运用ES6的Set数据结构**

```js
let arr = [1, 2, 4, 3, 6, 3, 4];
let set = new Set(arr);
let newArr = Array.from(set); // Array.from方法可以将 Set 结构转为数组。
console.log(newArr); // [ 1, 2, 4, 3, 6 ]

 ```

简化后：
```js
let arr = [1, 2, 4, 3, 6, 3, 4];
l
console.log(...new Set(arr);); // [ 1, 2, 4, 3, 6 ]

 ```

## JS如何获取数组重复的元素
```js
function refrain(arr) {
var tmp = [];
if (Array.isArray(arr)) {
arr.concat().sort().sort(function (a, b) {
if (a == b && tmp.indexOf(a) === - 1) tmp.push(a);
});
}
return tmp;
}
var arr1 = [12, 1, 3, 2, 3, 3];
var arr2 = ["1", "3", "1"];
 ```

 **结果显示：**
 ```js
console.log(refrain(arr1));// [ 3 ]
console.log(refrain(arr2));// [ '1' ]
 ```

## js常见过滤json数组某个字段
 ```js
let arrObj = [
    {name: '小明', id: 800},
    {name: '小红', id: 801},
    {name: '小刚', id: 802}
]
 
 let aArr = arrObj.filter(item => item.name === '小刚') 
 //[ { name: '小刚', id: 802 } ]

```

## 随机生成颜色
 ```js
const randomColor=()=>{
  let rgb=[]
  for(let i=0 ;i<3;++i){
let color=Math.floor(Math.random()*256).toString(16)
color=(color.length===1)?`0${color}`:color
rgb.push(color)
  }
  return `#${rgb.join("")}`
}


```


