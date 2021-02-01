import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap"

class Mail extends Component {
	state = {  }
	render() { 
		return ( 
			<div>
					<FormGroup>
							<Input
									type="email"
									name="email"
									id="exampleEmail"
									placeholder="Enter Your Email"
							/>
							<Label for="exampleText">Contact me for anything you would like to know, even just say Hi!</Label>
							<Input type="textarea" name="text" id="exampleText" />
				</FormGroup>
				<a type="submit" id="SubmitBoton" href="https://github.com/jaitone/Chwetter">Visit Github Project</a>
			</div> 
			);
	}
}
 
export default Mail;
