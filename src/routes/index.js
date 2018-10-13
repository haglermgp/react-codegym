import React, { Component } from 'react'
import Login from './Login'
import ElectoralSystem from './ElectoralSystem'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLogged: false,
			data: {}
		}

		this.handleChangeIsLogged = this.handleChangeIsLogged.bind(this)
	}

	componentWillMount() {

		console.log('execute 1 >>>>>')

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json() )
			.then(json => {
				console.log('execute 2 >>>>>')
				this.setState({
					data: json
				})
			})

		console.log('execute 3 >>>>>')
	}

	componentDidMount() {
		console.log('componentDidMount >>>> 2')
	}


	handleChangeIsLogged(props) {

		this.setState({
			isLogged: props
		})

		setTimeout(() => {
		},2000)
	}

	render() {

		console.log('this.state.data >>>>', this.state.data)

		return (
			<div>

				<p style={{ backgroundColor: 'grey', margin: 10 }}>
					<b>id:</b> <span>{this.state.data.id}</span> <br/>
					<b>title:</b> <span>{this.state.data.title}</span> <br/>
					<b>userId:</b> <span>{this.state.data.userId}</span> <br/>
					<b>completed:</b> <span>{this.state.data.completed ? 'Si' : 'No'}</span> 
				</p>

				{
					this.state.isLogged ? 
						<ElectoralSystem/>
					: 
						<Login handleChangeIsLogged={this.handleChangeIsLogged} />
				}

			</div>
		)
	}
}



export default App