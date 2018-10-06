import React, { Component } from 'react'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: '',
			city: '',
			pass: '',
			correctPass: '123yes',
			isAuthenticated: false
		}

		this.handleUserName = this.handleUserName.bind(this)
		this.handleCity = this.handleCity.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
		this.validatePass = this.validatePass.bind(this)
	}

	handleUserName (propsUser) {
		this.setState({
			user: propsUser.target.value
		})
	}

	handleCity (propsCity) {
		this.setState({
			user: propsUser.target.value
		})
	}

	handlePassword (propsPassword) {
		// incorrect way
		// this.state.pass = propsPassword.target.value 

		// correact way
		this.setState({
			pass: propsPassword.target.value
		})
	}

	validatePass () {
		let status = false

		if (this.state.pass == this.state.correctPass) {
			status = true
		} else {
			status = false
		}

		this.setState({
			isAuthenticated: status
		})
	}


	render() {
		return (
			<div>
				<h1>Login Electoral System</h1>
				{this.state.user}
				<input type="text" name='user' placeholder="User" onChange={this.handleUserName} /> <br/>
				<input type="text" name='city' placeholder="City" onChange={this.handleCity} /> <br/>
				<input type="password" name='pass' placeholder="Password" onChange={this.handlePassword} /> <br/>

				<button onClick={this.validatePass} >Submit</button>
			</div>
		)
	}
}

export default Login