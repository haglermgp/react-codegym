import React, { Component } from 'react'
import Login from './Login'
import ElectoralSystem from './ElectoralSystem'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLogged: false
		}

		this.handleChangeIsLogged = this.handleChangeIsLogged.bind(this)
	}


	handleChangeIsLogged(props) {

		this.setState({
			isLogged: props
		})

		setTimeout(() => {
		},2000)
	}

	render() {
		return (
			<div>

				{
					this.state.isLogged ? 
						<ElectoralSystem/>
					: 
						<Login handleChangeIsLogged={this.handleChangeIsLogged} />
				}

			</div>
		)
	}
}



export default App