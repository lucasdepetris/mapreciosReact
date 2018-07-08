import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class Comercio extends Component{
  static propTypes = {
    distanciaDescripcion:PropTypes.string,
    banderaDescripcion:PropTypes.string,
    localidad:PropTypes.string,
    direccion:PropTypes.string,
    precioLista:PropTypes.number
  }
  
  render(){
    const {distanciaDescripcion,banderaDescripcion,localidad,direccion,precioLista,comercioId,banderaId} = this.props
    return(
      <div >
          <div className="card-content">
              <div className="media">
                  <div className="media-content">
                    <figure className="image is-128x128">
                    <img 
                      onError={(e)=>{e.target.src=require("../assets/images/imageNotFound.jpg")}}
                      src={"https://imagenes.preciosclaros.gob.ar/comercios/"+comercioId+"-"+banderaId+".jpg"} 
                      alt={banderaDescripcion}
                      className="img-comercio"
                      />
                    </figure>
                    {
                      precioLista !== '' ?
                      <p className="title is-4">{precioLista}</p>
                      :<p className="title is-6">Precio no disponible.</p>
                    }
                    <p className="subtitle is-6">{distanciaDescripcion}</p>
                    <p className="subtitle is-6">{banderaDescripcion}</p>
                    <p className="subtitle is-6">{localidad}</p>
                    <p className="subtitle is-6">{direccion}</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}