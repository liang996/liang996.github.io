---
title: react事件绑定的方法总结
top: false
cover: false
toc: true
mathjax: true
summary: 使用react，绕不开事件绑定和传参，为此我总结了react事件绑定的方法有以下几种。
tags: react
categories: react
abbrlink: 34248
date: 2020-12-18 13:51:54
password:
---


## React事件绑定

由于类的方法默认不会绑定this，因此在调用的时候如果忘记绑定，this的值将会是undefined。
通常如果不是直接调用，应该为方法绑定this


下面是我练习react事件绑定的方法例子,联合用到了最常见的4种写法

```
import React, { Component, Fragment } from 'react';

class BindDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '请输入喜欢的明星',
            list: ['王力宏', '林俊杰'],
        };
        // 1. 在构造函数中使用bind绑定this

        this.inputChange = this.inputChange.bind(this);
    }

    //
    inputChange(e) {
        console.log(' e.target.value,,,,', e.target.value);
        this.setState({
            inputValue: e.target.value,
        });
    }

    //删除选中的单项
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list,
        });
    }

    //删除选中的单项
    deleteItem1 = (index) => {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list,
        });
    };

    //增加列表项
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
        });
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange} />
                    <button onClick={this.addList.bind(this)}> 增加明星 </button>{' '}
                    {/** 2. 在调用的时候使用bind绑定this*/}
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li
                                key={index + item}
                                // onClick={(index) => { this.deleteItem(index) }}//3.在调用的时候使用箭头函数绑定this

                                //或
                                onClick={this.deleteItem1} //4.使用属性初始化器语法绑定this(实验性)
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}
export default BindDemo;
```


## 1. 在构造函数中使用bind绑定this
 优点为仅需要一次绑定，不需要每次调用去执行绑定。


```
class Button extends React.Component {
constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log('this is:', this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

## 2. 在调用的时候使用bind绑定this

```
class Button extends React.Component {
  handleClick(){
    console.log('this is:', this);
  }
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Click me
      </button>
    );
  }
}
```


##  3. 在调用的时候使用箭头函数绑定this

```
class Button extends React.Component {
  handleClick(){
    console.log('this is:', this);
  }
  render() {
    return (
      <button onClick={()=>this.handleClick()}>
        Click me
      </button>
    );
  }
}

```

##  4. 使用属性初始化器语法绑定this


```
class Button extends React.Component {
  handleClick=()=>{
    console.log('this is:', this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```


## 比较

**方式2和方式3都是在调用的时候再绑定this。**

**优点**：写法比较简单，当组件中没有state的时候就不需要添加类构造函数来绑定this

**缺点**：每一次调用的时候都会生成一个新的方法实例，因此对性能有影响，并且当这个函数作为属性值传入低阶组件的时候，这些组件可能会进行额外的重新渲染，因为每一次都是新的方法实例作为的新的属性传递。

**方式1在类构造函数中绑定this，调用的时候不需要再绑定**

**优点**：只会生成一个方法实例，并且绑定一次之后如果多次用到这个方法也不需要再绑定。
缺点：即使不用到state，也需要添加类构造函数来绑定this，代码量多一点。。。

**方式4**：利用属性初始化语法，将方法初始化为箭头函数，因此在创建函数的时候就绑定了this。

**优点**：创建方法就绑定this，不需要在类构造函数中绑定，调用的时候不需要再作绑定。结合了方式1、方式2、方式3的优点
**缺点**：目前仍然是实验性语法，需要用babel转译

## 总结1

1. 方式1是官方推荐的绑定方式，也是性能最好的方式。

2. 方式2和方式3会有性能影响并且当方法作为属性传递给子组件的时候会引起重渲问题。

3. 方式4目前属于实验性语法，但是是最好的绑定方式，需要结合bable转译


## 总结2

1. 构造函数内绑定：
在构造函数 constructor 内绑定this，好处是仅需要绑定一次，避免每次渲染时都要重新绑定，函数在别处复用时也无需再次绑定，需要注意的是，使用这种方式要在构造函数中为事件回调函数绑定this: this.doAction = this.doAction.bind(this)，否则doAction中的this是undefined。这是因为ES6 语法的缘故，ES6 的 Class 构造出来的对象上的方法默认不绑定到 this 上，需要我们手动绑定。

2. 用bind绑定：
Function.prototype.bind(thisArg [, arg1 [, arg2, …]]) 是ES5新增的函数扩展方法，bind()返回一个新的函数对象，该函数的this被绑定到thisArg上，并向事件处理器中传入参数，要注意的是，跟在this（或其他对象）后面的参数，之后它们会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们的后面。

3. 用箭头函数：
       这种方式最大的问题是，每次render调用时，都会重新创建一个事件的回调函数，带来额外的性能开销，当组件的层级越低时，这种开销就越大，因为任何一个上层组件的变化都可能会触发这个组件的render方法。当然，在大多数情况下，这点性能损失是可以不必在意的。这种方式也有一个好处，就是不需要考虑this的指向问题，因为这种写法保证箭头函数中的this指向的总是当前组件。



注：文章借鉴

[React事件绑定的几种方式对比
](https://segmentfault.com/a/1190000011317515)