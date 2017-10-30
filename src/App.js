import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from 'modules/home';

import './index.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/linea-arrows.css';
import './assets/css/linea-icons.css';
import './assets/css/template.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
