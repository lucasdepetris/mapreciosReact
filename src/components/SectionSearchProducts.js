import React, { Component } from 'react';


export default class SectionSearchProducts extends Component{
  state = {
    lat:'',
    lng:'',
    producto:'',
    productos:[]
  }

  _handleChange = (e) => {
    this.setState({producto:e.target.value})
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const {producto,lat,lng} = this.state
    this.props.onResults(producto,2,lng)
  }

  render(){
    return(
    <div className = "Search-Products">
      <form onSubmit = {this._handleSubmit}>
            <div className="field">
                <div className="control">
                    <input className="input is-medium" type="text" placeholder="Ingresa tu ubicacion.."/>
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
