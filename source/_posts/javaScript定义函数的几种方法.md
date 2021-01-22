---
title: javaScript定义函数的几种方法
top: false
cover: false
toc: true
mathjax: true
summary: JS函数的定义方式比较灵活，它不同于其他的语言，每个函数都是作为一个对象被维护和运行的。下面我总结下几种常用的函数定义方式.
tags:
  - javaScript
categories:
  - javaScript
abbrlink: 20198
date: 2021-01-22 11:09:57
password:
---

在 JavaScript 语言里，函数是一种对象，所以可以说函数是 JavaScript 里的一等公民（first-class citizens）。JS函数的定义方式比较灵活，下面我总结下几种常用的函数定义方式。

## 1.关键字函数:function


**无参函数**
```js
function func1() {
  return "我是无参函数"
}
```
**有参函数**

```js
function func2(name) {
  return `${name}`
}
```

因为在 JavaScript 里面是对象（object），所以它会有一些属性还有方法。比如 name 属性是函数的名字，length 属性指的是函数里面有多少个必须要传递的参数。比如访问上面定义的这个函数里的两个属性：

```
func2.name
// 输出 func2

func2.length
// 输出 1，表示有1个参数
```

## 2.在对象字面量中定义函数

```js
const obj={

aaa: function(){
  return  "在对象字面量中定义函数"
},

bbb(){   return  "在对象字面量中定义函数"}

}
```

上面定义了一个名字是 obj 的对象，在它里面添加了一个叫 aaa 的方法及一个叫 bbb 的方法。要使用这个方法可以这样：

```js
obj.aaa()
```


## 3.使用函数表达式的方法来定义函数:(字面量函数)


**无参数时**

```js
const ccc =function(）{

}
```
箭头函数写法
```js
const ccc =(） => {

}
```

**有一个参数时**


```js
const func3 = function ( name) {
  return ` ${name}`
}
```
箭头函数写法：

只有一个参数时,这时，我们可以把括号省略，    直接写成  const func3 = name=>{` ${name}`}

```
const func3 = (name) => {

　　return ` ${name}`

}
```

**有两个参数时普通写法**


```js
const func4 = function ( sex,name) {
  return ` ${sex}${name}`
}
```
有两个参数时箭头函数写法

```js
const func4 = (sex,name) =>{

　　return ` ${sex}${name}`

}
```
当函数在代码块中只有一行代码时；可以进行简化

简化后：

```js
const func4 = (sex,name) =>${sex}${name}`
```
