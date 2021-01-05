import React, { Component } from "react";
import NavigationBar from "./Components/navigationBar";
import About from "./Components/aboutme"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
          <About/>
          
      </div>
    );
  }
}

export default App;
