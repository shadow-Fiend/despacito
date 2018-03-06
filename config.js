import { Toast, Notification, Modal } from 'mk-component'
import { componentFactory } from 'mk-meta-engine'
import { fetch } from 'mk-utils'
import Markdown from './components/markdown'
import './mock.js' //脱离后台测试，启用mock，否则这行注释

import mdStudyMarkdown from './apps/docs/studyMarkdown.md'
import mdStudyImmutableJS from './apps/docs/studyImmutableJS.md'
import mdStudyGulpJS from './apps/docs/studyGulpJS.md'
import mdStudyAMD from './apps/docs/studyAMD.md'
import mdStudyCMD from './apps/docs/studyCMD.md'
import mdStudyCA from './apps/docs/studyCA.md'
import mdStudyCAC from './apps/docs/studyCAC.md'
import mdInterviewDiscuss from './apps/docs/interviewDiscuss.md'
import mdStudyInherit from './apps/docs/studyInherit.md'
import mdCssNormalKnowledge from './apps/docs/cssNormalKnowledge.md'

var _options = {}

//配置fetch
fetch.config({
	mock: true, //脱离后台测试，启用mock，否则这行注释

	//fetch支持切面扩展（before,after），对restful api统一做返回值或者异常处理
	after: (response, url) => {
		if (response.result) {
			console.log(url, response)
/*            if(response.token){ //登录后设置accessToken,根据需要调整
                fetch.config({token:response.token})
            }
			return response.value*/
		}
		else {
			Toast.error(response.error.message)
			throw { url, response }
		}
	}
})

//元数据引擎注册markdown组件
componentFactory.registerComponent('Markdown', Markdown)


function config(options) {
	Object.assign(_options, options)

	//对应用进行配置，key会被转换为'^<key>$'跟app名称正则匹配
    _options.apps && _options.apps.config({
        //'*': { webapi } //正式网站应该有一个完整webapi对象，提供所有web请求函数
      'mk-app-root': {
            startAppName: 'mk-app-portal'
        },
   /*       'mk-app-login': {
            goAfterLogin: {
                appName: 'mk-app-portal'
            }
        },*/
        'mk-app-portal': {
            menu: [{
                key: '1',
                name: '简介',
                appName: 'mk-app-portal-about',
                isDefault: true
            }, {
                key: '4',
                name: '前端面试',
                isExpand: false,
                children:[{
                    key: '401',
                    name: '简单论述题',
                    appName: 'markdown?id=401',
                    appParams: {content: mdInterviewDiscuss}
                }, {
                    key: '402',
                    name: '需代码解答题',
                    isExpand: false,
                    children: [{
                        key: '4021',
                        name: 'css垂直居中操作',
                        appName: 'verticalCenter'
                    }] 
                }]
            }, {
                key: '5',
                name: '前端知识',
                isExpand: false,
                children: [{
                    key: '501',
                    name: '常用小知识',
                    isExpand: false,
                    children: [{
                        key: '5011',
                        name: 'CSS',
                        appName: 'markdown?id=5011',
                        appParams: {content: mdCssNormalKnowledge}
                    }]
                }, {
                    key: '502',
                    name: '基础深挖',
                    isExpand: false,
                    children: [{
                        key: '5021',
                        name: '继承',
                        appName: 'markdown?id=5021',
                        appParams: {content: mdStudyInherit}
                    }]
                }]
            }, {
                key: '2',
                name: 'JS工具',
                isExpand: false,
                children: [{
                    key: '201',
                    name: '学习使用markdown',
                    appName: 'markdown?id=201',
                    appParams: {content: mdStudyMarkdown}
                }, {
                    key: '202',
                    name: '学习immutable.js',
                    appName: 'markdown?id=202',
                    appParams: {content: mdStudyImmutableJS}
                }, {
                    key: '203',
                    name: '学习构建工具gulp.js',
                    appName: 'markdown?id=203',
                    appParams: {content: mdStudyGulpJS}
                }, ]
            }, {
                key: '3',
                name: 'JS模块化开发',
                isExpand: false,
                children: [{
                    key: '301',
                    name: 'AMD学习',
                    appName: 'markdown?id=301',
                    appParams: {content: mdStudyAMD}
                }, {
                    key: '302',
                    name: 'CMD学习',
                    appName: 'markdown?id=302',
                    appParams: {content: mdStudyCMD}
                }, {
                    key: '303',
                    name: 'AMD/CMD',
                    appName: 'markdown?id=303',
                    appParams: {content: mdStudyCA}
                }, {
                    key: '304',
                    name: 'AMD/CMD/CommonJS',
                    appName: 'markdown?id=304',
                    appParams: {content: mdStudyCAC}
                }, ]
            }]
        }
    })

	_options.targetDomId = 'app' //react render到目标dom
	_options.startAppName = 'mk-app-portal' //启动app名，需要根据实际情况配置

	_options.toast = Toast //轻提示使用组件，mk-meta-engine使用
	_options.notification = Notification //通知组件
	_options.modal = Modal //模式弹窗组件
	return _options
}

config.current = _options

export default config