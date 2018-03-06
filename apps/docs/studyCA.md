# CMD，AMD的原理，区别，应用场景

 ## 有必要简单提一下两者的主要区别，CMD推崇依赖就近，可以把依赖写进你的代码中的任意一行，例： 
 
```jsx
define(function(require, exports, module) {
  var a = require('./a')
  a.doSomething()
  var b = require('./b')
  b.doSomething()
})
```

代码在运行时，首先是不知道依赖的，需要遍历所有的require关键字，找出后面的依赖。

具体做法是将function toString后，用正则匹配出require关键字后面的依赖。

显然，这是一种牺牲性能来换取更多开发便利的方法。

## 而AMD是依赖前置的，换句话说，在解析和执行当前模块之前，模块作者必须指明当前模块所依赖的模块，表现在require函数的调用结构上为：

```jsx
define(['./a','./b'],function(a,b){
   a.doSomething()
   b.doSomething()
})
```

代码在一旦运行到此处，能立即知晓依赖。而无需遍历整个函数体找到它的依赖，因此性能有所提升，缺点就是开发者必须显式得指明依赖——这会使得开发工作量变大，比如：当你写到函数体内部几百上千行的时候，忽然发现需要增加一个依赖，你不得不回到函数顶端来将这个依赖添加进数组。

到目前位置我讨论的AMD和CMD的思想的关于依赖的部分，都只讨论的“硬依赖”，也就是执行前肯定需要的依赖，但是这不是全部的情况。有的时候情况是这样的：

### 函数体内：

```jsx
if(status){
  a.doSomething()
}
```

在这个函数体内，可能依赖a，也可能不依赖a，我把这种可能的依赖成为“软依赖”。

对于软依赖当然可以直接当硬依赖处理，但是这样不经济，因为依赖是不一定的，有可能加载了此处的依赖而实际上没有用上。

对于软依赖的处理，我推荐依赖前置+回调函数的实现形式。上面的例子简单表述如下：

### 函数体内：

```jsx
if(status){
  async(['a'],function(a){
    a.doSomething()
  })
}
```

## 至此可以对由commonJS衍生出来的方案做出总结了。

在浏览器端来设计模块加载机制，需要考虑依赖的问题。

我们先把依赖分为两种，“强依赖” —— 肯定需要 和“弱依赖” —— 可能需要。

对于强依赖，如果要性能优先，则考虑参照依赖前置的思想设计你的模块加载器，我个人也更推崇这个方案一些；如果考虑开发成本优先，则考虑按照依赖就近的思想设计你的模块加载器。

对于弱依赖，只需要将弱依赖的部分改写到回调函数内即可。

如果现在我要实现一个模块加载器，我会将强依赖前置，弱依赖采用异步回调函数的形式，其它的方法我认为都只是语法糖而已，仅此就够了。