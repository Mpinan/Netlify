import React from "react";
import { Input } from "reactstrap"
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
        <br/>
        <Input 
        type="textarea" 
        name="message"
        placeholder="Contact me for anything you would like to know, even just to say Hi!" 
        />
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