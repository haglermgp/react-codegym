import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Routes Files
import Home from './Home/index.js'
import Login from './Login/Login.js'
import ElectoralSystem from './Electoral/ElectoralSystem.js'
import Perfil from './Perfil'

// components

// layouts
import MainLayout from '../layouts/MainLayout'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLogged: false,
		}

		this.handleChangeIsLogged = this.handleChangeIsLogged.bind(this)
	}

	handleChangeIsLogged(props) {
		this.setState({
			isLogged: props
		})

	}

	render() {

		return (
			<Router>
				<div>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/electoral" component={ElectoralSystem} />
					<Route path="/perfil" component={Perfil} />
				</div>
			</Router>
		)
	}
}

export default App