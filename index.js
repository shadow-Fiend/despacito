import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import verticalCenter from './apps/docsCode/verticalCenter/index.js'
import mk_app_login from './apps/login/index.js'
import markdown from './apps/markdown/index.js'
import mk_app_person_card from './apps/person/card/index.js'
import mk_app_person_list from './apps/person/list/index.js'
import mk_app_portal_about from './apps/portal/apps/mk-app-portal-about/index.js'
import mk_app_portal_app1 from './apps/portal/apps/mk-app-portal-app1/index.js'
import mk_app_portal_app2 from './apps/portal/apps/mk-app-portal-app2/index.js'
import mk_app_portal from './apps/portal/index.js'
import mk_app_root_about from './apps/root/apps/mk-app-root-about/index.js'
import mk_app_root_helloWorld from './apps/root/apps/mk-app-root-helloWorld/index.js'
import mk_app_root from './apps/root/index.js'

const apps = {
		
	[verticalCenter.name]: verticalCenter,	
	[mk_app_login.name]: mk_app_login,	
	[markdown.name]: markdown,	
	[mk_app_person_card.name]: mk_app_person_card,	
	[mk_app_person_list.name]: mk_app_person_list,	
	[mk_app_portal_about.name]: mk_app_portal_about,	
	[mk_app_portal_app1.name]: mk_app_portal_app1,	
	[mk_app_portal_app2.name]: mk_app_portal_app2,	
	[mk_app_portal.name]: mk_app_portal,	
	[mk_app_root_about.name]: mk_app_root_about,	
	[mk_app_root_helloWorld.name]: mk_app_root_helloWorld,	
	[mk_app_root.name]: mk_app_root,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()