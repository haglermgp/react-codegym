import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PerfilDetail from './perfil-detail'
import PerfilEdit from './perfil-edit'

// layouts
import MainLayout from '../../layouts/MainLayout.js'

const Perfil = () => {
	return(
		<div>
			<Route exact path='/perfil' component={PerfilDetail} />
			<Route exact path='/perfil/edit' component={PerfilEdit} />
		</div>
	)
}

export default Perfil