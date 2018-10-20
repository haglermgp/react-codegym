import React from 'react'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = (props) => {
	return (
		<div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
			<Header/>
			<div>
				{props.children}
			</div>
			<Footer/>
		</div>
	)
}

export default MainLayout