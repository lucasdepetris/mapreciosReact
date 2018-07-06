import React, { Component } from 'react';
import InputUbicacion from './InputUbicacion'
import ListProducts from './ListProducts'


export default class SectionSearchProducts extends Component{

  state = { producto: "",lat:"",lng:"", productToSearchExist: false }

  _handleUbicacion = (lati,lngi) => {
    
    this.setState({ lat:lati,lng:lngi })
  }

  _handleChange = (e) => {
    this.setState({producto:e.target.value})
  }
  _handleSubmit = (e) => {
    e.preventDefault()
    this.setState({producto:e.target.Producto.value,lat:this.state.lat,lng:this.state.lng,productToSearchExist:true})
    console.log(this.state)
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
                    <input  
                      className="input is-medium" 
                      type="text" 
                      placeholder="Buscar Productos"
                      name="Producto"
                      onChange={this._handleChange}
                      />
                </div>
            </div>
            <button  
              disabled={!this.state.producto || !this.state.lat } 
              className="button is-info">
              Buscar
            </button>
      </form>

      {this.state.productToSearchExist ?
        <div>
        <ListProducts productToSearch={this.state}/>
        </div>
      : null
      }
    </div>
    )
  }
}
