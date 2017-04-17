import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainForm from './components/MainForm';
import Results from './components/Results';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainForm />
        {/*<Results />*/}
      </div>
    );
  }
}

export default App;