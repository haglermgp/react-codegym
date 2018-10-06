import React, { Component } from 'react'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: '',
			city: '',
			pass: ''
		}

		this.handleUserName = this.handleUserName.bind(this)
		this.handleCity = this.handleCity.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
	}

	handleUserName (propsUser) {
		this.setState({
			user: propsUser.target.value
		})

	}

	handleCity (propsCity) {
		console.log('propsCity >>>>', propsCity.target.value)
	}

	handlePassword (propsPassword) {
		console.log('propsPassword >>>>', propsPassword.target.value)
	}


	render() {
		console.log('this.stat.user >>>>', this.state.user)

		return (
			<div>
				<h1>Login Electoral System</h1>
				{this.state.user}
				<input type="text" name='user' placeholder="User" onChange={this.handleUserName} /> <br/>
				<input type="text" name='city' placeholder="City" onChange={this.handleCity} /> <br/>
				<input type="password" name='pass' placeholder="Password" onChange={this.handlePassword} /> <br/>

				<button>Submit</button>
			</div>
		)
	}
}



export default Login