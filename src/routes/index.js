import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RouteList from './routes'

class Routes extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<Router>
				<RouteList/>
			</Router>
		)
	}
}

export default Routes