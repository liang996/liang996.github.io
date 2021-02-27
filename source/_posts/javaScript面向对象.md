---
title: javaScript面向对象
top: false
cover: false
toc: true
mathjax: true
date: 2021-02-27 13:33:26
password:
summary: 面向对象编程是用抽象方式创建基于现实世界模型的一种编程模式。
tags: 
- javaScript
- 面向对象
categories:
- javaScript
- 面向对象
---

面向对象编程是用抽象方式创建基于现实世界模型的一种编程模式。面向对象只是过程式代码的一种高度封装，目的在于提高代码的开发效率和可维护性


## 什么是面向对象编程？
面向对象编程 —— Object Oriented Programming，简称 OOP ，是一种编程开发思想。
它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。
在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。
因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），更适合多人合作的大型软件项目。

## 面向对象与面向过程
面向过程就是亲力亲为，事无巨细，面面俱到，步步紧跟，有条不紊 

面向对象就是找一个对象，指挥得结果

面向对象将执行者转变成指挥者

面向对象不是面向过程的替代，而是面向过程的封装


## 面向对象基本特征（oop）

封装：也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。

继承：通过继承创建的新类称为“子类”或“派生类”。继承的过程，就是从一般到特殊的过程。

多态：对象的多功能，多方法，一个方法多种表现形式。

抽象：结合复杂的继承，方法，属性的对象能够模拟现实的模型。

Javascript是一种基于对象（object-based）的语言。但是，它又不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有class（类）—–es6以前是这样的。所以es5只有使用函数模拟的面向对象。


## 对象实例化方式
原始模式：这样的写法有两个缺点，一是如果多生成几个（100个！）实例，写起来就非常麻烦；二是实例与原型之间，没有任何办法，可以看出没有什么联系。

```js
var Car = {
    color: 'red',//车的颜色
    wheel: 4,//车轮数量
}
var Car2 = {
    color: 'blue',
    wheel: 4,
}
alert(Car.color);//red
```
原始模式的改进：通过写一个函数，解决代码重复的问题。
```js
function createCar(color,wheel) {
    return {
        color:color,
        wheel:wheel
    }
}
//然后生成实例对象，就等于是在调用函数：
var cat1 = createCar("红色","4");
var cat2 = createCar("蓝色","4");

alert(cat1.color);//红色
```


**工厂模式**

```js
function createCar(color,wheel){//createCar工厂
    var obj = new Object;//或obj = {} 原材料阶段
    obj.color = color;//加工
    obj.wheel = wheel;//加工
    return obj;//输出产品
}
//实例化
var cat1 = createCar("红色","4");
var cat2 = createCar("蓝色","4");

alert(cat1.color);//红色

```

构造函数模式：为了解决从原型对象生成实例的问题，Javascript提供了一个构造函数（Constructor）模式。 所谓”构造函数”，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。加new执行的函数构造内部变化：自动生成一个对象，this指向这个新创建的对象，函数自动返回这个新创建的对象

```js

function CreateCar(color,wheel){//构造函数首字母大写
    //不需要自己创建对象了
    this.color = color;//添加属性，this指向构造函数的实例对象
    this.wheel = wheel;//添加属性

    //不需要自己return了
}

//实例化
var cat1 = new CreateCar("红色","4");
var cat2 = new CreateCar("蓝色","4");
alert(cat1.color);//红色
```


**构造函数的问题**
构造函数方法很好用，但是存在一个浪费内存的问题。如果现在为其再添加一个方法showWheel。那么，CreateCar就变成了下面这样，这样做有一个很大的弊端，对于每一个实例对象，showWheel都是一模一样的内容，每一次生成一个实例，都必须生成重复的内容，多占用一些内存。这样既不环保，也缺乏效率。

```js
function CreateCar(color,wheel){

    this.color = color;
    this.wheel = wheel;
    this.showWheel = function(){//添加一个新方法
        alert(this.wheel);
    }   
}

//还是采用同样的方法，生成实例：
var cat1 = new CreateCar("红色","4");
var cat2 = new CreateCar("蓝色","4");

alert(cat1.showWheel == cat2.showWheel); //false

```


## Prototype 原型
Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。 这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。__proto__是原型链，指向实例化的函数原型。

```js
function CreateCar(color,wheel){
    //属性写构造函数里面
    this.color = color;
    this.wheel = wheel;
}

//方法写原型里面
CreateCar.prototype.showWheel = function(){
    alert(this.wheel);
}
CreateCar.prototype.showName = function(){
    alert('车');
}

//生成实例。
var cat1 = new CreateCar("红色","4");
var cat2 = new CreateCar("蓝色","4");
cat1.showName();//'车'

//这时所有实例的showWheel属性和showName方法，其实都是同一个内存地址，指向prototype对象，因此就提高了运行效率。
alert(cat1.showWheel == cat2.showWheel );//true
alert(cat1.showName == cat2.showName );//true
console.log(cat1.__proto__ === CreateCar.prototype); //true
```
