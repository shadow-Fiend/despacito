(目前对gulp的学习尚浅，只能进行简单构建，让我们共同进步吧！qq547106430)

## gulp是什么?

gulp是一个基于流的构建工具，可以自动执行指定的任务，简洁且高效

## gulp能做什么?

1.开发环境下，想要能够按模块组织代码，监听实时变化

2.css/js预编译，postcss等方案，浏览器前缀自动补全等

3.条件输出不同的网页，比如app页面和mobile页面

4.线上环境下，我想要合并、压缩 html/css/javascritp/图片，减少网络请求，同时降低网络负担

## 安装gulp

```jsx
npm install -g gulp     //全局安装

npm install --save-dev gulp //安装到当前项目并在package.json中添加依赖
```

## 核心API介绍

** gulp.task task(name[, deps], fn) **

task()方法用于定义任务，传入名字、依赖任务数组、函数即可，gulp会先执行任务数组，结束后调用定义的函数，可以通过此手段控制任务的执行顺利。

例子： 安装完成之后可以直接gulp跑起来的简单实例；gulpfile.js

```jsx
var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('server', ()=>{
    connect.server({
        port:3000
    })
})

gulp.task('default', ['server'], ()=>{
    console.log('serverd at 3000!')
})
```
