import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap"

class Review extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <FormGroup>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Your Name"
                    />
                    <Label for="exampleText">Write a short review of how was your experience working with me</Label>
                    <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
                    <a type="submit"id="SubmitBoton" href="https://github.com/jaitone/Chwetter">Visit Github Project</a>
            </div> 
            );
    }
}
 
export default Review;
