import React, { Component } from 'react';
import logo from './logo.png';
import homeIcon from './home-button.png'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import LeftAd from './components/LeftAd/LeftAd.js'

class App extends Component {
  state = {
    friends: [
      {
        id:1,
        name: 'David'
      },
      {
        id: 2,
        name: 'Chris'
      },
      {
        id: 3,
        name: 'Chris'
      },
      {
        id: 4,
        name: 'Chris'
      }
    ]
  }
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
        <div>
        <LeftAd friends={this.state.friends}/>
        </div>
      </div>
    );
  }
}

export default App;
