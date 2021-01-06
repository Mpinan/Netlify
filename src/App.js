import React, { Component } from "react";
import NavigationBar from "./Components/navigationBar";
import About from "./Components/aboutme"
import BottonBar from "./Components/bottonbar"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
          <About/>
          <BottonBar/>
      </div>
    );
  }
}

export default App;
