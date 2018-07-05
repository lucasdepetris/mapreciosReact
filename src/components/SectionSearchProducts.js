import React, { Component } from 'react';
import InputUbicacion from './InputUbicacion'


export default class SectionSearchProducts extends Component{
  state = {
    lat:'',
    lng:'',
    producto:'',
    productos:[]
  }

  _handleUbicacion = (lat,lng) => {
    this.setState({lat:lat,lng:lng})
  }

  _handleChange = (e) => {
    this.setState({producto:e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const {producto,lat,lng} = this.state
    this.props.onResults(producto,lat,lng)
  }

  render(){
    return(
    <div className = "Search-Products">
      <form onSubmit = {this._handleSubmit}>
            <div className="field">
                <div className="control">
                    <InputUbicacion onResults={this._handleUbicacion} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input onChange={this._handleChange} className="input is-medium" type="text" placeholder="Buscar Productos"/>
                </div>
            </div>
            <button className="button is-info">Buscar</button>
      </form>

      <div>

      </div>
    </div>
    )
  }
}
