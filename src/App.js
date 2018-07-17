import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import {NotFound} from './pages/NotFound'
import './App.css';
import 'bulma/css/bulma.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route component = {NotFound} />
      </Switch>
    </div>
    );
  }
}

export default App;
