# Immutable.js 用法整理

（内容均为个人在工作中基于react的mk框架在使用过程中总结的用法和心得。PS：纯手打欢迎指正共同学习，如有错误欢迎指正，联系qq547106430，谢谢！）

## 什么是Immutable数据

Immutable数据类型是一旦被创建，就不能在被更改的。Immutable数据类型在使用旧数据创建新数据时性能上有所提升：避免了deepCopy把所有节点都复制一遍带来的性能损耗，而是使用Structural Sharing（结构共享），如果对象树种一个节点发生变化，只修改这个节点和受他影响的父节点，其它的节点则进行共享（网上可以搜到很多有关的动态图非常形象）

## 共同学习Immutable.js常用的数据结构

基本上在平时的工作中我用到最多的就是Map和List两个

## 创建使用 

首先在项目中引入Immutable.js，具体视工程项目而定。

官方直接
```jsx
const { Map, Lsit } = require('immutable@4.0.0-rc.9')
```

** 创建： **

```jsx
let map = Map({test1: 'value', test2: Map({test21: 'value21'})}),
    list = List([1,2,3])
```

可以看出Immutable.js的Map就是对应的js的对象，而List就是对应的js的数组

使用的时候取值用 ** .get('') **

** 互相转换数据类型 **

Immutable转js 用 ** .toJS() **
js转Immutable 用 ** fromJS() **

## Map：键值对集合，对应于 Object，ES6 也有专门的 Map 对象

Map在更改数据的时候常用set和setIn

接上面的map例子：

```jsx
let map1 = Map(), map2 = Map()
```

** set() ** 

```jsx
map1 = map.set('test1', 'value1')
```

则

```jsx
map1 = Map({test1: 'value1'})
```

** setIn() ** 

```jsx
map2 = map.setIn(['test2', 'test21'], 'value22')
```

则

```jsx
map2 = Map({test1: 'value', test2: Map({test21: 'value22'})})
```

## List：有序可重复的列表，对应于 Array

List对应的方法和数组基本一样 map, filter等

至于List对应的set方法第一个参数是元素的index

** 比如 ** 

```jsx
let list1 = List()
list1 = list.set(2, 3)
```

则

```jsx
list1 = List([1,3,3])
```