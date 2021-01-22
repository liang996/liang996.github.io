---
title: js常见正则表达式运用
top: false
cover: false
toc: true
mathjax: true
summary: 正则表达式用于字符串处理、表单验证等场合，实用高效。现将一些常用的表达式收集于此，以备不时之需。
tags: javaScript
categories: javaScript
abbrlink: 51485
date: 2020-12-09 14:29:19
password:
---

由于项目中经常要用到正则表达式对字符串处理、表单验证，为此，我总结了一下我在项目中常用的正则

目录
===
<!-- TOC -->
  - [目录](#目录)
  - [1.验证手机号](#1验证手机号)
  - [2.验证密码（6-20位，允许字母、数字）](#2验证密码6-20位允许字母数字)
  - [3.验证二代身份证](#3验证二代身份证)
  - [4.限制图片后缀](#4限制图片后缀)
  - [5.验证邮箱](#5验证邮箱)
  - [6.验证纯数字](#6验证纯数字)
  - [7.验证帐号是否合法](#7验证帐号是否合法)
  - [8.验证匹配2~4个汉字](#8验证匹配24个汉字)
  - [9.验证时间格式](#9验证时间格式)
  - [10.自定义时间格式](#10自定义时间格式)
  - [11.订单编号前加时间戳](#11订单编号前加时间戳)



## 1.验证手机号


```js
export function verifyPhone(phone) {
  const phoneReg = /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/;
  return phoneReg.test(phone);
}
```

## 2.验证密码（6-20位，允许字母、数字）
```js
export function verifyPassword(password) {
  // 6-20位，允许字母、数字
  const passwordReg = /^[0-9A-Za-z]{6,20}$/;
  return passwordReg.test(password);
}
```

## 3.验证二代身份证
二代身份证号(18位数字),最后一位是校验位,可能为数字或字符X

```js
export function verifyIDCard(iDCard) {
  const iDCardReg = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/;
  return iDCardReg.test(iDCard);
}

```


## 4.限制图片后缀

限制图片后缀只能是'png', 'jpg', 'gif', 'jpeg'

```js
export function verifyImage(ext) {
  return ['png', 'jpg', 'gif', 'jpeg'].indexOf(ext.toLowerCase()) !== -1;
}
```

## 5.验证邮箱

```js
export function verifyEmail(Email) {
  const emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return emailrule.test(Email);
}

```

## 6.验证纯数字

```js
export function verifyNumber(isNumber) {
  const numberReg = /^([0-9])*$/;
  return numberReg.test(isNumber);
}

```

## 7.验证帐号是否合法
匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
```js
export function verifyAccount(isAccount) {
  const numberReg = /^a-zA-Z][a-zA-Z0-9_]{4,15}$/;
  return numberReg.test(isNumber);
}
```

## 8.验证匹配2~4个汉字
```js
export function verifyChinese(isChinese) {
  const ChineseReg = /^a-zA-Z][a-zA-Z0-9_]{2,4}$/;
  return ChineseReg.test(isChinese);
}

```
## 9.验证时间格式
```js
const dayjs = require('dayjs');

export function Time(time) {
  if (time) {
    return dayjs(time).format('YYYY/MM/DD HH:mm:ss');
  } else {
    return null;
  }

}
```


## 10.自定义时间格式
```js
const dayjs = require('dayjs');
export const  verityTodayTime() => {
    const date = new Date();//获取当前时间
    const todayTime = dayjs(date).format('YYYY-MM-DD');//获取当前时间，如2019-11-29 00:00:00
    return todayTime;
  }

```

  ## 11.订单编号前加时间戳

```js
//转时间
    const dayjs = require('dayjs');
   export const  verityOrderNoDate(time) => {
    const lowerLimit = dayjs(time).format('YYYYMMDDHHmmss');
    return lowerLimit;
  }
//拼接
   export const  getOrderNo(time) => {

    let orderNo = "";  //订单号
    for (let i = 0; i < 4; i++) //4位随机数，用以加在时间戳后面。
    {
      orderNo += Math.floor(Math.random() * 10);
    }
    const CodingDate = verityOrderNoDate(new Date());
    orderNo = CodingDate + orderNo;  //时间戳，用来生成订单号。
    if (num) {
      orderNo = orderNo + num;
    }
    return orderNo;
  }

