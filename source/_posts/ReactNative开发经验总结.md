---
title: ReactNative开发经验总结
top: false
cover: false
toc: true
mathjax: true
summary: React Native使你能够在Javascript和React的基础上获得完全一致的开发体验，构建世界一流的原生APP。
tags:
  - ReactNative
  - ios
  - Android
categories: 移动端开发
abbrlink: 60488
date: 2020-10-23 16:00:07
password:
---
## 

React Native使你能够在Javascript和React的基础上获得完全一致的开发体验，构建世界一流的原生APP。

目录
===

<!-- TOC -->
  - [目录](#目录)
  - [React Native开发环境搭建](#react-native开发环境搭建)
  - [react-native获取当前运行平台](#react-native获取当前运行平台)
  - [react native Linking 调用电话、短信、邮箱功能](#react-native-linking-调用电话短信邮箱功能)
  - [React Native改机型](#react-native改机型)
  - [React Native修改 App 在手机上展示的名称](#react-native修改-app-在手机上展示的名称)
  - [React Native修改 App 在手机上展示的图标](#react-native修改-app-在手机上展示的图标)
  - [React Native判断 Release/Debug 用于调试](#react-native判断-releasedebug-用于调试)
  - [React Native开发模式弹出开发者菜单刷新应用](#react-native开发模式弹出开发者菜单刷新应用)
  - [React Native设置允许 HTTP 请求访问](#react-native设置允许-http-请求访问)
  - [React Native真机配置 IP 调试](#react-native真机配置-ip-调试)
  - [React Native Xcode 不用数据线真机调试](#react-native-xcode-不用数据线真机调试)
  - [React Native 打包修改 APP 版本号](#react-native-打包修改-app-版本号)
  - [应用反应缓慢，出现卡顿问题](#应用反应缓慢出现卡顿问题)
  - [React Native好用控件](#react-native好用控件)
  - [React Native使用原生组件WebView调用pdf文件](#react-native使用原生组件webview调用pdf文件)
  - [React Native Android 打包应用](#react-native-android-打包应用)
  - [React Native安卓打包报错笔记](#react-native安卓打包报错笔记)
  - [ios 打包应用](#ios-打包应用)
  - [ios打包笔记](#ios打包笔记)
  - [React Native开发安卓高版本 安卓Q 读写文件出错解决及方法](#react-native开发安卓高版本-安卓q-读写文件出错解决及方法)
  - [React Native禁止横屏](#react-native禁止横屏)
  - [React Native（react-native-image-picker）拍照控件报错解决](#react-nativereact-native-image-picker拍照控件报错解决)
  - [React Native升级教程](#react-native升级教程)
              
              
              
            
## React Native开发环境搭建
**1.node安装**

下载地址：https://nodejs.org/en/
安装成功后，配置环境变量 在path中添加：
在命令窗口测试node 是否配置成功：
```bash
node -v
```
输出node版本即为成功

**2.安装React Native**

```bash
通过命令：$npm install -g react-native-cli
```
**3.创建项目**
通过命令：
```bash
react-native init MyProject（项目名称）
```
**4.切换到自己项目**
通过命令：
```bash
cd MyProject
```
**5.安装依赖**
通过命令：
```bash
npm install 
```
**6.运行项目**

ios通过命令：
```bash
react-native run-ios 
```
Android通过命令：
```bash
react-native run-android
```

## react-native获取当前运行平台

```bash
import { Platform} from 'react-native';
{Platform.OS}


```

## react native Linking 调用电话、短信、邮箱功能


 **1.打开浏览器**

```bash
Linking.openURL('https://baidu.com/')

```

 **2. 打开短信功能**


```bash
Linking.openURL("sms:" + 电话号码);
```
 **3. 打电话功能**

```bash
Linking.openURL(tel+ 电话号码);

```
 **4. 打开邮箱功能**
```bash
Linking.openURL("mailto:" + 邮件地址);
```



## React Native改机型
控制指定型号即可：
```bash
react-native run-ios --simulator="iPhone X" ios控制指定型号
```

## React Native修改 App 在手机上展示的名称

 **Android**

修改 `android/app/src/main/res/values/strings.xml` 配置

```xml
<resources>
  <string name="app_name">这里填写名称</string>
</resources>
```
 **iOS**


修改 `ios/<应用名称>/Info.plist` 配置

```xml
<key>CFBundleDisplayName</key>
<string>这里填写名称</string>
```


## React Native修改 App 在手机上展示的图标

 **Android**

修改替换 `android/app/src/main/res/mipmap-(*)` 下面的图标

图标分为 方形图标(`ic_launcher.png`) 和 圆形图标(`ic_launcher_round.png`)

 **iOS**

修改 `ios/<应用名称>/Images.xcassets/AppIcon.appiconset/Contents.json` 配置，及修改配置目录 `ios/<应用名称>/Images.xcassets/AppIcon.appiconset` 下的图标文件。

通过 xcode 拖拽更换图标更方便。

 **推荐一个图标快速生成的网站**

[一键生成所有尺寸的应用图标/启动图](https://icon.wuruihong.com/)


## React Native判断 Release/Debug 用于调试

 **Android**


修改 `android/app/src/main/res/values/strings.xml` 配置

```java
// 在Android Studio项目中
if(BuildConfig.DEBUG){
  // debug模式
}else{
  // release模式
}
```

 **iOS**

```objective-c
#ifdef DEBUG
   // debug模式
#else
    //release 模式
#endif
```

 **React Native**


```js
if (__DEV__) {
  // debug 模式
} else {
  // release 模式
}
```


## React Native开发模式弹出开发者菜单刷新应用


 **Android**

按两次 <kbd>R</kbd> 键或从开发者菜单(<kbd>⌘</kbd><kbd>M</kbd>)中选择重新加载(Reload)以预览您的更改。

 **iOS**


使用 <kbd>⌘</kbd><kbd>R</kbd> 让您的 IOS 模拟器重新加载本地项目，使用 <kbd>⌘</kbd><kbd>T</kbd> 弹出开发者菜单。


## React Native设置允许 HTTP 请求访问

 **Android**

创建配置文件 `android/app/src/main/res/xml/network_security_config.xml` 内容如下：

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true" />
</network-security-config>
```

修改配置 `android/app/src/main/AndroidManifest.xml`

```diff
<application
  android:name=".MainApplication"
  android:label="@string/app_name"
  android:icon="@mipmap/ic_launcher"
  android:roundIcon="@mipmap/ic_launcher_round"
  android:allowBackup="false"
+  android:networkSecurityConfig="@xml/network_security_config"
  android:theme="@style/AppTheme">
</application>
```

 **iOS**


修改 `ios/<应用名称>/Info.plist` 配置

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```

## React Native真机配置 IP 调试


 **配置说明**

1. ⚠️ 首先保证真机和 pc 在同一个局域网络下。
2. 摇晃你的实体真机，调出配置弹窗。
3. 团队开发可以不安装开发环境。

**`摇晃手机`** => `Configure Bundler` => 设置 `ip` 和 `端口`

 **iOS 设置**



设置 `Build Configuration` 为 `Debug` 模式连接真机打包 APP。  

> `Xcode` => `Product` => `Scheme` => `Edit Scheme...` => `Run` => `Info` => `Build Configuration` => `Debug`


## React Native Xcode 不用数据线真机调试

通过菜单 `Xcode` => `Product` => `Destination` => `Add Additional Simulators...` 打开设置界面，勾选 `Connect via network`。


如果是第一次操作， 可能会需要先进行配对操作；

1. 可在以上面弹出的界面中，点击左侧的设备，然后右健选`unpair device`。
2. 然后再去勾选 `connect via network`；
3. 这时手机上会提示信任界面，点击确认即可。


## React Native 打包修改 APP 版本号

 **Android**

修改 `android/app/build.gradle` 配置

```java
android {
  .....
  defaultConfig {
    ....
    versionName "2.1.1"
  }
}
```
 **iOS**


修改 `ios/<应用名称>/Info.plist` 配置

```xml
<key>CFBundleShortVersionString</key>
<string>1.2.0</string>
```

</details>

## 应用反应缓慢，出现卡顿问题



 **可能存在的问题**

- 查看是否 console 日志打印过度造成。
- React Native Debugger 页面放到最前面，浏览器窗口不要放到选项卡里面。


## React Native好用控件

 **1.ReactNative短信验证码倒计时控件**

[ReactNative短信验证码倒计时控件](https://www.jianshu.com/p/59a292a4aa58 )

 **2.ReactNative最佳轮播控件**


[react-native-swiper](https://github.com/leecade/react-native-swiper
)

 **3.ReactNative拍照／从相册获取图片控件**

[react-native-image-picker](https://github.com/react-community/react-native-image-picker)

 **4.ReactNative 打分（星星）控件**

[react-native-star-rating](https://github.com/djchie/react-native-star-rating
)

 **5.ReactNative常用第三方组件汇总**

[常用第三方组件汇总](https://www.cnblogs.com/-sayaa/p/10196757.html)

 **6.前端 uiw组件**

[uiw组件](https://uiwjs.github.io/#/components/icon
)

 **7.【iOS/Android】支付宝对接支付、提现**

[支付宝对接支付、提现](https://github.com/uiwjs/react-native-uiwjs-alipay
)

 **8.复制功能组件**

[复制功能组件](https://github.com/react-native-community/clipboard)

## React Native使用原生组件WebView调用pdf文件
- 官方文档：
(https://reactnative.cn/docs/webview#startinloadingstate)
- 参考文档：
(https://www.jianshu.com/p/d4fa88cc3b3d)

添加依赖包，使用命令
```
按文档上步骤发现需要安装依赖项: react-native-webview及react-native-get-random-values

    yarn add react-native-webview 
    yarn add react-native-get-random-values
```
`引用文件`
```
import 'react-native-get-random-values';
import { WebView } from "react-native-webview"
```
`以下是源代码参考`
```
render() {
    const { listDetail, selectRouteList } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          ref={(webView) => (this.webView = webView)}
          startInLoadingState={true}
          source={{
            uri: `${url}`,
          }}
        ></WebView>
      </SafeAreaView>
    );
  }
```
## React Native Android 打包应用

[官方教程参考]( https://reactnative.dev/docs/signed-apk-android/)

1.生成上传需要的秘钥

2.设置Gradle变量
![image](https://i.loli.net/2020/10/23/tmgZNR7Vc9CslwO.png
)
如果 Gradle 加载失败，https://gradle.org/ 点击下面按钮重新同步

3.Android 打包应用
![image](https://i.loli.net/2020/10/23/tmgZNR7Vc9CslwO.png
)
如果 Gradle 加载失败，https://gradle.org/ 点击下面按钮重新同步
![image](
https://shitu-query-nj.su.bcebos.com/2020-10-23/21/16a69e726f6a1868?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T13%3A40%3A07Z%2F300%2Fhost%2Fc23246323f851c7a33103beae7ecb6b72268d7915430cdf4910f94660bb80afa)



![image](
https://shitu-query-nj.su.bcebos.com/2020-10-23/21/348e14556df0b5c2?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T13%3A42%3A59Z%2F300%2Fhost%2Fb6ee629ce4183f6cea650777f63b0c90026d055abdf2bc8aec60b8fcad1e15a3)

![image](
https://shitu-query-nj.su.bcebos.com/2020-10-23/21/b018ae3c32e54225?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T13%3A46%3A36Z%2F300%2Fhost%2Fa70a7f211cc29d5939a55ff547604fa1b3237fdda91d5a7a7a66764d20e0e9dd)

记得选择生成目录 <项目所在目录>/android/app/build/outputs/apk

![image](
https://shitu-query-nj.su.bcebos.com/2020-10-23/21/c07f003f93ae619d?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T13%3A48%3A51Z%2F300%2Fhost%2F66e207050a8c902f43dc27f473f15f522102f755886d5f6c072ccf4098d7c047)

## React Native安卓打包报错笔记

 **打包时，报错信息如下**

![image](https://i.loli.net/2020/10/23/GbDsgNt1RoExBfk.png)
 **解决步骤**
* 1.找到andrroid目录，删除图中如下文件信息 ，并且重新打开  Android Studio
![image](https://i.loli.net/2020/10/23/mnBvsopaSTO6X3M.png)
* 2.执行File -> Invalidate Caches / Restart -> Invalidate Caches & Restart.
* 3、File -> Sync Project With Gradle Files

然后通过了，但是还有一个错误，错误信息如下：

![image](https://i.loli.net/2020/10/23/tHn1cMd6eJUXjSY.png)

这个错误我先不管，打包是可以成功的


##  ios 打包应用


# ios打包笔记
 **第一步：**
![image](https://shitu-query-nj.su.bcebos.com/2020-10-23/21/03a1dc6b49e68f1f?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T13%3A54%3A02Z%2F300%2Fhost%2F5cf39c4b0e4d7f4a29a47391f1041ffca6f2914c88d8b2f6c0bc24c85d81ce04)
 **第二步：**
![image](https://shitu-query-nj.su.bcebos.com/2020-10-23/21/f0b1a7057e7a4597?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T13%3A59%3A40Z%2F300%2Fhost%2F66f546310a443ed7fe60f2938c7a9e367f613e3d47bddbe3e0fa0a8ed8b15848)
 **第三步：**

![image](https://shitu-query-nj.su.bcebos.com/2020-10-23/22/e2395d007bfd8f65?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T14%3A01%3A59Z%2F300%2Fhost%2F77686257ddb154e7a8e9131bc0f227ea7eaf610cc932c8be5e2581e4ee776626)

 **第四步：**

![image](https://shitu-query-nj.su.bcebos.com/2020-10-23/22/d8d7939b693d5138?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T14%3A03%3A15Z%2F300%2Fhost%2Fa5dd936a378651d6bf602e8b082588dc185f7f9cb313a1317e2893681bf6a3c9)

然后直接`Next`

 **第五步：**
![image](https://shitu-query-nj.su.bcebos.com/2020-10-23/22/e4579d6ad95f901c?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2020-10-23T14%3A06%3A16Z%2F300%2Fhost%2F0e3932bbe2a7b96baf96eb83ad6a4f90733562778b67a595eada86023fcbe33a)

然后直接`export`即可


## React Native开发安卓高版本 安卓Q 读写文件出错解决及方法

Android Q 默认开启沙箱模式 导致出现文件读写失败

需要在使用动态权限申请的情况下在AndroidManifest.xml中加入
```xml
android:requestLegacyExternalStorage="true"
```
AndroidManifest.xml文件内容

```xml
<?xml version="1.0" encoding="utf-8"?>

<manifest xmlns:android="http://schemas.android.com/apk/res/android"

package="com.example.sdcard">

​

<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

​

<application

android:allowBackup="true"

android:icon="@mipmap/ic_launcher"

android:label="@string/app_name"

android:requestLegacyExternalStorage="true"

android:roundIcon="@mipmap/ic_launcher_round"

android:supportsRtl="true"

android:theme="@style/AppTheme">

<activity android:name=".MainActivity">

<intent-filter>

<action android:name="android.intent.action.MAIN" />

​

<category android:name="android.intent.category.LAUNCHER" />

</intent-filter>

</activity>

</application>

​

</manifest>

```

## React Native禁止横屏

 **android端**
```xml
android文件下app/src/main/AndroidManifest.xml
添加
```
![image](https://i.loli.net/2020/10/23/1kyEFUoCHxhOuVY.png)


 **ios**

在Xcode项目中把相对应的勾去掉即可

![image](https://i.loli.net/2020/10/23/fsGY5aAyRe1wJ6M.png)


或者修改：`ios/项目名称/Info.plist`


```diff
<key>UISupportedInterfaceOrientations</key>
<array>
  <string>UIInterfaceOrientationPortrait</string>
+  <string>UIInterfaceOrientationLandscapeLeft</string>
+  <string>UIInterfaceOrientationLandscapeRight</string>
</array>
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
```

## React Native（react-native-image-picker）拍照控件报错解决

react-native-image-picker控件照片选择 gif 导致程序报错问题解决的
[参考网站](https://github.com/react-native-image-picker/react-native-image-picker/blob/341e95491bab55bb83ac92a9abfade7377a1c9fd/docs/Install.md)


## React Native升级教程
 React Native在已有项目下升级
 **1.查看当前RN最新版本：**

```bash
npm info react-native
```
 **2.检查当前RN版本**

```bash
react-native -v
```
 **3.检查当前RN版本**
初始化一个官方最小工程
```bash
 npx react-native init MyApp 
 ```
 **4.将除src里面的其它文件进行比对更改**
(特别是 ios 和Android 两个目录尤为重要)

 **5.通过官方工具去检验一下**

[包对比](https://react-native-community.github.io/upgrade-helper/ )


