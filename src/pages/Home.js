import React, { Component } from 'react';
import {Header} from '../components/Header'
import {SectionIntroduction} from '../components/SectionIntroduction'
import SectionSearchProducts from '../components/SectionSearchProducts'
import ListProducts from '../components/ListProducts'

export default class Home extends Component{
  

  render(){
    return (
      <div>
        <Header />
        <SectionIntroduction />
        <SectionSearchProducts/>
        <ListProducts/>
      </div>
    )
  }
}