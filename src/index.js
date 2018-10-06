import React from 'react'
import ReactDOM from 'react-dom'
// import the main file of app
import App from './routes' //./routes/index.js

ReactDOM.render(
	<App name="Lui" apellido='Gonzales' />,
	document.getElementById('root')
)