import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import {NotFound} from './pages/NotFound'
import './App.css';
import 'bulma/css/bulma.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  state = {
    loadingWeb:true
  }

  componentDidMount(){
    window.addEventListener('load', this.handleLoad);
    AOS.init({
      duration : 2000
    })
  }

  handleLoad = () =>{
    setTimeout( () => {
      this.setState({loadingWeb:false})
    }, 1000);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
    clearTimeout()
  }

  render() {
    if(this.state.loadingWeb){
      return (
        <div className="loaderWeb"><div className="loader-innerWeb"></div></div>
      )
    }

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
