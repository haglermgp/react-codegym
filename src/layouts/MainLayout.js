import React, { Component } from 'react'
import './mainLayout.sass'

// utils
import { get, post } from '../utils' 
import { GET_URL } from '../utils/constants.js' 

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import AvatarUser from '../components/AvatarUser'
import MenuList from '../components/MenuList.js'


const MainLayout = (Routes) => 
	class extends Component {
		constructor(props) {
			super(props)
			this.state = {
				profileData: {},
				menuData: []
			}
		}

		componentWillMount() {
			var menuData
			var profileData

			const getProfile = get(GET_URL.PROFILE)
			getProfile
				.then(res => {
					return res.json()
				})
				.then(json => {
					profileData = json
					this.setState({ profileData })
				})

		const getMenu = get(GET_URL.MENU)
			getMenu
				.then(res => {
					return res.json()
				})
				.then(json => {
					menuData = json
					this.setState({ menuData })
				})

		}

		render() {
			return (
				<div className="mainLayout" >
					<div className="header" >
						<AvatarUser data={this.state.profileData} />
					</div>
					<div className="content" >
						<div className="sideBar" >
							<MenuList data={this.state.menuData} />
						</div>
						<div className="content" >
							<Routes />
						</div>
					</div>
				</div>
			)
		}
	}

export default MainLayout