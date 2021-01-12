import React, { Component } from "react";
import NavigationBar from "./Components/navigationBar";
import About from "./Components/aboutme"
import BottonBar from "./Components/bottonbar"
import Introduction from "./Components/introduction"
import Resume from "./Components/resume"
import Projects from "./Components/projects"



class App extends Component {
  render() {
    return (
      <div className="App">
          <NavigationBar/>
          <Introduction />
          <About/>
          <Resume/>
          <Projects/>
          <BottonBar/>
      </div>
    );
  }
}

export default App;
