import React from 'react'

var Button = (props) => {
	const fondo = 'yellow'
	return (
		<div >
			<button style={{ background: fondo, color: props.color }} >
				{props.name}
			</button>
			SOME TEXT
		</div>
	)
}

export default Button