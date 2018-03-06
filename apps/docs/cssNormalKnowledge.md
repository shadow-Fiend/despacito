（内容均为个人在工作过程中常用到但又经常记不住需要百度的。PS：纯手打欢迎指正共同学习，如有错误欢迎指正，联系qq547106430，谢谢！）

 ## css实现单行、多行文本溢出显示省略号(...)
 
 单行文本的溢出显示省略号用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。
 
```jsx
overflow: hidden;
text-overflow: ellipsis;
white-space: nowwrap;
```

多行文本溢出显示省略号 如下:

```jsx
display: -webket-box; //将对象作为弹性伸缩盒子模型显示
-webkit-box-orient: vertical; //设置或检索伸缩盒对象的子元素的排列方式 
-webkit-line-clamp: 3; //用来限制在一个块元素显示的文本的行数
overflow: hidden;
```