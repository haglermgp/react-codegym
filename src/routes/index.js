import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Routes Files
import Login from './Login'
import ElectoralSystem from './ElectoralSystem'

// components
import Header from '../components/Header'

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
					<Header/>
					<hr/>
					<Route path="/login" component={Login}/>
					<Route path="/electoral" component={ElectoralSystem} />
				</div>
			</Router>
		)
	}
}

export default App