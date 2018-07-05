import React, { Component } from 'react';
import Productos from '../mocks/productos.json'


export default class ListProducts extends Component{
  state = {
    productos:[]
  }

  _handleChange = (e) => {
    
  }

  _handleSubmit = (e) => {
    
  }

  render(){
    const productos = Productos.productos
    return(
          <div className = 'ProductList'>
            {
              productos.map(prod => {
                return(
                  <div key = {prod.id} className = 'ProductList-item'>
                     <p>{prod.nombre}</p>
                  </div>
                )
              })
            }
          </div>
    )
  }
}