---
title: react生命周期函数之shouldComponentUpdate
top: false
cover: false
toc: true
mathjax: true
date: 2021-02-28 15:53:26
password:
summary: react生命周期函数之shouldComponentUpdate
tags: react
categories: react
---
在react开发中，经常需要对数据state状态进行改变，但是这种方式每当setState的时候都会将所有的组件重新渲染一遍，这样就会有重复渲染render的问题。

默认情况下，当执行setState()方法时，react 会重新渲染整个组件树，这造成不必要的性能开销。





## 如何优化

shouldComponentUpdate函数是re-render是render()函数调用前被调用的，他的两个参数nextProps和nextState，分别表示下一个props和下一个state的值。我们重写这个钩子，当函数返回false时，阻止接下来的render()调用以及组件重新渲染，反之，返回true时，组件向下走render重新渲染。

所以我们可以在父组件中，重写这个方法：

```
shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      return true
    }
    return false
  }
```

这时候，组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

