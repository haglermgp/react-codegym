import React, { Component } from 'react'

// var App = (props) => {
// 	return (
// 		<div>

// 		</div>
// 	)
// }

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'hagler',
			age: 28,
			married: false
		}
	}

	render() {
		return (
			<div>
				{this.state.name} <br/>
				{this.state.age} <br/>
				{this.state.married} <br/>

				SLKFDJS				
			</div>
		)
	}
}



export default App