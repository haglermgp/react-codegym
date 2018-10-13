import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			New Links! <br/> <br/>
			<Link to='/login' >Login</Link> <br/>
			<Link to='/electoral' >Electoral</Link>
		</div>
	)
}

export default Header