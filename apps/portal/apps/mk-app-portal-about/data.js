export function getMeta() {
	return {
		name: 'root',
		component: 'Layout',
		className: 'mk-app-portal-about',
		children: [{
            name: 'header',
            component: '::div',
            className: 'about-header',
            children: [{
                name: 'title',
                component: '::h2',
                className: 'about-title',
                children: '{{data.header.title}}'
            }]
        }, {
            name: 'footer',
            component: '::div',
            className: 'about-footer',
            children: [{
                name: 'end',
                component: '::div',
                className: 'about-end',
                children: '{{data.footer.end}}'
            }, {
                name: 'technique1',
                component: '::div',
                className: 'about-technique1',
                children: [ 'mk介绍网站,技术栈：react, redux, immutable,antd,nodejs,hapi,sequelize, node-zookeeper-dubbo;在线运行网址：' , {
                    name: 'about-technique-doc',
                    component: '::a',
                    href: 'https://ziaochina.github.io/mk-docs/',
                    target: '_blank',
                    className: 'about-technique-doc',
                    children: 'https://ziaochina.github.io/mk-docs/'
                }]
            }, {
                name: 'technique2',
                component:'::div',
                className: 'about-technique2',
                children: [ 'mk框架实现的demo网站,技术栈：react, redux, immutable,antd，在线预览：(账号:13334445556, 密码:1)', {
                    name: 'about-technique-demo',
                    component: '::a',
                    href: 'https://ziaochina.github.io/mk-demo/',
                    target: '_blank',
                    className: 'about-technique-demo',
                    children: 'https://ziaochina.github.io/mk-demo/'
                }]
            }]
        }]
	}
}

export function getInitState() {
	return { 
        data: {
            header: {
                title: '纸上得来终觉浅'
            },
            footer: {
                end: '技术支持：mk框架'
            }
        }
    }
}