import React, { Component } from 'react'
import { Icon } from 'mk-component'

export default class Example3 extends Component {
	render() {
		let styleOut = {  justifyContent: 'center', alignItems: 'center', display: '-webkit-flex', height: 100, width: 100, backgroundColor: '#e9e9e9' },    
            styleIn = {  }
		return (
			<div style={styleOut}>
				<Icon type='github' showStyle='primary' style={styleIn} />
			</div>
		)
	}
}