import React, { Component } from 'react';
import {Header} from '../components/Header'
import {SectionIntroduction} from '../components/SectionIntroduction'
import SectionSearchProducts from '../components/SectionSearchProducts'
import {Footer} from '../components/Footer'

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

  render(){
    return (
      <div>
        <Header />
        <SectionSearchProducts />
        <Footer />
      </div>
    )
  }
}