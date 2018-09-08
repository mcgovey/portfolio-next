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
				<Interface />
      </div>
    );
  }
}

export default App;