import React, { Component } from 'react'

const totalLikes = 0

const candidatesData = [
	{
		nameCandidate: 'Juan Bertoni',
		politicGroup: 'Accion Lima',
		photoUser: 'https://img.gestion.pe/files/article_content_ge_fotos/uploads/2018/09/29/5baf840d1e450.jpeg',
		photoPoliticGroup: 'http://box2028.temp.domains/~apraloui/wp-content/uploads/2018/06/cropped-APRA-Logo-3.jpg',
		likes: 0,
		lovers: 0,
		dislikes: 0
	},
	{
		nameCandidate: 'Alfredo Benavides',
		politicGroup: 'Cuellos Blancos',
		photoUser: 'https://cosas.pe/wp-content/uploads/2016/09/MANUEL-VELARDE2.png',
		photoPoliticGroup: 'https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2017/03/24144845/Fanta-Logo-500x500.jpg',
		likes: 0,
		lovers: 0,
		dislikes: 0
	},
	{
		nameCandidate: 'Lucho Quequesana',
		politicGroup: 'Marea Azul',
		photoUser: 'https://i.ytimg.com/vi/e8_g1WP1j4o/maxresdefault.jpg',
		photoPoliticGroup: 'https://brandongaille.com/wp-content/uploads/2014/01/18-Most-Famous-Financial-Company-Logos.jpg',
		likes: 0,
		lovers: 0,
		dislikes: 0		
	}
]

class ElectoralSystem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			candidates: candidatesData,
			totalLikesState: totalLikes
		}

		this.handleLike = this.handleLike.bind(this)
	}

	handleLike(props) {
		let newCandidate = this.state.candidates

		// only change likes
		newCandidate[props].likes = this.state.candidates[props].likes + 1

		this.setState({
			candidates: newCandidate
		})
	}


	render() {
		return (
			<div style={{ padding: 40 }} >

				{
					this.state.candidates.map((item, index) => (
						<div key={index} style={{ border: '1px solid black', width: 200, fontSize: 12, padding: 10, margin: 10, display: 'inline-block' }} >
							<h3>Candidate Number {index + 1} </h3>
								<img src={item.photoUser} alt={item.nameCandidate} width="200" />
							<hr/>
								<img src={item.photoPoliticGroup} alt={item.politicGroup} width="80" />
							<hr/>
							<div>
								<div>
									<p><b>Name:</b> {item.nameCandidate} </p>
									<p><b>Partido Politico:</b> {item.politicGroup} </p>
								</div>
								<hr/>
								<div>
									<span><b>Likes:</b> {item.likes} </span> - 
									<span><b>Dislikes:</b> {item.dislikes}</span> - 
									<span><b>Lovers:</b> {item.lovers}</span> - 
								</div>
								<hr/>
								<div>
									<button onClick={() => this.handleLike(index)} >Like</button>
									<button>Dislike</button>
									<button>Love</button>
								</div>
							</div>
						</div>
					))
				}


			</div>
		)
	}
}

export default ElectoralSystem