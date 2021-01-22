---
title: TypeScript进阶之接口和类
top: false
cover: false
toc: true
mathjax: true
summary: TypeScript 是 JavaScript 的一个超集，本章将继续深入学习TypeScript接口和类的知识
tags:
  - typescript
categories: typescript
abbrlink: 44947
date: 2020-11-17 15:03:11
password:
---



目录
===
<!-- TOC -->
- [目录](#目录)
  - [TypeScript 接口](#typescript-接口)
  - [TypeScript 类](#typescript-类)



## TypeScript 接口
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型.接口是一系列抽象方法的声明，是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

简单的例子
```js

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```
上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。

`注意`：接口一般首字母大写,并且接口必须代表对象。

定义的变量比接口少了一些属性是不允许的：
```js
interface Person {
 name: string;
 age: number;
}

let tom: Person = {
 name: 'Tom'
};
console.log(tom)

// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.

```
多一些属性也是不允许的：
```js
interface Person {
 name: string;
}

let tom: Person = {
 name: 'Tom',
  age: 18;

};
console.log(tom)

// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.

```

**可选属性**

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。不作强制要求，就是可选值。typeScript可选属性定义，就是在:号前加一个?

```js
interface Student {
 name: string;
age?: 18;

}

let jack: Student = {
 name: 'Tom',
};
console.log(jack)
```
这时候在定义jack对象的时候，就可以写或也可以不写age了。


**只读属性**

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：

```js
interface Student {
    readonly x: number;
    readonly y: number;
}
```
你可以通过赋值一个对象字面量来构造一个Student。 赋值后， x和y再也不能被改变了。
```js
let h: Student = { x: 10, y: 20 };
h.x = 5; // Cannot assign to 'x' because it is a read-only property.
```

**任意属性**

有时候我们希望一个接口允许有任意的属性，就是自己愿意写什么就写什么：


```js
interface Student {
 name: string;
age?: 18;
    [propName: string]: any;


}

let jack: Student = {
 name: 'Tom',
 sex:"男"
};
console.log(jack)//{ name: 'Tom', sex: '男' }
```
使用 [propName: string] 定义了任意属性取 string 类型的值。

**接口里的方法**

接口里不仅可以存属性，还可以存方法

```js
interface Student {
 name: string;
age?: 18;
    [propName: string]: any;
  say(): string;


}

let jack: Student = {
 name: 'Tom',
 sex:"男"
};
console.log(jack)//Property 'say' is missing in type '{ name: string; sex: string; }' but required in type 'Student'.
```
加上这个say()方法后，程序马上就会报错，因为我们对象里没有 say 方法。那我们就要给对象一个 say 方法

```js
let jack: Student = {
 name: 'Tom',
 sex:"男"，
  say() {
    return "少年中国";
  },
};
```


## TypeScript 类

TypeScript 是面向对象的 JavaScript。

类描述了所创建的对象共同的属性和方法。

TypeScript 支持面向对象的所有特性，比如 类、接口等。

**属性和方法**
使用 class 定义类，使用 constructor 定义构造函数。

通过 new 生成新实例的时候，会自动调用构造函数。

```js
class Student {
    public name:string;
    constructor(name:string) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Student('tom');
console.log(a.sayHi()); // My name is tom

```
`补充`：在引用任何一个类成员的时候都用了 this。 它表示我们访问的是类的成员。


**类的继承**

在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。继承关键字是`extends`

```js
class Humanity {
  content = "我是人类";
  sayHello() {
    return this.content;
  }
}
class Student extends Humanity {
  say() {
    return "我是学生，继承人类";
  }
}

const St = new Student();

```
类中的字段属性和方法可以使用 . 号来访问：
```js
console.log(St.sayHello());//我是人类
console.log(St.say());//我是学生，继承人类
```
类写好以后，我们声明的对象是Student这个类，我们同时执行sayHello()say()都是可以执行到的，这说明继承起作用了。

**类的重写**

类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写。

其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。
```js
class Humanity {
  content = "我是人类";
  sayHello() {
    return this.content;
  }
}
class Student extends Humanity {
  say() {
    return "我是学生，继承人类";
  }
    sayHello() {
    return "我是一个大类";
  }
}

const St = new Student();

console.log(St.sayHello());//我是一个大类

```
然后我们再次运行ts-node demo10.ts来查看结果。

**super关键字的使用**


其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法。

```js
class Humanity {
  content = "我是人类";
  sayHello() {
    return this.content;
  }
}
class Student extends Humanity {
  say() {
    return "我是学生，继承人类";
  }
    sayHello() {
    return  super.sayHello()+",我是一个大类";
  }
}

const St = new Student();

console.log(St.sayHello());//我是人类,我是一个大类

```
**static 关键字的使用**


使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用.

比如我们先写一下最常规的写法：
```js
class Humanity {
  say() {
    return "我是人类";
  }
}

const aa= new Humanity();
console.log(aa.say());//我是人类
```
如果现在你不想new出对象,那么就可以用static声明的属性和方法，不需要进行声明对象，就可以直接使用。

```js
class Humanity {
 static say() {
  return "我是人类";
 }
}
console.log(Humanity.say());//我是人类
```


**instanceof 运算符**

instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。

```js
class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
```
输出结果为：
```js
obj 对象是 Person 类实例化来的吗？ true
```
**构造函数**

当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。构造函数的关键字是`constructor`


```js
class Person{
    public name :string ;
    constructor(name:string){
        this.name=name
    }
}

const person= new Person('tom')
console.log(person.name)
```
输出结果为：
```js
tom
```

更简单的写法：
```js
class Person{
   ;
    constructor( public name :string ){
    }
}

const person= new Person('tom')
console.log(person.name)
```
输出结果为：
```js
tom
```
这种写法就相当于你定义了一个name,然后在构造函数里进行了赋值，这是一种简化的语法。



**readonly 关键字的使用**

只读属性关键字，只允许出现在属性声明或索引签名或构造函数中,不能修改。。

```js
class Person {
    constructor(public name:string ){ }
}

const person = new Person('tom')
person.name= 'jack'
console.log(person.name)//jack

```
写完后结果显示是`jack`,比如我现在有一个需求，就是在实例化对象时赋予的名字，以后不能再更改了,那就可以用到readonly 关键字了。

```js
class Person {
    constructor(readonly name:string ){ }
}

const person = new Person('tom')
person.name= 'jack'
console.log(person.name)//Cannot assign to 'name' because it is a read-only property.
```
结果直接给我们报错，错误告诉我们name属性是只读属性，不能修改。



**访问控制修饰符**

TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限，分别是：公有（public），私有（private）与受保护（protected）的修饰符。


* public（默认） : 公有，可以在任何地方被访问。

* protected : 受保护，可以被其自身以及其子类和父类访问。

* private : 私有，只能被其定义所在的类访问。

**公有（public）**

 在TypeScript里，成员都默认为 public。public是公有的，可以在任何地方被访问。

```js
class Humanity {
 public content:string;
  public say() {
    return this.content;
  }
}
//-------以下属于类的外部--------

const humanity = new Humanity()
humanity.content = '我是内容'

console.log(humanity.say())//我是内容

```

**私有（private）**

private 私有的意思，可以被其自身以及其子类和父类访问，外部不允许调用


```js
class Humanity {
 private content:string;
  public say() {
    return this.content; //此处不报错
  }
}
//-------以下属于类的外部--------

const humanity = new Humanity()
humanity.content = '我是内容'
console.log(humanity.content)// Property 'content' is private and only accessible within class 'Humanity'

```
**受保护（protected）**

protected 允许在类内及继承的子类中使用


```js
class Humanity {
 protected content:string;
  public say() {
    return this.content; ////此处不报错
    }
}
//-------以下属于类的外部--------

const humanity = new Humanity()
humanity.content = '我是内容'
console.log(humanity.content)//Property 'content' is protected and only accessible within class 'Humanity' and its subclasses.

```
name的访问属性换成protected,这时候外部调用name的代码会报错，内部的不会报错，和private一样。这时候再写一个Teacher类，继承于Humanity,代码如下
```js

class Humanity {
 protected content: string;
 public say() {
  return this.content;//此处不报错
 }
}
class Teacher extends Humanity {
 public sayBye() {
  this.content; 
 }
}

```
这时候在子类中使用this.content是不报错的。



**抽象类**
`abstract` 用于定义抽象类和其中的抽象方法。

什么是抽象类？

首先，抽象类是不允许被实例化的：
```js
abstract class Animal {
 constructor(public name: string) {
 }
 public abstract sayHi();//因为没有具体的方法，所以我们这里不写括号
}

let a = new Animal('Jack')//无法创建抽象类的实例。:Cannot create an instance of an abstract class.
```
上面的例子中，我们定义了一个抽象类 Animal，并且定义了一个抽象方法 sayHi。在实例化抽象类的时候报错了。

其次，抽象类中的抽象方法必须被子类实现：
```js

abstract class Humanity {
 constructor(public content: string) {
 }
 public abstract play();//因为没有具体的方法，所以我们这里不写括号
}


class Student extends Humanity {
 public say(): void {
  console.log(`${this.content} is 表达问候`);
 }
}

let aa = new Student('你好');//非抽象类“Student”不实现从类“Humanity”继承的抽象成员“play”。

```
上面的例子中，我们定义了一个类 Student 继承了抽象类 Humanity，但是没有实现抽象方法 play，所以编译报错了。

下面是一个正确使用抽象类的例子：
```js
abstract class Humanity {
 constructor(public content: string) {
 }
 public abstract play();
}


class Student extends Humanity {
  public play() {
    console.log(`${this.content}`);
  }
}

let aa = new Student('赛车');
```

上面的例子中，我们实现了抽象方法 sayHi，编译通过了。




