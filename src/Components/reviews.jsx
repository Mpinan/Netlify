import React, { Component } from "react";
import Paginate from "./pagination"
import Review from "./reviewForm"

class Reviews extends Component {
	state = {
		currentPage: 1,
		reviewsPerPage: 1,
		reviews: []
	}

	componentDidMount() {
		this.getReviews();
	}

	getReviews() {
		fetch(`https://apiwe.herokuapp.com/reviews`)
			.then(response => response.json())
			.then(result => this.setState({ reviews: result.reviews }))
			.catch(err => console.log(err));
	}

	handlePageChange = number => {
		this.setState({ currentPage: number });
	};

	paginateAlgorithm() {
		const { currentPage, reviewsPerPage, reviews } = this.state
		const indexLastReview = currentPage * reviewsPerPage;
		const indexFirstReview = indexLastReview - reviewsPerPage;
		const currentReviews = reviews.slice(indexFirstReview, indexLastReview);
		let allReviews = currentReviews.map((review) => {
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
		}
		)
		return allReviews
	}


	render() {
		const { reviewsPerPage, reviews } = this.state

		return (
			<div>
				<h1 className="display-5">
					<br />
							Feedback
					 <br />
				</h1>
				<div id="reviews" className="reviews-container">
					<div className="review-form">
						<section className="breweriesReviews" id="breweriesReviews">
							<ul>
								<li>
									<h4 className="display-5">
										<br />
          			  		Write me a review!
          			  <br />
									</h4>
									<Review />
								</li>
							</ul>
						</section>
					</div>
					<div className="show-reviews">

						<section className="breweriesReviews" id="breweriesReviews">
							<ul>
								{this.paginateAlgorithm()}
							</ul>
							<Paginate
								reviewsPerPage={reviewsPerPage}
								allReviews={reviews.length}
								passPage={this.handlePageChange}
							/>
						</section>

					</div>

				</div>


			</div>
		)
	}
}

export default Reviews;