import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div style={{ background: 'purple', color: 'white', }} >
			New Links! <br/> <br/>
			<Link to='/login' >Login</Link> <br/>
			<Link to='/electoral' >Electoral</Link> <br/>
			<Link to='/perfil' >Perfil </Link>
		</div>
	)
}

export default Header