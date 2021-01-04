import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NavigationBar from "./Components/navigationBar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/userpage" component={UserPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/logout" component={LogOut} />
            <Redirect exact path="/" to="/home" />
            <Route path="/*" component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
