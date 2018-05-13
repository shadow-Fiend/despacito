** PS：内容均为网上摘抄，自己整理；希望大家共同学习，共同进步（如有错误欢迎指正，联系qq547106430，谢谢！） **

## HTML/CSS部分

** 1、什么是盒子模型？ **

在网页中，一个元素占有空间的大小由元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分组成。它们一起构成了css中元素的盒模型。

** 2、CSS-标准盒模型 & 怪异盒模型 **

CSS中Box model是分为两种:: W3C标准 和 IE标准盒子模型

当设置为box-sizing:content-box时，将采用标准模式解析计算，也是默认模式；

在标准模式下，一个块的总宽度= width + margin(左右) + padding(左右) + border(左右)

当设置为box-sizing:border-box时，将采用怪异模式解析计算；

在怪异模式下，一个块的总宽度= width + margin(左右)（即width已经包含了padding和border值）

** 3、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？ **

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea

块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote

空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

** 4、简述一下src与href的区别 **

href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。

src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

** 5、px和em的区别 **

px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。

eg：假定浏览器的默认字体是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em

** 6、浏览器的内核分别是什么? **

IE: trident内核

Firefox：gecko内核

Safari：webkit内核

Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核

Chrome：Blink(基于webkit，Google与Opera Software共同开发)

** 7、XHTML和HTML有什么区别 **

HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言

XHTML 与 HTML 4.01 标准没有太多的不同。

最主要的不同：

XHTML 元素必须被正确地嵌套。

XHTML 元素必须被关闭。

标签名必须用小写字母。

XHTML 文档必须拥有根元素。

** 8、什么是语义化的HTML? **

直观的认识标签 对于搜索引擎的抓取有好处，用正确的标签做正确的事情！

html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；

在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO（Search Engine Optimization）。

使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

** 9、HTML5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和HTML5？ **

*新特性：*

绘画 canvas

用于媒介回放的 video 和 audio 元素

本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；

sessionStorage 的数据在浏览器关闭后自动删除

语意化更好的内容元素，比如 article、footer、header、nav、section

表单控件，calendar、date、time、email、url、search

新的技术webworker, websockt, Geolocation

*移除的元素*

纯表现的元素：basefont，big，center，font, s，strike，tt，u；

对可用性产生负面影响的元素：frame，frameset，noframes；

_ 支持HTML5新标签：可以利用这一特性让这些浏览器支持HTML5新标签 _

IE8/IE7/IE6支持通过document.createElement方法产生的标签

*HTML5和HTML的区别：*

1、在文档类型声明上

HTML声明：<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

HTML5声明：<!doctype html>

上面的两种声明,HTML5声明简洁方便人们的记忆，HTML声明太长了并且很难记住这段代码。

2、在结构语义上

HTML:没有体现结构语义化的标签，通常都是这样来命名的<div id="header"></div>，这样表示网站的头部。

HTML5:在语义上却有很大的优势，提供了一些新的HTML5标签比如: article、footer、header、nav、section，这些通俗易懂。

** 10、HTML5 为什么只需要写 !DOCTYPE HTML？ **

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

** 11、sessionStorage 、localStorage 和 cookie 之间的区别 **

共同点：都是保存在浏览器端，且同源的。

区别：

cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递；

cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。

存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。

而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；

localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；

cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；

localStorage 在所有同源窗口中都是共享的；

cookie也是在所有同源窗口中都是共享的。

Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。

Web Storage 的 api 接口使用更方便。

** 12、display有哪些值？说明他们的作用。 **

block         块类型。默认宽度为父元素宽度，可设置宽高，换行显示。

none          缺省值。象行内元素类型一样显示。

inline        行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。

inline-block  默认宽度为内容宽度，可以设置宽高，同行显示。

list-item     象块类型元素一样显示，并添加样式列表标记。

table         此元素会作为块级表格来显示。

inherit       规定应该从父元素继承 display 属性的值。

** 13、CSS引入的方式有哪些? link和@import的区别是? **

内联 内嵌 外链 导入

内嵌的缺点是对于一个包含很多网页的网站，在每个网页中使用嵌入式，进行修改样式时非常麻烦。单一网页可以考虑使用嵌入式。

导入式会在整个网页装载完后再装载CSS文件，因此这就导致了一个问题，如果网页比较大则会儿出现先显示无样式的页面，闪烁一下之后，再出现网页的样式。这是导入式固有的一个缺陷。

使用链接式时与导入式不同的是它会以网页文件主体装载前装载CSS文件，因此显示出来的网页从一开始就是带样式的效果的，它不会象导入式那样先显示无样式的网页，然后再显示有样式的网页，这是链接式的优点。

区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。

区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。

区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。

区别4：link支持使用Javascript控制DOM去改变样式；而@import不支持

** 14、CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高? **

标签选择符 类选择符 id选择符

继承不如指定 Id>class>标签选择

后者优先级高

** 15、CSS清除浮动的几种方法（至少两种） **

使用带clear属性的空元素

使用CSS的overflow属性；

使用CSS的:after伪元素；

使用邻接元素处理；

## JavaScript部分

** 1、谈一谈JavaScript作用域链 **

当执行一段JavaScript代码（全局代码或函数）时，JavaScript引擎会为其创建一个作用域又称为执行上下文（Execution Context），在页面加载后会首先创建一个全局的作用域，然后每执行一个函数，会建立一个对应的作用域，从而形成了一条作用域链。每个作用域都有一条对应的作用域链，链头是全局作用域，链尾是当前函数作用域。

作用域链用于解析标识符，当函数被创建时（不是执行），会将this、arguments、命名参数和该函数中的所有局部变量添加到该当前作用域中，当JavaScript需要查找变量X的时候（这个过程称为变量解析），它首先会从作用域链中的链尾也就是当前作用域进行查找是否有X属性，如果没有找到就顺着作用域链继续查找，直到查找到链头，也就是全局作用域链，仍未找到该变量的话，就认为这段代码的作用域链上不存在x变量，并抛出一个引用错误（ReferenceError）的异常。

** 2、如何理解JavaScript原型链 **

JavaScript中的每个对象都有一个prototype属性，我们称之为原型，而原型的值也是一个对象，因此它也有自己的原型，这样就串联起来了一条原型链，原型链的链头是object,它的prototype比较特殊，值为null。

原型链用于对象继承，函数A的原型属性(prototype property)是一个对象，当这个函数被用作构造函数来创建实例时，该函数的原型属性将被作为原型赋值给所有对象实例，比如我们新建一个数组，数组的方法便从数组的原型上继承而来。

当访问对象的一个属性时, 首先查找对象本身, 找到则返回; 若未找到, 则继续查找其原型对象的属性(如果还找不到实际上还会沿着原型链向上查找, 直至到根). 只要没有被覆盖的话, 对象原型的属性就能在所有的实例中找到，若整个原型链未找到则返回undefined

** 3、事件委托是什么 **

利用事件冒泡的原理，使自己所触发的事件，让父元素代替执行！

** 4、闭包是什么，有什么特性，对页面有什么影响?简要介绍你理解的闭包 **

闭包就是能够读取其他函数内部变量的函数。


** 5、编写一个b继承a的方法 **

```jsx
function A(name){
    this.name = name;
    this.sayHello = function(){alert(this.name + 'say Hello!');};
}
function B(name,id){
    this.temp = A;
    this.temp(name);        //相当于new A();
    delete this.temp;       
     this.id = id;   
    this.checkId = function(ID){alert(this.id==ID)};
}
```

** 6、如何阻止事件冒泡和默认事件 **

```jsx
// 阻止事件冒泡  
[javascript] view plain copy
function stopBubble(e) {  
  if(e && e.stopPropagation){  
      e.stopPropagation();  
  } else {  
    window.event.cancelBubble = true;  
  }  
};  
// 阻止浏览器的默认事件  
function stopDefault(e){  
  if(e && e.preventDefault) {  
    e.preventDefault();  
  } else {  
    window.event.returnValue = false;  
  }  
  return false;  
};
```

** 7、下面程序执行后弹出什么样的结果? **

```jsx
function fn() {
    this.a = 0;
    this.b = function() {
        alert(this.a)
    }
}
fn.prototype = {
    b: function() {
        this.a = 20;
        alert(this.a);
    },
    c: function() {
        this.a = 30;
        alert(this.a);
    }
}
var myfn = new fn();
myfn.b();
myfn.c();
```

** 8、谈谈This对象的理解。 **

谁调用this就指向谁！当没有明确调用对象时。this指向window！

** 9、下面程序的结果 **

```jsx
function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);
```

** 10、下面程序的输出结果 **

```jsx
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
```

** 11、了解Node么？Node的使用场景都有哪些？ **

一种javascript的运行环境，能够使得javascript脱离浏览器运行。

高并发、聊天、实时消息推送

** 12、介绍下你最常用的一款框架 **

react：

能够很好的和现有的代码结合。React只是MVC中的View层，对于其他的部分并没有硬性要求。意味着很多公司在选择用Angular全部重构和用React部分重构的时候，选择了React部分重构

因为一切都是component，所以代码更加模块化，重用代码更容易

因为强调只从this.props和this.state生成HTML，写起来bug比较少

PS：这个问题看自己用的啥就讲啥，笔者用的是react

** 13、对于前端自动化构建工具有了解吗？简单介绍一下 **

Gulp,Grunt等；

** 14、说一下什么是JavaScript的同源策略？ **

一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合

** 15、说说最近最流行的一些东西吧？常去哪些网站？ **

Node.js、MVVM、React-native,Angular,Weex等

CSDN,Segmentfault,博客园,掘金,Stackoverflow,伯乐在线,github等等（个人一些成果发布在上面 http://shadow-fiend.github.io/despacito ）
