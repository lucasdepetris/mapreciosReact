import React, { Component } from 'react';
import Productos from '../mocks/productos.json'
import Product from '../components/Product'


export default class ListProducts extends Component{
  state = {
    productos:[]
  }

  _handleClickProduct = (prodId) => {
    console.log(prodId)
    this.props.onResults(prodId)
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
                  <div 
                    key = {prod.id} 
                    className = 'ProductList-item' 
                    onClick={() => this._handleClickProduct(prod.id)}>

                     <Product id={prod.id} nombre={prod.nombre} marca = {prod.marca}/>

                  </div>
                )
              })
            }
          </div>
    )
  }
}