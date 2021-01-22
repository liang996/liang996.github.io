---
title: js遍历数组及对数组进行增删改查方法汇总
top: false
cover: false
toc: true
mathjax: true
abbrlink: 42099
date: 2020-10-21 11:09:05
password:
summary: 这里是我的笔记，记录一些js遍历数组及过滤数组的常用方法，这个笔记后面慢慢增加了许多内容，如果有错误之处，请各位多多指教。
tags:  
- Es6
- Array
categories: 
- 前端
--- 

## 

这里是我的笔记，记录一些js遍历数组及对数组进行增删改查的常用方法，这个笔记后面慢慢增加了许多内容，如果有错误之处，请各位多多指教。

目录
===
<!-- TOC -->

- [目录](#目录)
  - [for遍历](#for遍历)
  - [for in遍历](#for-in遍历)
  - [for of循环](#for-of循环)
  - [forEach遍历](#foreach遍历)
  - [map遍历](#map遍历)
  - [filter()  方法](#filter-方法)
  - [every() 方法](#every-方法)
  - [some方法](#some方法)
  - [find方法](#find方法)
  - [reduce方法 (求和用)](#reduce方法-求和用)
  - [concat方法（合并数组）](#concat方法合并数组)
  - [join方法](#join方法)
  - [pop方法](#pop方法)
  - [shift方法](#shift方法)
  - [unshift方法](#unshift方法)
  - [push方法](#push方法)
  - [reverse方法](#reverse方法)
  - [sort方法](#sort方法)
  - [slice方法](#slice方法)
  - [splice方法](#splice方法)
  - [toString()](#tostring)
  - [IndexOf()](#indexof)
  - [lastIndexOf();](#lastindexof)
  - [substring()](#substring)



## for遍历

**方法解释：**

*  表达式1：赋值表达式，用来给控制变量赋初值。（只执行一次）
*  表达式2：逻辑表达式，是循环的控制条件，用来判断控制变量是否符合循环条件，否则跳出循环。
*  表达式3：赋值表达式，用来对控制变量进行增量或减量操作。
   
**执行步骤：**
*  1.声明变量 a = 0
*  2.if (a <arr.length ) 继续运行
*  3.每执行一次 a += 1
*  4.当不满足 a < 10 for循环结束 

```bash
let arr = [1, 2, 3, 4, 5, 6, 7]
for (let a = 0; a < arr.length; a++) {
  console.log(arr[a])
}
```

**结果显示：**

```bash
1, 2, 3, 4, 5, 6, 7
```



## for in遍历

* for...in 语句用于对数组或者对象的属性进行循环操作。
* for ... in 循环中的代码每执行一次，就会对数组的元素或者对象的属性进行一次操作。
  
**基本语法：**
```
 for (变量 in 对象)
 {
    在此执行代码
 }
```

**(1).for in遍历对象**
```bash

let obj = { id: 1, name: "王力宏", age: 38 }
for (let key in obj) {
  console.log('obj的key:', key, '  obj的value:', obj[key]);
}
```
**结果显示：**

```bash
 结果：
 obj的key: id      obj的value: 1
 obj的key: name    obj的value: 王力宏
 obj的key: age     obj的value: 38
```

**(2).for in遍历数组**

```bash
let arr = [7, 3, 5, 6];
for (let key in arr) {
  // console.log(key) //0,1,2,3
  // console.log(arr[key]) //7,3,5,6
  console.log(arr) //出现四次[ 7, 3, 5, 6 ]
}
```

不推荐用for-in来循环一个数组，因为，不像对象，数组的 index 跟普通的对象属性不一样，是重要的数值序列指标。总之， for – in 是用来循环带有字符串key的对象的方法。

## for of循环
for-of循环，它既比传统的for循环简洁，同时弥补了forEach和for-in循环的短板。

**基本语法**

```bash
 for (var value of myArray) {
  console.log(value);
  }
 ```

语法看起来跟for-in很相似，但它的功能却丰富的多，它能循环很多东西。


**(1).for of遍历数组**
```bash
let arr = [7, 3, 5, 6];
for (let key of arr) {
  console.log(key) //7, 3, 5, 6
}
 ```

**(2).for of循环一个字符串**
```bash
let str = "我是中国人";
for (let value of str) {
  console.log(value); //我是中国人
}
 ```

## forEach遍历

forEach() 方法对数组的每个元素执行一次提供的函数。forEach() 需要一个回调函数，作为参数，该方法中的function回调有三个参数：
  
* 第一个参数是遍历的数组内容，
* 第二个参数是对应的数组索引，
* 第三个参数是数组本身

**基本语法:**

```bash
[ ].forEach(function(value,index,array){//code something});
 ```
**例.取下面数组的和**
```bash
let arr = [1, 2, 3, 4, 5, 6];
let a = 0;
arr.forEach((value, index, array) => {
  console.log(value) //1, 2, 3, 4, 5, 6
  console.log(array[index]) //1, 2, 3, 4, 5, 6
  a += array[index] // a += array[index]==a=a+value
})
 ```
 **结果显示：**
 ```bash
console.log(a)  //21
 ```
## map遍历


  map（）方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组,循环中的map意思为“映射”，map方法和forEach方法类似，和forEach不同的是，map有返回值,在工作中如果需要根据条件重组数组，用map会很方便。

  **基本语法:**

  ```bash
 array.map(function(currentValue,index,arr),thisValue)
 ```
  **参数描述:**

* currentValue：【必填】数组中正在处理的当前元素。
* index：【可选】数组中正在处理的当前元素的索引。
* arr：【可选】方法被调用的数组。也就是当前元素属于的数组对象。
* thisValue：【可选】执行回调函数时使用的this值。
* map的回调函数中支持return返回值；return的并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了

**例.将数组里面的值都乘以3**
  ```bash
let arr = [1, 3, 4, 6];

//Es5写法
let num = arr.map(function (value, index, array) {
  return value * 3;
})

//ES6箭头函数写法
let num = arr.map((value, index, array) => value * 3)
  ```
 **结果显示：**
 ```bash
console.log(num)// 原数组拷贝了一份，并进行了修改,结果为[ 3, 9, 12, 18 ]
console.log(arr)//  原数组并未发生变化,结果为[ 1, 3, 4, 6 ]
 ```
`注意`：map 和 forEach 方法都是只能用来遍历数组，不能用来遍历普通对象。

## filter()  方法 

filter 方法是 Array 对象内置方法，它会返回通过过滤的元素，不改变原来的数组。

  **基本语法:**
```bash  
  arr.filter(callback[, thisArg])
   ```
* 用法说明：filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新数组。

**例.筛选排除掉所有的小于5的数**

```bash  
let arr = [3, 4, 7, 2, 9, 11];
let num = arr.filter(item => item > 5)
```
 **结果显示：**
 ```bash
console.log(num)//得到新数组[7, 9, 11]
 ```



## every() 方法 
every()是对数组中的每一项运行给定函数，如果该函数对每一项返回true,则返回true。every方法返回值是布尔类型,针对数组中的每一个元素进行比对，只要有一个元素比对结果为false则返回false，反之要所有的元素比对结果为true才为true

 **结果显示：**
 ```bash
console.log(num)//得到新数组[7, 9, 11]
 ```

 **例.判断数组中所有的值是否都大于3,，有一个条件不满足则返回false**

 ```bash

let arr = [1, 2, 3, 4, 5, 6];
let num = arr.every((item, indec, array) => item > 3)
 ```
 **结果显示：**
 ```bash
console.log(num)//因为1，2小于3，存在不满足值，所以得出结果为false
 ```

## some方法

 some()是对数组中每一项运行指定函数，如果该函数对任一项返回true，则返回true。 some方法返回值是布尔类型，同样是针对数组中的每一个元素，但是这个方法是，只要有一个元素比对结果为true，返回结果就为true，反之要所有的元素比对结果为false才为false

 **例.判断数组中是否存在大于3的值，有一个条件满足则返回true**

 ```bash

let arr = [1, 2, 3, 4, 5, 6];
let num = arr.some((item, indec, array) => item > 3)
 ```
 **结果显示：**
 ```bash
console.log(num)//尽管1，2小于3，存在不满足值，但是some是判断其中一个满足条件就为true
结果为true
 ```

## find方法

 find()方法返回第一个满足过滤方法的元素，一个都没有满足的就返回undefined，遇到一个满足的元素后遍历就停止了,这个方法支持的浏览器太少，慎用
 ```bash

let arr = [3, 6, 1, 4, 7];
let num = arr.find((item, indec, array) => item > 3)
 ```
 **结果显示：**
 ```bash
console.log(num)//由于数组中满足条件的第一个数数6，所以结果返回6

 ```
## reduce方法 (求和用)

reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。

   **基本语法:**

```bash
arr.reduce(function(prev,cur,index,arr){...}, init);
  ```
 * 参数解析：
 * arr 表示原数组；
 * prev 表示上一次调用回调时的返回值，或者初始值 init;
 * cur 表示当前正在处理的数组元素；
 * index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
 * init 表示初始值。
 * 注意: reduce() 对于空数组是不会执行回调函数的。
 */

**求和实例：**


```bash
let arr = [3, 6, 1, 4, 7];
let num = arr.reduce((total, value, index, arr) => total + value)
  ```
   **结果显示：**
 ```bash
console.log(num)//21
 ```

## concat方法（合并数组）
  concat() 方法用于连接两个或多个数组。可以合并一个或多个数组，会返回合并数组之后的数据，不会改变原来的数组；该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。

**基本语法:**
```bash
 string.concat(string1, string2, ..., stringX)
 ```
**合并数组实例：**

 ```bash
let a = ["a", "b", "c"]
let b = ["d", "e", "f"]
let c = a.concat(b)
```
   **结果显示：**

```bash
console.log(c) //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

## join方法

join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
**基本语法:**
 * arrayObject.join(separator)
 * separator	可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
 * 返回结果为一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入separator 字符串而生成的。
  
**例1：将创建一个数组，然后把它的所有元素放入一个字符串：**

```bash
let arr = ["张三", "李四", "王五"]
let num = arr.join()
```
   **结果显示：**
   ```bash
console.log(num)//张三,李四,王五,注意：如果（）没有参数，则使用逗号作为分隔符
console.log(typeof num)//string
```
**例2：将使用分隔符来分隔数组中的元素：**

```bash
let arr = ["张三", "李四", "王五"]
let num = arr.join("*")
```
   **结果显示：**
```bash
console.log(num)//张三*李四*王五
console.log(typeof num)//string
```


## pop方法

pop方法用于删除数组的最后一位，并且返回删除的数据，会改变原来的数组

**基本语法:**
```bash
arrayObject.pop()
 ```

 * 说明pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
 * 返回结果为arrayObject 的最后一个元素。

**例1：有值数组**
```bash
let arr = ["张三", "李四", "王五"]
let num = arr.pop()
```
**结果显示：**
```bash
console.log(arr)//[ '张三', '李四' ]
console.log(num)//王五
```


**例2：空值数组**
```bash
let arr = []
let num = arr.pop()

```
**结果显示：**
```bash
console.log(arr)//[]
console.log(num)//undefined
```

## shift方法


shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

**基本语法:**
```bash
arrayObject.shift()
 ```

```bash
let arr = ["张三", "李四", "王五"]
let num = arr.shift()
 ```
**结果显示：**
```bash
console.log(arr)//[  "李四", "王五" ]
console.log(num)//张三
```

## unshift方法

unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。与shift方法相反

**基本语法:**
```bash
arrayObject.unshift(newelement1,newelement2,....,newelementX)

 ```
 unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。

**例：向数组的开头添加元素**

```bash
let arr = ["张三", "李四", "王五"]
let num = arr.unshift("小米", "小百")
 ```
**结果显示：**
```bash
console.log(arr)//[ '小米', '小百', '张三', '李四', '王五' ]
console.log(num)//会取出该数组新的长度：5
```

`注意`unshift方法：unshift()、shift() 是从数组的头部进行增减。unshift() 方法不创建新的创建，而是直接修改原有的数组。

##  push方法
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度,与pop方法相反

**基本语法:**
```bash
arrayObject.push(newelement1,newelement2,....,newelementX)
```
 * push() 方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。
  
**例：向数组的末尾添加元素**

```bash
let arr = ["张三", "李四"]
let num = arr.push("王五");
 ```
**结果显示：**
```bash
console.log(arr)//[ '张三', '李四', '王五' ]
console.log(num)//3
```
 `注意`push方法：push()、pop() 是从数组的尾部进行增减

##  reverse方法
reverse方法:颠倒数组中元素的顺序

**基本语法:**
```bash
array.reverse()
```
 * 功能：将数组的数据进行反转，并且返回反转后的数组，会改变原数组

**例：颠倒数组顺序**
```bash
let arr = ['张三', '李四', '王五']
let num = arr.reverse();
```
**结果显示：**
```bash
console.log(arr)//[ '王五', '李四', '张三'  ]
console.log(num)//[ '王五', '李四', '张三'  ]
```
##  sort方法

sort方法用于对数组对元素进行排序，默认为升序。并且返回排过序的新数组
**基本语法:**
```bash
arrayObject.sort（sortby）
```
**参数说明:**
 * `sortby`为可选值，用来规定顺序，必须是函数返回值,对数组的引用。
  
  **注意事项:**

 * 请注意，数组在原数组上进行排序，不生成副本。
 * 说明：这里的排序是针对字符的排序，先使用数组的toString()方法转为字符串，再逐位比较，

**例1：对数组字符串元素进行排序**
```bash
let arr = ["a", "g", "c", "x", "b", "e"];
let num = arr.sort()
```
**结果显示：**

```bash
console.log(num)//[ 'a', 'b', 'c', 'e', 'g', 'x' ]
]
```
**例2：对数组数字元素进行排序**

```bash
let arr = [1, 4, 6, 2, 8, 5];
let num = arr.sort()
```
**结果显示：**

```bash
console.log(num) //[ 1, 2, 4, 5, 6, 8 ]
```

##  slice方法
 slice() 方法可从已有的数组中返回选定的元素。功能主要是截取指定位置的数组，并且返回截取的数组，不会改变原数组，slice()方法可提取字符串端某个部分，并且以新的字符串返回被提取的部分

 **基本语法:**

```bash
array.slice(start,end)
```
 **参数说明：**
 * start为可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推
 * end也为可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
 * 返回值：	返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
 * 注意:可从已有的数组中返回选定的元素。该方法接收两个参数slice(start,end)，strat为必选，表示从第几位开始；end为可选，表示到第几位结束(不包含end位)，省略表示到最后一位；start和end都可以为负数，负数时表示从最后一位开始算起，如-1表示最后一位。
  
**例2：截取数组**

```bash
let arr = ["a", "g", "c", "x", "b", "e"];
let num = arr.slice(1, 4)
```
**结果显示：**

```bash
console.log(num)//下标是从0开始，第一为这是”g“,由于结束是第4位结束(不包含4位)，则省略第4为是"b”的值，结果为[ 'g', 'c', 'x' ]
```


##  splice方法

splice()方法向数组中添加，或从数组删除，或替换数组中的原始，然后返回被删除/替换的元素。该方法会改变原始数组。
 **基本语法:**

```bash
arrayObject.splice(index,howmany，item1,...itemX)
```
 **参数说明：**

 * index必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
 * howmany必需。要删除的项目数量。如果设置为 0，则不会删除项目。	
 * item1, ..., itemX,为可选，向数组添加的新项目
 * 
**返回值：**

 * array,包含被删除项目的新数组，如果有的话
说明 splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
 * 请`注意`，splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。

**例1.删除第一项**

```bash
let arr = ["red", "green", "blue"];
let num = arr.splice(0, 1);  //删除第一项
```
**结果显示：**

```bash
console.log(arr)//[ "green", "blue" ]
console.log(num)//red，返回数组中值包含一项
```

**例2.从位置1开始插入两项**

```bash
let arr = ["red", "green", "blue"];
let num = arr.splice(1, 0, "yellow", "orange");  //从位置1开始插入两项
```
**结果显示：**

```bash
console.log(arr)//["red", "yellow", "orange", "green", "blue" ]
console.log(num)//返回的是一个空数组[]
```

**例3.插入两项，删除一项**

```bash
let arr = ["red", "greens", "blue"];
let num = arr.splice(1, 2, "hhh", "purple");
```
**结果显示：**

```bash
console.log(arr)//[ 'red', 'hhh', 'purple' ]
console.log(num)//[ 'greens', 'blue' ]
```


##  toString()

toString()功能是将数组转换为字符串，类似于没有参数的join.该方法会在数据发生隐式类型转换时被自动调用，如果手动调用，就是直接转为字符串。不会改变原数组
 **基本语法:**

```bash
booleanObject.toString()
```
 **返回值：**

 * 根据原始布尔值或者 booleanObject 对象的值返回字符串 "true" 或 "false"。

**例.数组转换为字符串**

```bash
let arr = ['张三', '李四', '王五']
let num = arr.toString()
```
**结果显示：**

```bash
console.log(arr);['张三', '李四', '王五']
console.log(num); 张三, 李四, 王五
```

##  IndexOf()

 IndexOf()方法根据指定的数据，从左向右，查询在数组中出现的位置，如果不存在指定的数据，返回-1，找到了指定的数据返回该数据的索引
 **基本语法:**

```bash
stringObject.indexOf(searchvalue,fromindex)
```
 **参数说明：**

 * searchvalue是必需的。规定需检索的字符串值。
 * fromindex是可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
  
 * 该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。
 * 注意：如果找到该数据，立即返回该数据的索引，不再往后继续查找


**例.查找数组是否包含某个元素**

```bash
let arr = ['张三', '李四', '王五']
let num = arr.indexOf('李四')
let n = arr.indexOf('李四1')
let n1 = arr.indexOf('李四', 2)//'李四'是否在数组下标为2上面
```
**结果显示：**

```bash
console.log(num); //1
console.log(n); //-1
console.log(n1); //-1
```




##  lastIndexOf();

 lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
 **基本语法:**

```bash
stringObject.lastIndexOf(searchvalue,fromindex)
```
 **参数说明：**

 * searchvalue是必需的。规定需检索的字符串值。
 * fromindex为可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
 * 如果在 stringObject 中的 fromindex 位置之前存在 searchvalue，则返回的是出现的最后一个 searchvalue 的位置。
 * 注意：如果要检索的字符串值没有出现，则该方法返回 -1。



**例.返回一个指定的字符串值最后出现的位置**

```bash
let arr = ['张三', '李四', '王五']
let num = arr.lastIndexOf('李四')
let n = arr.lastIndexOf('李四1')
```
**结果显示：**

```bash
console.log(num); //1
console.log(n); //-1
```

##  substring()

substring() 方法用于提取字符串中介于两个指定下标之间的字符。
 **基本语法:**

```bash
stringObject.substring(start,stop)
```
 **参数说明：**

 * start为必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
 * stop为可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。
 * 如果省略该参数，那么返回的子串会一直到字符串的结尾。
 * 一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。

**例.提取字符在3的位置内容**

```bash
let arr = "Hello world!"
let num = arr.substring(3)
```
**结果显示：**

```bash
console.log(num); //lo world!
```








