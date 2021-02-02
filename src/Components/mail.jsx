import React from "react";
import { Input, Label } from "reactstrap"
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xdopjeyb"
        method="POST"
      >
				<Input 
				type="email" 
				name="email" 
				placeholder="Enter Your Email"
				/>
        <Label for="exampleText">Contact me for anything you would like to know, even just to say Hi!</Label>
        <Input type="textarea" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : 
				<button type="submit" id="SubmitBoton" >Send!</button>}
        {status === "ERROR" && 
				<p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}