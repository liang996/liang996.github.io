---
title: 利用github平台和PicGo工具来搭建自己的图床
top: false
cover: false
toc: true
mathjax: true
summary: >-
  PicGo是一款图片上传工具，目前支持SM.MS图床、腾讯云COS、微博图床、GitHub图床、七牛图床、Imgur图床、阿里云OSS、又拍云图床，未来将支持更多图床。
tags:
  - github
categories:
  - PicGo
  - 工具
abbrlink: 59701
date: 2020-11-03 21:56:03
password:
---

目录
===
<!-- TOC -->
- [github上的准备](#github上的准备)	
- [PicGo工具上的准备](#picgo工具上的准备)
- [第三方图床推荐](#第三方图床推荐)


PicGo是一款图片上传工具，目前支持SM.MS图床、腾讯云COS、微博图床、GitHub图床、七牛图床、Imgur图床、阿里云OSS、又拍云图床，未来将支持更多图床。

## github上的准备




**创建GitHub图床之前，需要注册/登陆GitHub账号**

GitHub 是一个面向开源及私有 软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。 GitHub 于 2008 年 4 月 10 日正式上线




**1.登入[github官网](https://github.com/),点击右上角 Sign In 注册**


![](https://i.loli.net/2020/11/03/n2az3fWJsxKM1ki.jpg)


**2.按照要求，填写完注册信息**

![](https://i.loli.net/2020/11/03/6cn3j8b2AShWUGx.jpg)


**3.注册后，点击 Sign up 登录**

![](https://i.loli.net/2020/11/03/8LMqcwSOW2Y1aVg.png)


**4.登录成功后，进入主页面就表示注册成功了**

![](https://i.loli.net/2020/11/03/WrHIeAkRGUhLEFs.png)



**创建Repository**


**1.点击"New repository"按钮**

![](https://i.loli.net/2020/11/03/KcAb3WuF4lUrME6.png)


**2.填写必要的仓库信息并创建**

![](https://i.loli.net/2020/11/03/FArpfQkOZyNc2xG.png)



**3.点击"Settings"按钮,生成一个Token用于操作GitHub repository**

![](https://i.loli.net/2020/11/03/21O8XaHmokevGwt.png)

**4.进入页面后，点击"Developer settings"按钮**

![](https://i.loli.net/2020/11/03/B2a7ADzoijsCkZl.png)

**5.点击"Personal access tokens"按钮**


![](https://i.loli.net/2020/11/03/ZGzfFqWIJ8P6oA4.png)


**6.点击"Generate new token"按钮**

![](https://i.loli.net/2020/11/03/p8CL6TadbfRQYDM.png)



**7.填写描述，选择"repo"权限，然后点击"Generate token"按钮**

![](https://i.loli.net/2020/11/03/5S9qlsFrEtgM7Bh.png)


注：创建成功后，会生成一串token，这串token之后不会再显示，所以第一次看到的时候，可以建个文本文件好好保存，忘记了只有重新生成，每次都不一样。


## PicGo工具上的准备


**1. 下载PicGo客户端对应的版本并安装**

[PicGo工具下载](https://www.lanzous.com/b04abbw8h)

[PicGo工具github地址](https://github.com/Molunerfinn/PicGo/releases)




**2. 启动PicGo后，打开设置界面，按照截图操作点击**


![](https://i.loli.net/2020/11/03/PSsDc2U4oTj1AeG.png)


![](https://raw.githubusercontent.com/liang996/gallery/master/t13.png)


**解释**


* 1.第一行设定仓库名按照“账户名/仓库名的格式填写”

* 2.第二行填入你的分支名称，默认为master；
* 
* 3.在第三栏填入你刚才申请到的Token；
* 
* 4.第四行填入你的repo中的储存路径，可以不填
* 
* 5.第五行自定义域名的作用是在上传图片后成功后，PicGo会将“自定义域名+上传的图片名”生成的访问链接，放到剪切板上，自定义域名需要按照这样去填写：https://raw.githubusercontent.com/账户名/仓库名/master或者使用这里的自定义域名的格式：https://cdn.jsdelivr.net/gh/账户名/仓库名/，这是个免费的CDN加速，可以加快图片的访问速度，也可以不加。

**3.点击PicGo工具图片上传区上传你需要的图片 **

![](https://raw.githubusercontent.com/liang996/gallery/master/tp.png)


**4.登入你的github账户，刷新你事先创建的仓库就可以看见图片提交成功了**

![](https://raw.githubusercontent.com/liang996/gallery/master/tii.png)


## 第三方图床推荐
感觉比较好用的有：

https://sm.ms/

https://imgchr.com/


