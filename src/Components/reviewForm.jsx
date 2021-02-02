import React, { Component } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap"

class Review extends Component {
    state = { 
        status: "",
        name: "",
        reviewText: ""
     }

     addReview() {
        fetch("https://apiwe.herokuapp.com/submit_review", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"},
          body: JSON.stringify(
            {
              review_name: this.state.name,
              review_text: this.state.reviewText
            }
          )
        })
          .then(response => response.json())
          .then(data => {
            console.log("Success:", data);
          })
          .catch(error => {
            console.error("Errorcito:", error);
          })
          .catch(err => console.log(err));
      }

    handleNameInput = name => {
        this.setState({ name: name.target.value });
		};
		
    handleTextInput = reviewText => {
        this.setState({ reviewText: reviewText.target.value });
    };

    handleReview(e) {
				e.preventDefault();
				console.log(this.state)
        this.addReview();
    }

    render() { 
        const { status } = this.state;
        return ( 
            <div>
                <FormGroup>
                    <Input
                        onChange={this.handleNameInput}
                        type="name"
                        name="name"
                        placeholder="Enter Your Name"
                    />
                    <Label for="exampleText">Write a short review of how was your experience working with me</Label>
                    <Input 
                        onChange={this.handleTextInput}
                        type="textarea" 
                        name="reviewText"  
                        placeholder="255 characters"
                    />
                    {status === "SUCCESS" ? <p>Thanks!</p>: 
                    <Button onClick={this.handleReview.bind(this)} type="submit">Submit</Button>}
                    {status === "ERROR" && 
				    <p>Ooops! There was an error.</p>}
              </FormGroup>
            </div> 
            );
    }
}
 
export default Review;
