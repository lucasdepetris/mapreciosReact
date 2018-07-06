import React, { Component } from 'react';

export default class DetailProductSelected extends Component{
  
  render(){
    const {producto} = this.props
    return(
      <div >
            <div>
              <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src={"https://imagenes.preciosclaros.gob.ar/productos/"+producto.id+".jpg"} alt={producto.nombre}/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{producto.marca}</strong> <small>{producto.presentacion}</small>
                      <br></br>
                      {producto.nombre}
                    </p>
                  </div>
                </div>
              </article>
              </div>
            </div>
      </div>
    )
  }
}