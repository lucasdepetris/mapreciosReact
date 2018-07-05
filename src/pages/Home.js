import React, { Component } from 'react';
import {Header} from '../components/Header'
import {SectionIntroduction} from '../components/SectionIntroduction'
import SectionSearchProducts from '../components/SectionSearchProducts'
import ListProducts from '../components/ListProducts'

export default class Home extends Component{
  state = {
    productToSearch:{},
    productSelected:{}
  }

  _handleResults = (results,lat,lng) => {
    var pro = {
      prod:results,
      lat:lat,
      lng:lng
    }
    this.setState({productToSearch:pro})
  }

  _handleProductSelected = (prod) => {
    this.setState({productSelected:prod})
  }

  render(){
    return (
      <div>
        <Header />
        <SectionIntroduction />
        <SectionSearchProducts onResults={this._handleResults}/>
        <ListProducts productToSearch={this.state.productToSearch} onResults={this._handleProductSelected}/>
      </div>
    )
  }
}