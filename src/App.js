import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Voici le code que je modifie, premier test =)
        </p>
      </div>
    );
  }

}

export default App;
