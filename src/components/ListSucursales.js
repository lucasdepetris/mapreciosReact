import React, { Component } from 'react';
import Comercio from './Comercio';

export default class ListSucursales extends Component{
    constructor(props) {
      super(props);
      this.productoSelected = '';
  
    }
  
    state = {
      producto:{},
      productos:[],
      sucursales:[],
      isLoading:true
    }
  
    componentDidMount(){
      console.log('1. componentDidMount')
      
    }
    
  
    render(){
      
      if(this.state.isLoading){
        return <div>Loading..</div>
      }
  
      return(
            <div>
              <div className = 'ProductList'>
                {
                  this.props.sucursales.map(sucursal => {
                    return(
                      <div 
                        key = {sucursal.id} 
                        className = 'ProductList-item' 
                        >
  
                        <Comercio 
                            distanciaDescripcion={sucursal.distanciaDescripcion} 
                            banderaDescripcion={sucursal.banderaDescripcion} 
                            localidad = {sucursal.localidad}
                            direccion = {sucursal.direccion}
                            precioLista = {sucursal.preciosProducto.precioLista}
                            comercioId = {sucursal.comercioId}
                            banderaId = {sucursal.banderaId}
                            />
  
                      </div>
                    )
                  })
                }
              </div>
            </div>
      )
    }
  }