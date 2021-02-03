import React, { Component } from "react";
import { FormGroup, Input, Label, Form } from "reactstrap"

class Review extends Component {
    state = { 
        errors: {},
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
            console.log("Success:", this.setState({status: "Success"}), data);
          })
          .catch(error => {
            console.error("Errorcito:", this.setState({status: "Error"}),  error);
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
        const errors = this.validate(this.state);
        this.setState({ errors });
				e.preventDefault();
        if(errors) return;
        this.addReview();
    }

    validate = state => {
      const errors = {};
    
      if (state.name.trim() === "") {
        errors.name = "Name is required";
      }
      if (state.reviewText.trim() === "") {
        errors.reviewText = "Review is required";
      }
      return Object.keys(errors).length === 0 ? null : errors;
    };

    render() { 
        const { name, reviewText, errors  } = this.state;
        return ( 
            <div>
              <Form onSubmit={this.handleReview.bind(this)}>
                <FormGroup>
                    <Input
                        onChange={this.handleNameInput}
                        type="name"
                        name="name"
                        placeholder="Enter Your Name"
                        value={name === null ? "" : name}
                        />
                    <Label for="exampleText">Write a short review of how was your experience working with me</Label>
                    <Input 
                        onChange={this.handleTextInput}
                        type="textarea" 
                        name="reviewText"  
                        placeholder="255 characters"
                        value={reviewText === null ? "" : reviewText}
                        />
                    {!errors ? <p>Thanks</p>:
                    <button type="submit" id="SubmitBoton">Submit</button>}
                </FormGroup>
              </Form>
            </div> 
            );
    }
}
 
export default Review;
