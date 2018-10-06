import React, { Component } from 'react'

const candidates = [
	{
		nameCandidate: 'Juan Bertoni',
		politicGroud: 'Accion Lima',
		likes: 0,
		lovers: 0,
		haters: 0
	},
	{
		nameCandidate: 'Alfredo Benavides',
		politicGroud: 'Cuellos Blancos',
		likes: 0,
		lovers: 0,
		haters: 0
	},
	{
		nameCandidate: 'Lucho Quequesana',
		politicGroud: 'Marea Azul',
		likes: 0,
		lovers: 0,
		haters: 0		
	}
]

class ElectoralSystem extends Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}


	render() {

		return (
			<div>
				<h1>Hi User Name</h1>

				<div>
					<div>
						<p><b>Name:</b> Chaparron Bonaparte</p>
						<p><b>Partido Politico:</b> Chaparron Bonaparte</p>
					</div>
					<div>
						<span><b>Likes:</b> 0</span>
						<span><b>Dislikes:</b> 0</span>
						<span><b>Lovers:</b> 0</span>
					</div>
				</div>
			</div>
		)
	}
}

export default ElectoralSystem