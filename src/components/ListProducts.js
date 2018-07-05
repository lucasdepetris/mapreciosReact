import React, { Component } from 'react';
import Productos from '../mocks/productos.json'
import Product from '../components/Product'


export default class ListProducts extends Component{
  state = {
    productos:[]
  }

  _handleChange = (e) => {
    
  }

  _handleSubmit = (e) => {
    
  }

  render(){
    console.log(this.props.productToSearch)
    const productos = Productos.productos
    return(
          <div className = 'ProductList'>
            {
              productos.map(prod => {
                return(
                  <div key = {prod.id} className = 'ProductList-item'>
                     <Product id={prod.id} nombre={prod.nombre} marca = {prod.marca}/>
                  </div>
                )
              })
            }
          </div>
    )
  }
}