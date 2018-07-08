import React, { Component } from 'react';
import InputUbicacion from './InputUbicacion'
import ListProducts from './ListProducts'


export default class SectionSearchProducts extends Component{

  constructor(props){
    super()
    this.inputProducto = ''
  }
  state = { 
    producto: "",
    lat:"",
    lng:"",
    productToSearchExist: false,
    hasError:false
  }

  _handleUbicacion = (lati,lngi) => {
    
    this.setState({ lat:lati,lng:lngi })
  }

  _handleChange = (e) => {
    this.setState({producto:e.target.value,productToSearchExist:false})
  }
  _handleSubmit = (e) => {
    e.preventDefault()
    if(e.target.Producto.value !== '')
    {
      this.setState({producto:e.target.Producto.value,lat:this.state.lat,lng:this.state.lng,productToSearchExist:true})
      console.log(this.state)
    }else{
      this.setState({hasError:true})
    }
    
  }
  _handleModal = (e) =>{
    this.setState({hasError:false})
  }

  render(){
    
    return(
    <div className = "Search-Products">
      {
      this.state.hasError ?
      <div className="modal is-active">
          <div className="modal-background" onClick={this._handleModal}></div>
          <div className="modal-content">
          <article className="message is-danger">
            <div className="message-header">
              <p>Ha ocurrido un problema</p>
              <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                Debes Ingresar un producto a buscar.
            </div>
          </article>
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
      </div>:null
      }
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
              //disabled={!this.state.producto || !this.state.lat } 
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
