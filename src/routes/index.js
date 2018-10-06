import React, { Component } from 'react'
import Login from './Login'
import ElectoralSystem from './ElectoralSystem'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Login/>
				<ElectoralSystem/>
			</div>
		)
	}
}



export default App