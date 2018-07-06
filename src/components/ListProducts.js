import React, { Component } from 'react';
import Productos from '../mocks/productos.json'
import ProductosDetalles from '../mocks/productoById.json'
import Product from '../components/Comercio'
import ListSucursales from '../components/ListSucursales'


export default class ListProducts extends Component{
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
    console.log(this.props.productToSearch)
    this._getProductosByString(this.props.productToSearch)
  }
  _getProductosByString = (producto) => {
    this.setState({productos:Productos.productos,isLoading:false})
  }

  _handleClickProduct = (prodId) => {
    console.log(prodId)
    this.productoSelected = prodId
    this._getProductoDetallesById(prodId)
  }

  _getProductoDetallesById = (id) => {
    this.setState({producto:ProductosDetalles.producto,sucursales:ProductosDetalles.sucursales})
  }

  render(){
    const {productos,producto,sucursales} = this.state
    
    if(this.state.isLoading){
      return <div>Loading..</div>
    }

    return(
          <div>
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
            <div className="separador-Productos-DetalleProducto"></div>
            {
              sucursales.length > 1 ?
              <ListSucursales sucursales={sucursales} />
              :null
            }
          </div>
    )
  }
}