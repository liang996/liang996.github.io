---
title: js闭包
top: false
cover: false
toc: true
mathjax: true
summary: '闭包（closure）是Javascript语言的一个难点,也是前端面试题中最喜欢考查的知识点，话不多说，我来总结总结'
tags: javaScript
categories: javaScript
abbrlink: 35891
date: 2020-12-16 10:16:06
password:
---


闭包是一种特殊的对象。是指有权访问另一个函数作用域中的变量的函数。大多是在一个函数内部创建另一个函数,清晰的讲：闭包就是一个函数，这个函数能够访问其他函数的作用域中的变量。

## 闭包的3大特性

1. 函数嵌套函数

2. 函数内部可以引用函数外部的参数和变量

3. 参数和变量不会被垃圾回收机制回收

## 闭包的3大优点

1.变量长期驻扎在内存中

2.避免全局变量的污染

3.私有成员的存在 

## 闭包的缺点

常驻内存 会增大内存的使用量 使用不当会造成内存泄露，详解：

（1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

（2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。


## 变量的作用域

要理解闭包，首先必须理解Javascript特殊的变量作用域。


**全局变量**
全局变量:变量在函数外定义，整个代码都可以调用的变量。


```js
 　　　var msg="你好"
　　function f1(){
console.log(msg);
　　}
　　f1(); //"你好"
```
**注意：**
变量声明时如果不使用 var 关键字，那么它就是一个全局变量，即便它在函数内定义。

**局部变量**
局部变量：指只能用于定义它函数内部。对于其他的函数或脚本代码是不可用的。
```js
　　function f1(){
 　　　var msg="你好"
　　}
 console.log(msg); //msg is not defined
```

**从外部读取局部变量**

正常情况下，我们需要得到函数内的局部变量这是办不到的，不过可以在函数的内部，再定义一个函数才能实现。


```js
function mag() {
  var a = '变量1'
function mag1 () {
    console.info("结果：", a)//变量1
  }
} 

```
闭包是站在作用域的角度上来定义的，因为mag1访问到mag作用域的变量，所以imag1就是一个闭包函数。既然mag1可以读取mag中的局部变量，那么只要把mag1作为返回值，就可以在mag1外部读取它的内部变量了吗！


```js
function mag() {
  var a = '变量1'
  return (function mag1() {
    console.info("结果：", a)//变量1
  })()
}

console.log("打印：", mag())


//或
function mag() {
  var a = '变量1'
  var mag1 = function () {
    console.info("结果：", a)//变量1
  }
  return mag1    // mag1 就是一个闭包函数，因为他能够访问到mag函数的作用域
}

var w = mag()   // 获得inner闭包函数
console.log("打印：", w())

//或
function mag() {
  var a = '变量1'
 function mag1 () {
    console.info("结果：", a)//变量1
  }
  mag1()   // mag1 就是一个闭包函数，因为他能够访问到mag函数的作用域
}

console.log("打印：", mag())


//结果： 变量1
//打印： undefined

```
现在我们明白了闭包，已经对应的作用域与作用域链，那我出几道考题：

**考题1**

```js
function f1() {

  var n = 999;

  nAdd = function () { n += 1 }

  function f2() {
    console.log(n);
  }

  return f2;

}

var result = f1();

result(); // 999

nAdd();

result(); // 1000
```
在这段代码中，result实际上就是闭包f2函数。它一共运行了两次，第一次的值是999，第二次的值是1000。这证明了，函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。

**考题2**

```js
for(var a=0;a<5;a++){
setTimeout(()=>{console.log(a)},1000)
}

// 5个5
```

按照预期它应该依次输出1 2 3 4 5，而结果它输出了五次5，这是为什么呢？原来由于js是单线程的，所以在执行for循环的时候定时器setTimeout被安排到任务队列中排队等待执行，而在等待过程中for循环就已经在执行，等到setTimeout可以执行的时候，for循环已经结束，i的值也已经编程5，所以打印出来五个5，那么我们为了实现预期结果应该怎么改这段代码呢？（ps:如果把for循环里面的var变成let，也能实现预期结果）


**破解方案1**
```js

for (var a = 0; a < 5; a++) {
  (function (a) {
    setTimeout(() => { console.log(a) }, 1000)

  }(a))
}

//
```

**破解方案2**

```

for (let a = 0; a < 5; a++) {
 
  setTimeout(() => { console.log(a) }, 1000)

}

//0,1,2,3,4
```