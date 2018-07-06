import React, { Component } from 'react';
import PropTypes from 'prop-types'


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
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item" aria-label="reply">
                        <span className="icon is-small">
                          <i className="fas fa-reply" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                          <i className="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a className="level-item" aria-label="like">
                        <span className="icon is-small">
                          <i className="fas fa-heart" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
              </div>
            </div>
      </div>
    )
  }
}