```jsx
import React, { Component } from 'react'
import { Icon } from 'mk-component'

export default class Example2 extends Component {
	render() {
		let styleOut = {
            display: 'table',
            height: 100,
            width: 100,
            backgroundColor: '#e9e9e9'
            },    
            styleIn = { 
            display: 'table-cell',
            textAlign: 'center',
            verticalAlign: 'middle'
            }
		return (
			<div style={styleOut}>
				<Icon type='github' showStyle='softly' style={styleIn} />
			</div>
		)
	}
}
```