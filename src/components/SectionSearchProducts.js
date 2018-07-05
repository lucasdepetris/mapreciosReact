import React, { Component } from 'react';
import InputUbicacion from './InputUbicacion'
import ListProducts from './ListProducts'


export default class SectionSearchProducts extends Component{

  constructor(props) {
    super(props);
    this.lat= "";  // I declare the variable here
    this.lng= "";
    this.producto="";
  }

  state = {
    producto:{},
    productToSearchExist:false
  }

  _handleUbicacion = (lat,lng) => {
    this.lat = lat;
    this.lng = lng;
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    this.producto = e.target.Producto.value
    console.log(this.lat,this.lng,this.producto)
    this.setState({producto:{lat:this.lat,lng:this.lng,producto:this.producto},productToSearchExist:true})
  }

  render(){
    console.log(this.state.producto)
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
                      />
                </div>
            </div>
            <button className="button is-info">Buscar</button>
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
