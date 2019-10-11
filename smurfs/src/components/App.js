import React, { Component } from "react";
import SmurfInfo from './SmurfInfo';
import FormikLoginForm from './LoginForm';
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 ! Welcome to the smurf village</h1>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGfttlsHdG70eC5gtHa8tpXZL2jHw3C8i1F0jicWYiwfvfRCsQg'/>
        <SmurfInfo/>
        <FormikLoginForm />
      </div>
    );
  }
}

export default App;
