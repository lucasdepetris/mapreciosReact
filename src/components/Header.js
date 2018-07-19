import React from 'react'

export const Header = () => (
    <div className="contHeader">
        <div className="contImages">
            <div className="contBusca">
                <img src={require("../assets/images/GPS.png")} alt="gps"/>
                <span>Buscá</span>
            </div>
            <div className="contElegi"> 
                <img src={require("../assets/images/MANITO.png")} alt="elegir" />
                <span>Elegí</span>
            </div>
            <div className="contCompra">
                <img src={require("../assets/images/carrito.png")} alt="carrito" />
                <span>Comprá</span>
            </div>
        </div>
    </div>
)