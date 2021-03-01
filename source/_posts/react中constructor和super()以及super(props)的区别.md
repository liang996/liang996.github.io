---
title: react中constructor和super()以及super(props)的区别。
top: false
cover: false
toc: true
mathjax: true
date: 2021-03-01 16:28:36
password:
summary: 由于react中constructor和super()以及super(props)的区别
tags:
categories:
---
由于react是现在项目工程经常用到的，但是一直不太懂constructor和super()以及super(props)的区别，为此我特此总结了一下，便于自己学习。

## 1. 定义class组件，为什么需要加上 super() ？


```html 

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOOK</title>

</head>

<body>
  <!-- 准备好一个“容器” -->
  <div id="test"></div>

  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom，用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel，用于将jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <script type="text/babel">

    class Welcome extends React.Component {
      constructor() {
        this.state = { "but": "test1111" }

      }

      onC = () => {
        this.setState({ "but": "test1111rde55" })
      }
      render() {
        return (
          <button onClick={this.onC}> {this.state.but}</button>
        )
      }
    }

    ReactDOM.render(
      <Welcome />, document.getElementById("test"))
  </script>
</body>

</html>


```

　　编译错误：

```js
Uncaught SyntaxError: Inline Babel script: 'this' is not allowed before super()

```

提示没有在this之前加上super(),报错的原因是：子类是没有自己的 this 对象的，它只能继承自父类的 this 对象，然后对其进行加工，而super( )就是将父类中的this对象继承给子类的。没有 super，子类就得不到 this 对象。



## 2. super()作用是什么 ？

super( )用于继承，在class方法中，继承是使用 extends 关键字来实现的。子类 必须 在 constructor( )调用 super( )方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
如果不调用super方法，子类就得不到this对象。


## 3. 正确开启方式

`````html 

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOOK</title>

</head>

<body>
  <!-- 准备好一个“容器” -->
  <div id="test"></div>

  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom，用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel，用于将jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <script type="text/babel">

    class Welcome extends React.Component {
      constructor() {
        supper()
        this.state = { "but": "test1111" }

      }

      onC = () => {
        this.setState({ "but": "test1111rde55" })
      }
      render() {
        return (
          <button onClick={this.onC}> {this.state.but}</button>
        )
      }
    }

    ReactDOM.render(
      <Welcome />, document.getElementById("test"))
  </script>
</body>

</html>


```


但是在React的官方例子中都是加上了 props 作为参数

`````html 

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOOK</title>

</head>

<body>
  <!-- 准备好一个“容器” -->
  <div id="test"></div>

  <!-- 引入react核心库 -->
  <script type="text/javascript" src="../js/react.development.js"></script>
  <!-- 引入react-dom，用于支持react操作DOM -->
  <script type="text/javascript" src="../js/react-dom.development.js"></script>
  <!-- 引入babel，用于将jsx转为js -->
  <script type="text/javascript" src="../js/babel.min.js"></script>

  <script type="text/babel">

    class Welcome extends React.Component {
      constructor(props) {
        supper(props)
        this.state = { "but": "test1111" }

      }

      onC = () => {
        this.setState({ "but": "test1111rde55" })
      }
      render() {
        return (
          <button onClick={this.onC}> {this.state.but}</button>
        )
      }
    }

    ReactDOM.render(
      <Welcome />, document.getElementById("test"))
  </script>
</body>

</html>



```

## 4.加与不加props的区别究竟在哪里呢？


   如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上;

   如果你在constructor中要使用this.props,就必须给super加参数：super(props)；

   （无论有没有constructor，在render中this.props都是可以使用的，这是React自动附带的；）

   如果没用到constructor,是可以不写的；React会默认添加一个空的constructor。

