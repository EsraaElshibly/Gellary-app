import React, { Component } from "react";
import "./App.css";
import Images from "./Components/Gellary-app/Images";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This Is Gellary App</h1>
        <Images />
      </div>
    );
  }
}

export default App;
