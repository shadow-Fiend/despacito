import React, { Component } from 'react'
import Example from '../../../components/example'
import Markdown from '../../../components/markdown'

import example1Md from './md/example1.md'
import example2Md from './md/example2.md'
import example3Md from './md/example3.md'
import Example1 from './example/example1'
import Example2 from './example/example2'
import Example3 from './example/example3'

import readmeMd from './md/readme.md'


export default class Demo extends Component {
	render() {
		return (
			<div>
				<Example
					title='方法一：父级固定宽高下的垂直居中' 
                    className='verticalCenter'
					content={<Example1 />}
					doc={example1Md}
				/>
				<Example
					title='方法二：table布局实现居中' 
                    className='verticalCenter'
					content={<Example2 />}
					doc={example2Md}
				/>
				<Example
					title='方法三：flex布局实现居中' 
                    className='verticalCenter'
					content={<Example3 />}
					doc={example3Md}
				/>

				{/*Markdown({ content: readmeMd })*/}
			</div>
		)
	}

}
