---
title: JSON的基本使用说明
author: BiLiang 
top: true
cover: true
coverImg: /images/1.jpg
password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: false
mathjax: false
summary: JSON(JavaScript Object Notation, JS 对象简谱) 是一种轻量级的数据交换格式。它基于 ECMAScript (欧洲计算机协会制定的js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据
categories: 工具
tags:
  - json
  - html
abbrlink: 43700
date: 2020-10-20 13:30:16
---

目录
===
  - [目录](#目录)
	- [什么是 JSON ？](#什么是-json-)
	- [JSON 语法规则](#json-语法规则)
	- [JSON 名称/值对](#json-名称值对)
	- [访问对象值](#访问对象值)
	- [循环对象](#循环对象)
	- [JSON 对象中的数组](#json-对象中的数组)
	- [修改数组值](#修改数组值)
	- [删除数组元素](#删除数组元素)

## 什么是 JSON ？
```
1.JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
2.JSON 是轻量级的文本数据交换格式
3.JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许4.多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
5.JSON 具有自我描述性，更易理解
```
例子：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<h2>JavaScript 创建 JSON 对象</h2>
<p>
网站名称: <span id="jname"></span><br /> 
网站地址: <span id="jurl"></span><br /> 
网站 slogan: <span id="jslogan"></span><br /> 
</p>
<script>
var JSONObject= {
	"name":"菜鸟教程",
	"url":"www.runoob.com", 
	"slogan":"学的不仅是技术，更是梦想！"
};
document.getElementById("jname").innerHTML=JSONObject.name 
document.getElementById("jurl").innerHTML=JSONObject.url 
document.getElementById("jslogan").innerHTML=JSONObject.slogan 
</script>

</body>
</html>
```
结果显示
```
JavaScript 创建 JSON 对象
网站名称: 菜鸟教程
网站地址: www.runoob.com
网站 slogan: 学的不仅是技术，更是梦想！
```

## JSON 语法规则
JSON 语法是 JavaScript 对象表示语法的子集。
```
1.数据在名称/值对中
2.数据由逗号分隔
3.大括号保存对象
4.中括号保存数组
```

## JSON 名称/值对

JSON 数据的书写格式是：名称/值对。

名称/值对包括字段名称（在双引号中），后面写一个冒号，然后是值：
```
"name" : "菜鸟教程"
这很容易理解，等价于这条 JavaScript 语句：
name = "菜鸟教程"
```

## 访问对象值
你可以使用点号（.）来访问对象的值：
```
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<p>你可以使用点号（.）来访问 JSON 对象的值：</p>
<p id="demo"></p>
<script>
var myObj, x;
myObj = { "name":"runoob", "alexa":10000, "site":null };
x = myObj.name;
document.getElementById("demo").innerHTML = x;
</script>
</body>
</html>
```
运行结果
```
你可以使用点号（.）来访问 JSON 对象的值：
runoob
```

## 循环对象
你可以使用 for-in 来循环对象的属性：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>使用 for-in 来循环对象的属性:</p>

<p id="demo"></p>

<script>
var myObj = { "name":"runoob", "alexa":10000, "site":null };
for (x in myObj) {
    document.getElementById("demo").innerHTML += x + "<br>";
}
</script>

</body>
</html>
```
运行结果
```
使用 for-in 来循环对象的属性:
name
alexa
site
```

## JSON 对象中的数组
对象属性的值可以是一个数组：
```

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>访问 JSON 对象数组值。</p>

<p id="demo"></p>

<script>

var myObj, x;
myObj = {
	"name":"网站",
	"num":3,
	"sites":[ "Google", "Runoob", "Taobao" ]
}
x = myObj.sites[0];
document.getElementById("demo").innerHTML = x;

</script>

</body>
</html>
```
运行结果

```
访问 JSON 对象数组值。

Google
```

## 修改数组值

你可以使用索引值来修改数组值：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>修改 JSON 对象数组值。</p>

<p id="demo"></p>

<script>

var myObj, i, x = "";
myObj = {
	"name":"网站",
	"num":3,
	"sites":[ "Google", "Runoob", "Taobao" ]
};
 myObj.sites[1] = "Github";

for (i in myObj.sites) {
    x += myObj.sites[i] + "<br>";
}

document.getElementById("demo").innerHTML = x;

</script>

</body>
</html>
```
运行结果
```
修改 JSON 对象数组值。

Google
Github
Taobao
```

## 删除数组元素
我们可以使用 delete 关键字来删除数组元素：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p>删除数组元素</p>

<p id="demo"></p>

<script>
var myObj, i, x = "";
myObj = {
	"name":"网站",
	"num":3,
	"sites":[ "Google", "Runoob", "Taobao" ]
};
delete myObj.sites[1];

for (i in myObj.sites) {
    x += myObj.sites[i] + "<br>";
}

document.getElementById("demo").innerHTML = x;

</script>

</body>
</html>
```
运行结果
```
删除数组元素

Google
Taobao
```


