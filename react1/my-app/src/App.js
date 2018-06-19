import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/first';
import Second from './components/second';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  onInputChange(event) {
    // console.log(event);
    this.setState({ name: event });
  }
  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <First onChange={term=>this.onInputChange(term)}/>
        <Second name={this.state.name} />
      </div>
    );
  }
}

export default App;
