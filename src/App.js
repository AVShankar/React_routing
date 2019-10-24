import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import User from "./User";
import Routing from "./Routing";

class App extends React.Component 
{
  state={pics:{}}
  render() {
    return (
      <div className="container">
        <Navbar />
        <User />
        <Routing />
      </div>
    );
  }
}

export default App;