import React, { Component } from 'react';
import Productos from '../mocks/productos.json'
import ProductosDetalles from '../mocks/productoById.json'
import Product from '../components/Product'
import ListSucursales from '../components/ListSucursales'
import DetailProduct from '../components/DetailProductSelected'
import {SectionDetailProduct} from '../components/SectionDetailProduct'
import {SectionProductosEncontrados} from '../components/SectionProductosEncontrados'
import {ComerciosCercanos} from '../components/ComerciosCercanos'
import scrollToComponent from 'react-scroll-to-component';
import {SectionProductsNotFound} from '../components/SectionProductsNotFound'

import axios from 'axios';

var reqCancelRequest = axios.CancelToken.source();

export default class ListProducts extends Component{
  
  state = {
    producto:{},
    productos:[],
    sucursales:[],
    isLoading:true
  }

  componentDidMount(){
    console.log('1. componentDidMount')
    reqCancelRequest = axios.CancelToken.source();
    console.log(this.props.productToSearch)
    this._getProductosByString(this.props.productToSearch)
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.productToSearch.producto !== this.props.productToSearch.producto 
        || nextProps.productToSearch.lat !== this.props.productToSearch.lat 
        || nextProps.productToSearch.lng !== this.props.productToSearch.lng ){

        console.log('son distintos')
        if(nextProps.productToSearch.clickBuscar){
          this.setState({isLoading:true})
          this._getProductosByString(nextProps.productToSearch)
        }
        
      }
    }

  _getProductosByString = (producto) => {
    var element = document.getElementsByName('loading')
      setTimeout(function () {
      //window.scrollTo(element[0].offsetLeft, element[0].offsetTop-200);
      scrollToComponent(element[0], {
          offset: 1000,
          align: 'top',
          duration: 1500
        });
      },100);

    axios.get(`https://d735s5r2zljbo.cloudfront.net/prod/productos?string=${producto.producto}&lat=${producto.lat}&lng=${producto.lng}&limit=10`, {
      cancelToken: reqCancelRequest.token
    })
    .then(response => {
      console.log(response)
      this.setState({productos:response.data.productos,producto:{},sucursales:[],isLoading:false})
      var element = document.getElementsByName('productos')
      setTimeout(function () {
      //window.scrollTo(element[0].offsetLeft, element[0].offsetTop-200);
      scrollToComponent(element[0], {
          offset: 0,
          align: 'top',
          duration: 1500
        });
      },2);
    })
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      } else {
        // handle error
        console.log(thrown)
        this.setState({productos:[],producto:{},sucursales:[],isLoading:false})
      }
      
    }); 
  }

  _handleClickProduct = (prodId) => {
    console.log(prodId)
    this.productoSelected = prodId
    this.setState({isLoading:true})
    this._getProductoDetallesById(prodId)
  }

  _getProductoDetallesById = (id) => {
    var element = document.getElementsByName('loading')
      setTimeout(function () {
      //window.scrollTo(element[0].offsetLeft, element[0].offsetTop-200);
      scrollToComponent(element[0], {
          offset: 1000,
          align: 'top',
          duration: 1500
        });
      },100);

    axios.get(`https://d735s5r2zljbo.cloudfront.net/prod/producto?id_producto=${id}&lat=${this.props.productToSearch.lat}&lng=${this.props.productToSearch.lng}&limit=10`, {
      cancelToken: reqCancelRequest.token
    })
    .then(response => {
      console.log(response)
      this.setState({producto:response.data.producto,sucursales:response.data.sucursales,isLoading:false})
      var element = document.getElementsByName('detailProduct')
      console.log(element)
      setTimeout(function () {
        scrollToComponent(element[0], {
          offset: 0,
          align: 'top',
          duration: 1500
        });
      },2);
    })
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
      } else {
        // handle error
        console.log(thrown)
        this.setState({productos:[],producto:{},sucursales:[],isLoading:false})
      }
    });
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')

    reqCancelRequest.cancel('Operation canceled by the user.');
    reqCancelRequest = null
    clearTimeout()
  }

  render(){
    const {productos,producto,sucursales} = this.state
    
    if(this.state.isLoading){
      return (
              <div name="loading">
                <img
                      onError={(e)=>{e.target.src=require("../assets/images/imageNotFound.jpg")}}
                      src={require("../assets/images/cartShopping1.gif")} 
                      alt='loading'
                      className="img-loading"
                      />
              </div>
            )
    }

    return(
          productos.length > 1 ?
          <div name="productos">
            <SectionProductosEncontrados />
            <div className = 'ProductList'>
              {
                productos.map(prod => {
                  return(
                    <div 
                      key = {prod.id} 
                      className = 'ProductList-item circleBase' 
                      onClick={() => this._handleClickProduct(prod.id)}>

                      <Product id={prod.id} nombre={prod.nombre} marca = {prod.marca}/>

                    </div>
                  )
                })
              }
            </div>
            {
              producto.id ?
              <div name="detailProduct">
              <SectionDetailProduct />
              <DetailProduct producto={producto}/>
              </div>
              :null
            }
            {
              sucursales.length > 1 ?
              <div>
              <ComerciosCercanos />
              <ListSucursales sucursales={sucursales} />
              </div>
              :null
            }
          </div>
          :<div name="productos">
              <SectionProductsNotFound />
              <div className="ProductList contNotFound">
                <button className="button is-info retry">Reintentar</button>
              </div>
          </div>
    )
  }
}