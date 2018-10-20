import React from 'react'
import './avatarUser'

const AvatarUser = (props) => {
	let photo, name
	if (props.data !== undefined) {
		photo = props.data.photo
		name = props.data.name
	}
	
	return(
		<div className="avatar" >
			<img src={photo} alt={name} />
			<span>
				{name}
			</span>
		</div>
	)
}

export default AvatarUser