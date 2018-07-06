import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class DetailProductSelected extends Component{
  
  render(){
    const {producto} = this.props
    return(
      <div >
            <div>
              <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <img src={"https://imagenes.preciosclaros.gob.ar/productos/"+producto.id+".jpg"} alt={producto.nombre}/>
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{producto.marca}</strong> <small>{producto.presentacion}</small>
                      <br></br>
                      {producto.nombre}
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" aria-label="reply">
                        <span class="icon is-small">
                          <i class="fas fa-reply" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="retweet">
                        <span class="icon is-small">
                          <i class="fas fa-retweet" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a class="level-item" aria-label="like">
                        <span class="icon is-small">
                          <i class="fas fa-heart" aria-hidden="true"></i>
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