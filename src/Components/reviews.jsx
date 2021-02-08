import React, { Component } from "react";
import Paginate from "./pagination"
import { Container } from "reactstrap"

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
			const { currentPage, reviewsPerPage, reviews} = this.state
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
					)}
				)
				return allReviews
		}
		

    render() { 
			const { reviewsPerPage, reviews} = this.state
			
			return (
				<div id="reviews">
					<h1 className="display-5">
					<br/>
							Feedback
					 <br/>
					</h1>
					<Container>
					<section className="breweries" id="breweries">
        	    <ul>
								{this.paginateAlgorithm()}
        	    </ul>
								<Paginate
        	  			reviewsPerPage={reviewsPerPage}
        	  			allReviews={reviews.length}
        	  			passPage={this.handlePageChange}
									/>
					</section>
					</Container>
				</div>
				)
    	}
	}
 
export default Reviews;