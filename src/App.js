import React, { Component } from "react";
import { BrowserRouter,
  Switch } from "react-router-dom";
  // , Route, Redirect, 
import NavigationBar from "./Components/navigationBar";
import Introduction from "./Components/introduction"
import About from "./Components/aboutme"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <Introduction/>
        <About/>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/signup" component={SignUp} />
            <Route exact path="/introduction" component={Introduction} />
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
