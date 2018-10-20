import React from 'react'

// const MenuList = (props) => {
	// const { menuData } = prop
const MenuList = ({data}) => {
	console.log('data >>>>', data)
	return (
		<div style={{ color: 'white' }} >
			<ul>
				{
					data.map((item, index) => {
						return (
							<li key={index} >
								<a href={`${item.path}`}>
									{item.title}								
								</a>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default MenuList