---
title: ReactNactive开发项目总结二
top: false
cover: false
toc: true
mathjax: true
summary: ReactNactive开发项目总结2
tags:  - ReactNative
categories:  - ReactNative
abbrlink: 64784
date: 2021-02-26 15:52:09
password:
---

由于最近开发了几个React-Nactive开发项目，开发中遇到的问题及解决方案供学习参考，如果有不足之处请多指教！

## 【Android/ios】播放声音组件
https://github.com/expo/expo/tree/master/packages/expo-av

# expo-av

Expo universal module for Audio and Video playback

# API documentation

- [Documentation for the master branch](https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/sdk/av.md)
- [Documentation for the latest stable release](https://docs.expo.io/versions/latest/sdk/av/)

# Installation in managed Expo projects

For managed [managed](https://docs.expo.io/versions/latest/introduction/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](https://docs.expo.io/versions/latest/sdk/av/).

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `react-native-unimodules` package](https://github.com/expo/expo/tree/master/packages/react-native-unimodules) before continuing.

### Add the package to your npm dependencies

```
expo install expo-av
```

### Configure for iOS

Add `NSMicrophoneUsageDescription` key to your `Info.plist`:

```xml
<key>NSMicrophoneUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to access your microphone</string>
```

Run `npx pod-install` after installing the npm package.

#### pod时报错：
```
[!] CocoaPods could not find compatible versions for pod "EXAV":
  In Podfile:
    EXAV (from `../node_modules/expo-av/ios`)

Specs satisfying the `EXAV (from `../node_modules/expo-av/ios`)` dependency were found, but they required a higher minimum deployment target.
```
解决方法：https://github.com/expo/expo/issues/11855
修改``ios > Podfile`` 将ios版本改成11
```
platform :ios, '11.0'

```

#### 安卓打包报错：
```
“A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade”
```
解决方法参考：

https://stackoverflow.com/questions/58084850/how-to-fix-this-error-a-failure-occurred-while-executing-com-android-build-grad

https://blog.csdn.net/kaikevin01/article/details/78898918

https://blog.csdn.net/Jiang_Rong_Tao/article/details/102519914

https://docs.gradle.org/current/userguide/build_environment.html#sec:configuring_jvm_memory

1. 将``android > build.gradle``里的
```
dependencies {
        classpath("com.android.tools.build:gradle:3.5.3")
    }
```
替换为
```
dependencies {
        classpath("com.android.tools.build:gradle:3.4.1")
    }
```
2. 增加``android > gradle.properties``
```
org.gradle.daemon=true
org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
org.gradle.parallel=true
org.gradle.configureondemand=true
```

### Configure for Android

Add `android.permission.RECORD_AUDIO` permission to your manifest (`android/app/src/main/AndroidManifest.xml`):

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide](https://github.com/expo/expo#contributing).



## 【iOS/Android】增加picker组件


https://github.com/react-native-picker/picker

#  `@react-native-picker/picker`



[![npm version](https://img.shields.io/npm/v/@react-native-picker/picker.svg)](https://www.npmjs.com/package/@react-native-picker/picker)
[![Build](https://github.com/react-native-picker/picker/workflows/Build/badge.svg)](https://github.com/react-native-picker/picker/actions) ![Supports Android, iOS, MacOS, and Windows](https://img.shields.io/badge/platforms-android%20|%20ios|%20macos|%20windows-lightgrey.svg) ![MIT License](https://img.shields.io/npm/l/@react-native-picker/picker.svg) [![Lean Core Extracted](https://img.shields.io/badge/Lean%20Core-Extracted-brightgreen.svg)](https://github.com/facebook/react-native/issues/23313)

| Android                                                  | iOS                                                  | PickerIOS                                               | Windows                                                  | MacOS                                                  |
| -------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| <img src="./screenshots/picker-android.png" width="150"> | <img src="./screenshots/picker-ios.png" width="150"> | <img src="./screenshots/pickerios-ios.png" width="150"> | <img src="./screenshots/picker-windows.png" width="300"> | <img src="./screenshots/picker-macos.png" width="300"> |

## Supported Versions

| @react-native-picker/picker | react-native                                                           |
| --------------------------- | ---------------------------------------------------------------------- |
| >= 1.2.0                    | 0.60+ or 0.59+ with [Jetifier](https://www.npmjs.com/package/jetifier) |
| >= 1.0.0                    | 0.57                                                                   |

## For Managed Workflow users using Expo 37
This component is not supported in the managed workflow for expo sdk 37. Please import the `Picker` from `react-native`.
See more info [here](https://github.com/react-native-picker/picker/issues/45#issuecomment-633163973)
   
## Getting started

`$ npm install @react-native-picker/picker --save`

or

`$ yarn add @react-native-picker/picker`

### For react-native@0.60.0 or above

As [react-native@0.60.0](https://reactnative.dev/blog/2019/07/03/version-60) or above supports autolinking, so there is no need to run linking process. 
Read more about autolinking [here](https://github.com/react-native-picker/cli/blob/master/docs/autolinking.md).

#### iOS
CocoaPods on iOS needs this extra step

```
npx pod-install
```

#### Android
No additional step is required.

#### Windows
##### Add the `ReactNativePicker` project to your solution.

1. Open the solution in Visual Studio 2019
2. Right-click Solution icon in Solution Explorer > Add > Existing Project
   Select `D:\dev\RNTest\node_modules\@react-native-picker\picker\windows\ReactNativePicker\ReactNativePicker.vcxproj`

##### **windows/myapp.sln**
Add a reference to `ReactNativePicker` to your main application project. From Visual Studio 2019:

Right-click main application project > Add > Reference...
  Check `ReactNativePicker` from Solution Projects.

##### **pch.h**

Add `#include "winrt/ReactNativePicker.h"`.

##### **app.cpp**

Add `PackageProviders().Append(winrt::ReactNativePicker::ReactPackageProvider());` before `InitializeComponent();`.

#### MacOS
CocoaPods on MacOS needs this extra step (called from the MacOS directory)

```
pod install
```


### Mostly automatic installation (react-native < 0.60)

`$ react-native link @react-native-picker/picker`

### Manual installation (react-native < 0.60)


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ ` @react-native-picker/picker` and add `RNCPicker.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCPicker.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open **application** file (`android/app/src/main/java/[...]/MainApplication.java`)
  - Add `import com.reactnativecommunity.picker.RNCPickerPackage;` to the imports at the top of the file
  - Add `new RNCPickerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':@react-native-picker_picker'
  	project(':@react-native-picker_picker').projectDir = new File(rootProject.projectDir, 	'../node_modules/@react-native-picker/picker/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      implementation project(path: ':@react-native-picker_picker')
  	```
#### MacOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ ` @react-native-picker/picker` and add `RNCPicker.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCPicker.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Usage
### Picker

Renders the native picker component on iOS and Android. Example:

#### Usage

Import Picker from `@react-native-picker/picker`

```javascript
import {Picker} from '@react-native-picker/picker';
```

Create state which will be used by the `Picker`

```javascript
state = {
  language: 'java',
};
```

Add `Picker` like this:
```javascript
<Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
```

### Props

* [Inherited `View` props...](https://reactnative.dev/docs/view#props)

- [`onValueChange`](#onvaluechange)
- [`selectedValue`](#selectedvalue)
- [`style`](#style)
- [`testID`](#testid)
- [`enabled`](#enabled)
- [`mode`](#mode)
- [`prompt`](#prompt)
- [`itemStyle`](#itemstyle)

---

# Reference

## Props

### `onValueChange`

Callback for when an item is selected. This is called with the following parameters:

* `itemValue`: the `value` prop of the item that was selected
* `itemPosition`: the index of the selected item in this picker

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `selectedValue`

Value matching value of one of the items. Can be a string or an integer.

| Type | Required |
| ---- | -------- |
| any  | No       |

---

### `style`

| Type            | Required |
| --------------- | -------- |
| pickerStyleType | No       |

---

### `testID`

Used to locate this view in end-to-end tests.

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### `enabled`

If set to false, the picker will be disabled, i.e. the user will not be able to make a selection.

| Type | Required | Platform         |
| ---- | -------- | ---------------- |
| bool | No       | Android, Windows |

---

### `mode`

On Android, specifies how to display the selection items when the user taps on the picker:

* 'dialog': Show a modal dialog. This is the default.
* 'dropdown': Shows a dropdown anchored to the picker view

| Type                       | Required | Platform |
| -------------------------- | -------- | -------- |
| enum('dialog', 'dropdown') | No       | Android  |

---

### `dropdownIconColor`

On Android, specifies color of dropdown triangle. Input value should be hexadecimal string

| Type   | Required | Platform |
| ------ | -------- | -------- |
| string | No       | Android  |

---

### `prompt`

Prompt string for this picker, used on Android in dialog mode as the title of the dialog.

| Type   | Required | Platform |
| ------ | -------- | -------- |
| string | No       | Android  |

---

### `itemStyle`

Style to apply to each of the item labels.

| Type                                                         | Required | Platform     |
| ------------------------------------------------------------ | -------- | ------------ |
| [text styles](https://reactnative.dev/docs/text-style-props) | No       | iOS, Windows |

### PickerIOS
### Props

* [Inherited `View` props...](https://reactnative.dev/docs/view#props)

- [`itemStyle`](#itemstyle)
- [`onValueChange`](#onvaluechange)
- [`selectedValue`](#selectedvalue)

---

# Reference

## Props

### `itemStyle`

| Type                                                         | Required |
| ------------------------------------------------------------ | -------- |
| [text styles](https://reactnative.dev/docs/text-style-props) | No       |

---

### `onValueChange`

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `selectedValue`

| Type | Required |
| ---- | -------- |
| any  | No       |



## 【iOS/Android】增加checkbox组件

https://github.com/react-native-checkbox/react-native-checkbox

# `@react-native-community/checkbox`
[![CircleCI Status](https://img.shields.io/circleci/project/github/react-native-community/react-native-checkbox/master.svg)](https://circleci.com/gh/react-native-community/workflows/react-native-checkbox/tree/master) ![Supports Android, iOS and Windows](https://img.shields.io/badge/platforms-android%20%7C%20ios%20%7C%20windows-lightgrey.svg) ![MIT License](https://img.shields.io/npm/l/@react-native-community/checkbox.svg) [![npm version](https://img.shields.io/npm/v/@react-native-community/checkbox.svg?style=flat)](https://www.npmjs.com/package/@react-native-community/checkbox) [![Lean Core Extracted](https://img.shields.io/badge/Lean%20Core-Extracted-brightgreen.svg)](https://github.com/facebook/react-native/issues/23313)

React Native component for Checkbox

|                    Android Example                    |                    IOS Example                    |                    Windows Example                    |
| :---------------------------------------------------: | :-----------------------------------------------: | :---------------------------------------------------: |
| <img src="screenShots/demo-android.png" width="320"/> | <img src="screenShots/demo-ios.png" width="320"/> | <img src="screenShots/demo-windows.png" width="520"/> |



## Support

| RN version                | Checkbox version              |
| ------------------------- | ----------------------------- |
| > 0.60 & < 0.62           | >= 0.3 (Support IOS from 0.4) |
| < 0.60                    | 0.2 (only Android)            |
| >= 0.62 to run on Windows | 0.5                           |

## Getting started

`yarn add @react-native-community/checkbox`

or

`npm install @react-native-community/checkbox --save`

On iOS, install cocoapods:

`npx pod-install`

On Windows with RNW 62 or earlier, you need to [`manually link the module`](###Manual-installation) (on RNW 63 and later autolinking will work).

### Mostly automatic installation

From react-native >= 0.60 autolinking will take care of the link (on iOS and Android)

for react-native =< 0.59.X

`react-native link @react-native-community/checkbox`

### Manual installation

<details>
<summary>Manually link the library on Android</summary>

#### `android/settings.gradle`
```groovy
include ':react-native-community-checkbox'
project(':react-native-community-checkbox').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-community/checkbox/android')
```

#### `android/app/build.gradle`
```groovy
dependencies {
   ...
   implementation project(':react-native-community-checkbox')
}
```

#### `android/app/src/main/.../MainApplication.java`
On top, where imports are:

```java
import com.reactnativecommunity.checkbox.ReactCheckBoxPackage;
```

Add the `checkbox` class to your list of exported packages.

```java
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.asList(
            new MainReactPackage(),
            new ReactCheckBoxPackage()
    );
}
```
</details>

<details>
<summary>Manually link the library on Windows</summary>

#### Add the CheckboxWindows project to your solution

1. Open the solution in Visual Studio 2019.
2. Right-click solution icon in Solution Explorer > Add > Existing Project.
   Select 'D:\pathToYourApp\node_modules\@react-native-community\checkbox\windows\CheckboxWindows\CheckboxWindows.vcxproj'.

#### **windows/myapp.sln**

Add a reference to `CheckboxWindows` to your main application project. From Visual Studio 2019:

Right-click main application project > Add > Reference...
Check 'CheckboxWindows' from the 'Project > Solution' tab on the left.

#### **pch.h**

Add `#include "winrt/CheckboxWindows.h"`.

#### **app.cpp**

Add `PackageProviders().Append(winrt::CheckboxWindows::ReactPackageProvider());` before `InitializeComponent();`.

</details>

## Migrating from the core `react-native` module
This module was created when the CheckBox was split out from the core of React Native. To migrate to this module you need to follow the installation instructions above and then change your imports from:

```javascript
import { CheckBox } from 'react-native';
```

to:

```javascript
import CheckBox from '@react-native-community/checkbox';
```

## Usage

### Example

```javascript
import CheckBox from '@react-native-community/checkbox';
```

```javascript
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
```

Check out the [example project](example) for more examples.

### Props

## Common Props

[View props...](https://reactnative.dev/docs/view#props)

| Prop name     | Type     | Description                                                                                |
| ------------- | -------- | ------------------------------------------------------------------------------------------ |
| onChange      | function | Invoked on change with the native event.                                                   |
| onValueChange | function | Invoked with the new boolean value when it changes.                                        |
| value         | boolean  | The value of the checkbox. If true the checkbox will be turned on. Default value is false. |
| testID        | string   | Used to locate this view in end-to-end tests.                                              |
| disabled      | boolean  | If true the user won't be able to toggle the checkbox. Default value is false.             |


## Android Only Props

| Prop name  | Type   | Description                                                                                                                                                                                                           |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tintColors | string | An object with the following shape: `{ true?: ?ColorValue, false?: ?ColorValue }`. The color value for `true` will be used when the checkbox is checked, and the color value for `false` will be used when it is off. |

## IOS Only Props

| Prop name         | Type                                                               | Description                                                                      |
| ----------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| lineWidth         | number                                                             | The width of the lines of the check mark and box. Defaults to 2.0.               |
| hideBox           | boolean                                                            | Control if the box should be hidden or not. Defaults to false                    |
| boxType           | 'circle' or 'square'                                               | The type of box to use. Defaults to 'circle'                                     |
| tintColor         | string                                                             | The color of the box when the checkbox is Off. Defaults to '#aaaaaa'             |
| onCheckColor      | string                                                             | The color of the check mark when it is On. Defaults to '#007aff'                 |
| onFillColor       | string                                                             | The color of the inside of the box when it is On. Defaults to transparent        |
| onTintColor       | string                                                             | The color of the line around the box when it is On. Defaults to '#007aff'        |
| animationDuration | number                                                             | The duration in seconds of the animations. Defaults to 0.5                       |
| onAnimationType   | 'stroke' or 'fill' or 'bounce' or 'flat' or 'one-stroke' or 'fade' | The type of animation to use when the checkbox gets checked. Default to 'stroke' |
| offAnimationType  | 'stroke' or 'fill' or 'bounce' or 'flat' or 'one-stroke' or 'fade' | The type of animation to use when the checkbox gets unchecked. 'stroke'          |

## Windows Props
Implemented most of iOS and Android props.
Defaults for color styling can be referenced here:
https://docs.microsoft.com/en-us/dotnet/framework/wpf/controls/checkbox-styles-and-templates

| Prop name    | Type    | Description                                                                    |
| ------------ | ------- | ------------------------------------------------------------------------------ |
| disabled     | boolean | If true the user won't be able to toggle the checkbox. Default value is false. |
| tintColor    | string  | The color of the box when the checkbox is Off.                                 |
| onCheckColor | string  | The color of the check mark when it is On.                                     |
| onFillColor  | string  | The color of the inside of the box when it is On.                              |
| onTintColor  | string  | The color of the line around the box when it is On.                            |

## Contributors

This module was extracted from `react-native` core.

The implementaion of IOS version refered to [BEMCheckBox](https://github.com/Boris-Em/BEMCheckBox)

## License
The library is released under the MIT licence. For more information see `LICENSE`.



## 【iOS/Android】扫码组件


# expo-barcode-scanner

允许扫描各种受支持的条形码，既可以作为独立模块，也可以作为相机的扩展进行扫描。它还允许从现有图像中扫描条形码。

# API 文档

- [Documentation for the master branch](https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/sdk/bar-code-scanner.md)
- [Documentation for the latest stable release](https://docs.expo.io/versions/latest/sdk/bar-code-scanner/)

# 在React Native项目中安装

对于React Native项目，您必须先确保[安装和配置react-native-unimodules软件包](https://github.com/expo/expo/tree/master/packages/react-native-unimodules)，然后再继续。

### 添加到依赖

```
expo install expo-barcode-scanner
```

### 为IOS配置

Add `NSCameraUsageDescription` and `NSMicrophoneUsageDescription` key to your `Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to use the camera</string>
<key>NSMicrophoneUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to use the microphone</string>
```

Run `npx pod-install` after installing the npm package.

### 为Android配置

This package automatically adds the `CAMERA` permission to your app.

```xml
<!-- Added permissions -->
<uses-permission android:name="android.permission.CAMERA" />
```

### 范例

```
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
```

## 增加轻提示

[react-native-simple-toast](https://www.npmjs.com/package/react-native-simple-toast)

适用于Android和iOS的React Native Toast组件。它只是让iOS用户拥有与Android相同的体验。在iOS上使用 [scalessec/Toast](https://github.com/scalessec/Toast)，在Android上使用标准[ToastAndroid](https://reactnative.dev/docs/toastandroid)；

安装
```shell
npm install react-native-simple-toast --save
react-native link react-native-simple-toast // only RN < 0.60
cd ios && pod install
```

用法
```js
// 默认使用 Toast.SHORT 
show: (message: string, duration?: number, viewControllerBlacklist?: Array<string>) => void,
showWithGravity: (
message: string,
duration: number,
gravity: string,
viewControllerBlacklist?: Array<string>
) => void,
```
请注意viewControllerBlacklist：这是一个仅限iOS的选项，在android上将被忽略。

例子
```js
import Toast from 'react-native-simple-toast';

Toast.show('This is a toast.');
Toast.show('This is a long toast.', Toast.LONG);

Toast.showWithGravity('This is a long toast at the top.', Toast.LONG, Toast.TOP);

Toast.show('This is nicely visible even if you call this when an Alert is shown', Toast.SHORT, [
  'UIAlertController',
]);
```


## 解决android原生配置键盘顶高组件问题

修改该目录：android/app/src/main/AndroidManifest.xml

```
        android:windowSoftInputMode="adjustResize">
        //改为：
        android:windowSoftInputMode="stateAlwaysHidden|adjustPan">

```

## 【Android】获取手机imei码


https://github.com/SimenCodes/react-native-imei

Apple不允许应用访问设备识别信息，例如IMEI。

 1.在项目根目录下：
```shell
npm install --save react-native-imei
```

2.然后修改``android > app > src > androidMainifest.xml``文件添加：
```java
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
```

3.在项目根目录下 ：
```shell
react-native link react-native-imei
```

4.用例
```jsx
const IMEI = require('react-native-imei');
IMEI.getImei().then(imeiList => {
	console.log(imeiList); // imeiList是一个数组，能插多卡的手机会有几个imei
});
```

如果已经在AndroidManifest.xml中添加了权限(<uses-permission android:name="android.permission.READ_PHONE_STATE"/>)还是报如下错：
```
java exception in'NativeModules'
java.lang.SecurityException:getDeviceld:Neither user 10002 nor current process has android.permission.READ_PHONE_STATE
```
请打开手机的设置->应用和通知->应用管理->找到自己测试的app，点击进去->权限->准许电话权限
