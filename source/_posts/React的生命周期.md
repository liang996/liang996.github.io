---
title: React的生命周期
top: false
cover: false
toc: true
mathjax: true
summary: >-
  在组件的整个生命周期中，随着该组件的props或者state发生改变，其DOM表现也会有相应的变化。一个组件就是一个状态机，对于特定地输入，它总返回一致的输出。简单的说：生命周期函数指在某一个时刻组件会自动调用执行的函数。
tags:
  - React
  - npm
categories:
  - 前端
  - React
abbrlink: 42594
date: 2020-10-27 17:58:08
password:
---

目录
===

- [目录](#目录)
  - [React生命周期的三个大阶段](#react生命周期的三个大阶段)
  - [React的生命周期图:](#react的生命周期图)
  - [挂载阶段（加载阶段：涉及5个钩子函数）](#挂载阶段加载阶段涉及5个钩子函数)
  - [更新阶段 加载阶段：涉及5个钩子函数）](#更新阶段-加载阶段涉及5个钩子函数)
  - [卸载阶段 销毁阶段：涉及1个钩子函数）](#卸载阶段-销毁阶段涉及1个钩子函数)
  - [补充](#补充)


在组件的整个生命周期中，随着该组件的props或者state发生改变，其DOM表现也会有相应的变化。一个组件就是一个状态机，对于特定地输入，它总返回一致的输出。简单的说：生命周期函数指在某一个时刻组件会自动调用执行的函数。



## React生命周期的三个大阶段


* 1.Mounting: 挂载阶段。(已插入真实 DOM)
* 2.Updation: 更新阶段。(正在被重新渲染)
* 3.Unmounting: 销毁阶段(已移出真实 DOM)



## React的生命周期图:


![React的生命周期图](https://i.loli.net/2020/11/02/GIed8qLH9EisKr4.jpg)


## 挂载阶段（加载阶段：涉及5个钩子函数）

这些方法会在组件实例创建和插入DOM中时被调用


**1.constructor()**

constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。


* 执行时间：组件被加载前最先调用，并且仅调用一次
* 作用：定义状态机变量

语法：

```bash
constructor(props) {
    super(props);
    this.state = {
      content:null,
    }
  }
```


注意：构造函数会在挂载前调用。只要使用了constructor()就必须写super(),否则会导致this指向错误。


**2.static getDerivedStateFromProps()**

这是react16.3之后新增的一个生命周期，这是一个静态方法，静态方法没有this所以不能使用setState，需要return一个对象，这个对象就相当于setState里面的参数。
常用于强制性的根据props来设置state,组件实例化后和接受新属性时调用，返回一个对象以更新状态，或返回null表明不需要更新状态



语法：

```bash
static getDerivedstateFromProps(nextProps,prevState){

}
```


注意：设置了这个生命周期就不能设置componentWillMount()


**3.coponentWillMount()**

componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后,挂载阶段前立刻调用，发生在render()之前

* 执行时间：组件初始渲染（render()被调用前）前调用，并且仅调用一次
* 作用：如果在这个函数中调用setState改变某些状态机，react会等待setState完成后再渲染组件

语法：

```bash
componentWillMount(){
    console.log('componentWillMount----组件将要挂载到页面的时刻')
}
```


注意：react*17版本之后将废弃。如果还想继续使用，可以使用UNSAFE_componentWillMount来代替。这个生命周期，是除了初始化之外，唯一一个能够直接同步修改state的地方。组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次,coponentWillMount() 在组件即将被挂载到页面的时刻执行。另外，子组件也有componentWillMount函数，在父组件的该函数调用后再被调用



**4.render()**

react是整个生命周期中必须的钩子函数，render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。此时就不能更改state了。


* 执行时间：componentWillMount之后，componentDidMount之前，
* 作用：渲染挂载组件
* 触发条件：（1）初始化加载页面（2）状态机改变setState ( 3 ) 接收到新的props（父组件更新）

语法：

```bash
render(){
    return(
    <div>
    ...
    </div>
    )
}
```

简单点说：主要用于创建虚拟dom，进行diff算法，更新dom树都在此进行。 页面state或props发生变化时触发render()函数。




**5.componentDidMount()**

componentDidMount()在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次。

* 执行时间：render之后被调用，并且仅调用一次
* 作用：渲染挂载组件；可以使用refs（备注：React支持一个特殊的属性，你可以将这个属性加在任何通过render()返回的组件中。这也就是说对render()返回的组件进行一个标记，可以方便的定位的这个组件实例。）

语法：

```bash
componentDidMount(){
    console.log('componentDidMount----组件挂载完成的时刻执行')
}
```


注意：componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。


**挂载阶段注意的问题**



componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行，因为在每一次组件更新时，render()函数都会进行diff算法，来比较更新前后的新旧DOM树。




## 更新阶段 加载阶段：涉及5个钩子函数）


组件分为两种情况，state改变和props改变。
如果state改变，会直接进行到组件更新的第二个shouldComponentUpdate,如果是props改变，会先走componentWillReceiveProps。

**1.componentWillReceiveProps()**

componentWillReceiveProps() 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。



语法：

```bash
componentWillReceiveProps (nextProps) {
}
```


注意：
* 1.在接受父组件改变后的props需要重新渲染组件时用到的比较多
* 2.接受一个参数nextProps
* 3.通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件
* 4.在挂载了的组件接收到新属性前调用。推荐使用getDerivedStateFromProps生命周期而不是该函数。



**2.shouldComponentUpdate()**

shouldComponentUpdate() 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
可以在你确认不需要更新组件时使用。

* 执行时间：组件挂载后（即执行完render），接收到新的state或props时被调用，即每次执行setstate都会执行该函数，来判断是否重新render组件，默认返回true；接收两个参数：第一个是心的props，第二个是新的state。
* 作用：如果有些变化不需要重新render组件，可以在该函数中阻拦

语法：

```bash
componentWillReceiveProps (nextProps) {
}
```


注意：
react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候





**3.componentWillUpdate()**


shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState。


语法：

```bash
 componentWillUpdate(nextProps,nextState){}

```


注意：
componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。




**4.render()**


和mount阶段一样，生成虚拟DOM

**5.componentDidUpdate()**


componentDidUpdate()组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。


* 执行时间：重新渲染后调用，在初始化渲染的时候该方法不会被调用
* 作用：使用该方法可以在组件更新之后操作DOM 元素

语法：

```bash
componentDidUpdate(prevProps,prevState){}

```


注意：
componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。


## 卸载阶段 销毁阶段：涉及1个钩子函数）


**1.componentWillUnmount()**


在父组件中定义一个flag为true的状态值，添加一个按钮声明一个onClick事件去
更改这个flag实现销毁组件。

* 执行时间：组件被卸载前调用，
* 作用：在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。


语法：

```bash
componentDidUpdate(prevProps,prevState){}

```


注意：
componentWillUnmount()组件将要卸载时调用，一些事件监听和定时器需要在此时清除。



## 补充


**1.组件生命周期的执行次数是什么样子的**


只执行一次： constructor、componentWillMount、componentDidMount

执行多次：render 、子组件的componentWillReceiveProps、componentWillUpdate、componentDidUpdate

有条件的执行：componentWillUnmount（页面离开，组件销毁时）

不执行的：根组件（ReactDOM.render在DOM上的组件）的componentWillReceiveProps（因为压根没有父组件给传递props）



**2.组件生命周期巧记**

* 数据接收 实现继承super(props) :constructor 

* 渲染组件 和 html 标签：render

* 组件将要挂载时触发的函数：componentWillMount

* 组件挂载完成时触发的函数：componentDidMount

* 是否要更新数据时触发的函数（检测组件内的变化 可以用作页面性能的优化(默认值为true)）：shouldComponentUpdate

* 将要更新数据时触发的函数：componentWillUpdate

* 数据更新完成时触发的函数：componentDidUpdate

* 组件将要销毁时触发的函数：componentWillUnmount

* 父组件中改变了props传值时触发的函数（ 接收组件传入输入数据）：componentWillReceiveProps

**3.特别注意**

当一个页面中存在子父组件时，要注意componentWillMount和componentDidMount的使用，如果需要先加载父组件（获取网路数据），父组件传值给子组件，再加载子组件（获取网路数据），那么不能同时在子父组件中使用componentDidMount获取网路数据，因为会先执行子组件的componentDidMount，会由于未得到父组件的传值而报错；解决方案：（1）父组件：componentWillMount，子组件：componentDidMount；（2）父组件：componentWillMount，子组件：componentWillMount；
当一个页面中如要实现左右联动效果，（比如：a页面中包含b1（左）和b2（右）页面，单击b1中的知识点，b2页面内容对应变化，b1向b2通过redux传参，b2首次通过 componentDidMount接收，后来通过componentWillReceiveProps接收）



注：文章借鉴

[浅析React生命周期函数的使用](https://blog.csdn.net/zrcj0706/article/details/78608740?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param)




