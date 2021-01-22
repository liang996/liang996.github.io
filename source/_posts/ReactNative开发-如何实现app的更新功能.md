---
title: 'ReactNative开发:就前端而言，如何实现app的更新功能'
top: false
cover: false
toc: true
mathjax: true
summary: 一般的安卓app都有自动更新功能，实现app的更新，以让用户体验新版本的功能，这里也是项目中用到的，今天就来总结一下
tags:
  - ReactNative
  - ios
  - Android
categories: 移动端开发
abbrlink: 41726
date: 2020-11-10 17:42:52
password:
---
目录
===
最近有很多小伙伴问我，在ReactNative项目中，如何实现app的更新功能，为了解答大家的疑惑，我为此发表此博客


## app更新思路
数据库里存放最新版本的型号，然后客户端对比，如果版本不是最新。则下载服务器端的新APP


## 前端的准备工作

1.需要获取移动设备信息

获取移动设备信息的组件名叫：react-native-device-info，兼容IOS和安卓双平台，可以获取设备ID、设备品牌、设备型号、IP以及APP版本号等信息。是一个应用很广泛的基础组件。

react-native-device-info npm地址：https://www.npmjs.com/package/react-native-device-info


**组件说明**

该组件是一个第三方的获取移动设备信息的一个组件，适用于ios和android双平台


**安装**

使用npm:

```bash
npm install --save react-native-device-info
```
使用yarn:

```bash
yarn add react-native-device-info
```


**使用示例**

竟然是要比对版本，首先获取版本号才是前提，
react-native-device-info组件中有一个getVersion()方法，用来获取应用程序版本。

```js
  import DeviceInfo from 'react-native-device-info';

  const device = {};
  device.AppVersion = DeviceInfo.getVersion();//获取获取应用程序版本。

```
2.需要区分平台（Platform）

Platform模块用于区分移动设备的操作系统及api版本，另外，还可以根据不同平台的后缀扩展名自动识别并装载组件。


```js
import {  Platform } from 'react-native';

      if (Platform.OS === 'android') {
        //安卓判断
      } else if (Platform.OS === 'ios') {
               //ios判断

      }
```


3.代码借鉴

```js
import {  Platform } from 'react-native';
import { getVersion } from 'react-native-device-info';

export default {
  state: {
    appVision: {
      versionNum: '',
    },
  },

  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),

  },
  effects: (dispatch) => ({

//定义一个getAPPversion（）方法
    getAPPversion() {
     //区分平台
      if (Platform.OS === 'android') {
         //获取版本并更新
        this.update({
          versionNum: getVersion(),
        });
      } else if (Platform.OS === 'ios') {
        this.update({
          versionNum: getVersion(),
        });
      }
    },
//需要用的获取版本时，在调用该getAPPversion（）方法即可
  }),
};


```

## 后端的准备工作

接受前端插入的版本号，与数据库里存放版本的型号做对比

## 留言





