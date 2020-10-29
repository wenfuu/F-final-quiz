import React, { Component } from 'react';
import './App.scss';
import Group from '../components/Group/Group';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
      </div>
    );
  }
}

export default App;
