import React, { Component } from "react";

class Reviews extends Component {
    state = { 
			reviews: []
		 }

		 componentDidMount() {
			this.getReviews();
		}

		 getReviews() {
			fetch(`https://apiwe.herokuapp.com/reviews`)
				.then(response => response.json())
				.then(result => this.setState({ reviews: result }))
				.catch(err => console.log(err));
		}
    render() { 
			const { reviews } = this.state
			let allReviews 

			if(reviews.reviews) {

				allReviews = reviews.reviews.map( review =>
					{
						return (

						<li key={review.id}>
							<figure>
									<h3>
										{review.review_name}
									</h3>
							</figure>
							<p>
								{review.review_text}
							</p>
						</li>
					)
				})
			}

			return (
				<div id="reviews">
						<h1 className="display-5">
      			  <br/>
								Reviews
							<br/>
      			</h1>
					<section className="breweries" id="breweries">
						<ul>
							{allReviews}
						</ul>
					</section>
				</div>
			)
    }
}
 
export default Reviews;