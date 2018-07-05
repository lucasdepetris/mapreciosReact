import React, { Component } from 'react';


export default class SectionSearchProducts extends Component{
  state = {
    lat:'',
    lng:'',
    producto:'',
    productos:[]
  }

  _handleChange = (e) => {
    
  }

  _handleSubmit = (e) => {
    
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
                    <input className="input is-medium" type="text" placeholder="Buscar Productos"/>
                </div>
            </div>
            <a className="button is-info">Buscar</a>
      </form>

      <div>

      </div>
    </div>
    )
  }
}
