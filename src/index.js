import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button.js'

var ViewNew = (props) => {
	let nameButton = "Happy" + " " + props.name
	return (
		<div style={{ color: 'green' }} >
			<Button
				name={nameButton}
				color='red'
			/>
			<Button
				name={nameButton}
				color='black'
			/>
			<Button
				name='HEY'
				color='black'
			/>

			ASLKDJFASDLKF

			<input type="name"/>
		</div>

	)
}

ReactDOM.render(
	// vista('button'),
	<ViewNew name="CodeGym" />,
	document.getElementById('root')
)