import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Routes Files
import Home from './Home/index.js'
import Perfil from './Perfil'

// components

// layouts
import MainLayout from '../layouts/MainLayout'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<Router>
				<div style={{ height: '100vh' }} >
					<Route exact path="/" component={Home}/>
					<Route path="/perfil" component={Perfil} />
				</div>
			</Router>
		)
	}
}

export default App