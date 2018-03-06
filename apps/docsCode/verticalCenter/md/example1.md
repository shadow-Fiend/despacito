```jsx
import React, { Component } from 'react'
import { Icon } from 'mk-component'

export default class Example1 extends Component {
	render() {
		let styleOut = {
            position: 'relative',
            height: 100,
            width: 100,
            backgroundColor: '#e9e9e9'
            },    
            styleIn = {
            display: 'block',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            webkitTransform: 'translateX(-50%) translateY(-50%)',
            mozTransform: 'translateX(-50%) translateY(-50%)',
            msTransform: 'translateX(-50%) translateY(-50%)',
            /*marginLeft: -6, marginTop: -6*/
            }
		return (
			<div style={styleOut}>
				<Icon type='github' showStyle='showy' style={styleIn} />
			</div>
		)
	}
}
```

** PS: 用定位实现 **

如果子集的大小固定可以用注释掉的margin来实现