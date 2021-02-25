---
title: React.Fragment语法的使用
top: false
cover: false
toc: true
mathjax: true
date: 2021-02-25 14:39:03
password:
summary: React.Fragment 组件能够在不额外创建 DOM 元素的情况下，让 render() 方法中返回多个元素。一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。


tags: React
categories: React


---

React.Fragment 组件能够在不额外创建 DOM 元素的情况下，让 render() 方法中返回多个元素。一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。



react中一个常见模式是一个组件返回多个元素，Fragments允许你将子列表分组，而无需像DOM添加额外的节点。

```js
render() {
return (
  <React.Fragment>
    <ChildA />
    <ChildB />
    <ChildC />
  </React.Fragment>
);
}

```
一个常见模式是为一个组件返回一个子元素列表。以这个示例的 React 片段为例：

```js

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```


为了渲染有效的 HTML ， <Columns /> 需要返回多个 <td> 元素。如果一个父 div 在 <Columns /> 的 render()**** 函数里面使用，那么最终的 HTML 将是无效的。

```js
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```

在 <Table /> 组件中的输出结果如下：

```html
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

所以，我们介绍 Fragments。

```jsx
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

## 问题1.react.fragment是什么？

React.Fragment 组件能够在不额外创建 DOM 元素的情况下，让 render() 方法中返回多个元素。一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。



1.return的内容只能有一个根节点，需要一个包裹元素。一般我都会孤陋寡闻地用div，fragment的好处是聚合成一个子元素列表，且在DOM中不增加额外节点。可以直接简写成<></>。

```jsx
return<>
<Modal/>
<ConfirmModal/>
</>
```
react16开始，render支持返回数组，可以减少不必要的节点嵌套。上面的代码也可以写成这样：

```jsx
return[
<Modal/>
<ConfirmModal/>
]

```

## 问题2.为什么return加括号？


因为在JS中，每个代码换行编译时都会在末尾加上;，没有括号就会变成P2。所以括号的作用是告诉JS这是一个代码块不需要加分号。把代码写成以下两种格式，return的括号不是必须的，括号只起到增加代码可读性的作用。


<React.Fragment> 与 <>区别
<></> 语法不能接受键值或属性，<React.Fragment>可以。

使用显式 <React.Fragment> 语法声明的片段可能具有 key。一个使用场景是将一个集合映射到一个 Fragments 数组 - 举个例子，创建一个描述列表：

```js
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

key 是唯一可以传递给 Fragment 的属性。未来可能会添加对其他属性的支持，例如事件。

`注意`：简写形式<></>，但目前有些前端工具支持的还不太好，用 create-react-app 创建的项目可能就不能通过编译。所以遇到这种情况很正常。


注：文章借鉴

[React Fragment介绍与使用](https://blog.csdn.net/weixin_43720095/article/details/104943812)
