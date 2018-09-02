import React, { Component } from 'react';
// import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
// import * as actions from './actions';
import Interface from './components/Interface';

class App extends Component {
  render() {
    // console.log('props', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
				<Interface />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;