import React, { Component } from 'react';
import InputUbicacion from './InputUbicacion'
import ListProducts from './ListProducts'


export default class SectionSearchProducts extends Component{

  constructor(props) {
    super(props);
    this.lat = "";
    this.lng = "";

    this.state = {
      producto:{},
      productToSearchExist:false
    }
  }

  _handleUbicacion = (lat,lng) => {
    this.lat = lat;
    this.lng = lng;
  }

  _handleChange = (e) => {
    this.setState({producto:{producto:e.target.value}})
  }
  _handleSubmit = (e) => {
    e.preventDefault()
    this.setState({producto:{lat:this.lat,lng:this.lng,producto:e.target.Producto.value},productToSearchExist:true})
    console.log(this.state.producto)
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
              disabled={!this.state.producto.producto && !this.state.producto.lat } 
              className="button is-info">
              Buscar
            </button>
      </form>

      {this.state.productToSearchExist ?
        <div>
        <ListProducts productToSearch={this.state.producto}/>
        </div>
      : null
      }
    </div>
    )
  }
}
