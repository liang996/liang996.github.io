---
title: 初识TypeScript
top: false
cover: false
toc: true
mathjax: true
summary: >-
  TypeScript 是 JavaScript 的一个超集，，也就是说 TypeScript 是建立在 JavaScript 之上的，最后都会转变成
  JavaScript, 由微软公司在 2012 年正式发布。
tags:
  - typescript
categories: typescript
abbrlink: 39558
date: 2020-11-13 08:55:43
password:
---

目录
===
<!-- TOC -->
  - [目录](#目录)
  - [TypeScript 开发环境搭建](#typescript-开发环境搭建)
  - [TypeScript编写第一个运用代码](#typescript编写第一个运用代码)
  - [TypeScript 基础类型](#typescript-基础类型)
  - [TypeScript 中的类型注解和类型推断](#typescript-中的类型注解和类型推断)
  - [TypeScript 类型断言](#typescript-类型断言)
  - [TypeScript 类型别名](#typescript-类型别名)
  - [TypeScript 枚举](#typescript-枚举)

TypeScript 是 JavaScript 的一个超集，，也就是说 TypeScript 是建立在 JavaScript 之上的，最后都会转变成 JavaScript, 由微软公司在 2012 年正式发布。



## TypeScript 开发环境搭建
**1.node安装**

下载地址：https://nodejs.org/en/
安装成功后，配置环境变量 在path中添加：
在命令窗口测试node 是否配置成功：
```bash
node -v
```
输出node版本即为成功

**2.安装TypeScript**

1.NPM 安装 TypeScript

```node
通过命令：npm install -g typescript
```
2.Yarn 安装 TypeScript

```node
通过命令：yarn add  TypeScript
```

安装完成后我们可以使用 tsc 命令来执行 TypeScript 的相关代码，以下是查看版本号：
```node
$ tsc -v
Version 3.2.2
```

## TypeScript编写第一个运用代码

 通常我们使用 .ts 作为 TypeScript 代码文件的扩展名，，用 TypeScript 编写 React 时，以 .tsx 为后缀。开发环境搭建好后，首先我们新建一个 test.ts 的文件，代码如下：


```ts
var say:string = "Hello World" 
console.log(say)
```
这时候你使用node test.ts是执行不成功的，因为 Node 不能直接运行TypeScript文件。

`补充`：TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。

然后执行以下命令将 TypeScript 转换为 JavaScript 代码：

```ts
tsc test.ts
```
这时候再当前目录下（与 test.ts 同一目录）就会生成一个 test.js 文件，代码如下：

```js
var say = "Hello World";
console.log(say);
```

最后用命令行输入如下命令
```node
node test.js

```
在终端里就可以顺利的输出Hello World的字符了。


`补充`：我们可以同时编译多个 ts 文件：

tsc test.ts test1.ts test2.ts

**ts-node 的安装和使用**

通过TypeScript编写第一个运用我们可以看到，要想打印出test.ts文件的内容，我们要通过两条命令才能打印出来，那么有没有什么简单的操作直接用一条命令打印出结果呢，结果是，当然有。

使用npm命令来全局安装，直接在命令行输入下面的命令：

```node
npm install -g ts-node

```
安装完成后，就可以在命令中直接输入如下命令，来查看结果了。

```node
ts-node test.ts
```


## TypeScript 基础类型


JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。


由于TypeScript是JavaScript的超集，自然也支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。


**1.Any 类型**

声明为 any 的变量可以赋予任意类型的值。任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型。


例：接受用户键盘输入，用户可以输入任意值

```js
let A: any = 1;    // 数字类型
A = 'I am who I am';    // 字符串类型
A = false;    // 布尔类型
```


**2.空值(void)**

void有点相反any：根本没有任何类型。您可能通常将其视为不返回值的函数的返回类型

```js
function alertName(): void {
    alert('My name is Tom');
}



```
如果这样定义后，你再加入任何返回值，程序都会报错。


声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：

```js
let unusable: void = undefined;
```


**3.数组（Array)**

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 


**第一种，「类型 + 方括号」表示法**

```js
let list: number[] = [1, 2, 3];
const list1: String[] = ["1", "2", "3"];


```
数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
```js
let list: number[] = [1, 1, 2, 3, 5];
list.push('66');//Argument of type 'string' is not assignable to parameter of type 'number'.
```
**第二种方式是使用数组泛型，Array<元素类型>**

```js
let list: Array<number> = [1, 2, 3];

```
这时候问题来了，如果数组中有多种类型，比如既有数字类型，又有字符串的时候。那我们要如何定义那。 很简单，只要加个()，然后在里边加上|就可以了，具体看代码。

```js

const arr: (number | string)[] = [1, "string", 2];

```

**4.元组 (Tuple)**

元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。

```js
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob
```
**5.枚举 (enum)**


enum类型是对JavaScript标准数据类型的一个补充,枚举类型用于定义数值集合。

```js
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2
```


**6.never**


never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如死循环)

```js
function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}

```

还有一种是一直循环，也是我们常说的死循环，这样也运行不完，比如下面的代码：
```js
function forNever(): never {
  while (true) {}
  console.log("Hello JSPang");
}
```
## TypeScript 中的类型注解和类型推断


**类型注解**
新建一个文件demo.ts ,然后看代码：

```js
let count: number;
count = 123;
```
这段代码就是类型注解，意思是显示的告诉代码，我们的count变量就是一个数字类型，这就叫做类型注解。

**类型推断**
如果没有明确的指定类型，那么 TypeScript 会依照类型推断（Type Inference）的规则推断出一个类型。

```js
let say = 'Hello World';
say = 7;
```

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

事实上，它等价于：

```js
let say: string = 'Hello World';
say = 7;
```
TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推断。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
```js
let say  //被推断成 any 类型
say= 'Hello World';
```


**补充：类型注解的使用时机**

如果 TypeScript 能够自动推断出变量类型， 我们就不需要使用类型注解，相反TypeScript无法推断出变量类型的话， 我们就需要使用类型注解。

```js
const one = 1;
const two = 2;
const three = one + two;
```
再来看一个用写类型注解的例子：


```js
function getTotal(one, two) {
  return one + two;
}

const total = getTotal(1, 2);
```
这种形式，就需要用到类型注释了，因为这里的one和two会显示为any类型。这时候如果你传字符串，你的业务逻辑就是错误的，所以你必须加一个类型注解，把上面的代码写成下面的样子。

```js
function getTotal(one: number, two: number) {
  return one + two;
}

const total = getTotal(1, 2);
```

`补充：`将上面实例稍微改动下
```js
function getTotal(one: number, two: number) {
  return one + two + "";
}

const total = getTotal(1, 2);
```
这时候total的值就不是number类型了，很显然不是我们预期想要达到的效果，你可能会为了你预期想要达到的效果将代码改成如下写法：
```js

const total: number = getTotal(1, 2);
//Type 'string' is not assignable to type 'number'.
```

这样写虽然可以让编辑器报错，但是这还不是很高明,合适的做法是给函数的返回值加上类型注解

```js

function getTotal(one: number, two: number): number {
  return one + two;
}

const total = getTotal(1, 2);
```
这段代码就比较严谨了


## TypeScript 类型断言
有时候会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
类型断言可以用来手动指定一个值的类型。

类型断言有两种形式： 

**第一种是“尖括号”语法:**

```js
let meg: any = "this is a string";
let strLength: number = (<string>meg).length;

```


**另一个为as语法:**
```js
let meg: any = "this is a string";
let strLength: number = (meg as string).length;

```

`注意`：

* 1.类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的.
* 2.jsx语法中，只能使用 as

**TypeScript 类型断言使用时机:**

有时候，我们需要在还不确定类型的时候就访问其中一个类型的属性或方法，比如：

```js
function getLength(something: string | number): number {
    return something.length;
}

//Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.
```
这样因为number类型没有length属性而报错，此时我们就可以使用类型断言，将 something 断言成 string：
```js
function getLength(something: string | number): number {
    return (<string>something).length;
}
或
function getLength(something: string | number): number {
    return (something as string).length;
}
```



## TypeScript 类型别名

在实际应用中，有些类型名字比较长或者难以记忆，重新命名是一个较好的解决方案。

TypeScript可以通过type关键字给类型重命名，看如下代码实例：
```js
interface T1 {
  a: boolean;
  b: string;
}
  
interface T2 {
  a: boolean;
  b: number;
}
  
type T = T1 & T2;
```
上面的代码将交叉类型T1&T2重新命名为T。

```js

type ant = string;
let str:ant="蚂蚁部落";
```
别名不会新建一个类型，而是创建一个新名字来引用此类型。


## TypeScript 枚举
枚举是对 js 标准数据类型的补充，声明一组带名字的常量；比如一周只能有七天，颜色限定为红绿蓝等。

枚举使用 enum 关键字来定义，枚举按照枚举成员的类型可归为两大类：数字枚举类型和字符串枚举类型；
：


**数字枚举**
首先我们看看数字枚举，如果你使用过其它编程语言应该会很熟悉。
```js
enum Days {Sun=1, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days.Thu)//5
```
枚举成员会默认会被赋值为从 0 开始递增的数字，由于Sun使用初始化为 1。 其余的成员会从 1开始自动增长。所以Thu结果是5 

**字符串枚举**
字符串枚举的概念很简单，但是有细微的 运行时的差别。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
```js

enum Color {
    color1 = "blue",
    color2 = "red",
    color3 = "pink",
}

console.log(Color.color3)//pink

```


