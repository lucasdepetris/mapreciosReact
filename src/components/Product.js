import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class Product extends Component{
  static propTypes = {
    id:PropTypes.string,
    marca:PropTypes.string,
    nombre:PropTypes.string
  }

  render(){
    const {id,marca,nombre} = this.props
    return(
      <div >
          <div className="card-content">
              <div className="media">
                  <div className="media-content">
                    <figure className="image is-128x128">
                    <img src={"https://imagenes.preciosclaros.gob.ar/productos/"+id+".jpg"} alt={nombre}/>
                    </figure>
                    <p className="title is-6">{nombre}</p>
                    <p className="subtitle is-6">{marca}</p>
                    <p className="subtitle is-6">{id}</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}