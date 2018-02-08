import React, { Component } from 'react';
import logo from './logo.png';
import homeIcon from './home-button.png'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="flex-row">
            <img src={logo} className="App-logo" alt="logo" />
            <SearchBar />
          </div>
          <div className="flex-row pull-right">
            <img src={homeIcon} className='Home-logo' alt='homeIcon' />
            <img src={homeIcon} className='Home-logo' alt='homeIcon' />
            <img src={homeIcon} className='Home-logo' alt='homeIcon' />
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
