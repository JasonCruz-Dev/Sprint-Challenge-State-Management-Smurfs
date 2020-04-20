import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import logo from "../images/The_Smurfs_Logo.svg";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={logo} alt='Smurfs Logo' />
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
