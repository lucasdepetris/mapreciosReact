import React from 'react'

export const Header = () => (
    <div className="contHeader">
        <div className="contMaprecios">
            
                <img src={require("../assets/images/mapreciosLogo.png")} alt="maprecios"/>
                <strong>map</strong>recios
            
        </div>
        <div className="contImages">
            <div className="contBusca" data-aos="fade-right">
                <img src={require("../assets/images/GPS.png")} alt="gps"/>
                <span>Buscá</span>
            </div>
            <div className="contElegi" data-aos="fade-up"> 
                <img src={require("../assets/images/MANITO.png")} alt="elegir" />
                <span>Elegí</span>
            </div>
            <div className="contCompra" data-aos="fade-left">
                <img src={require("../assets/images/carrito.png")} alt="carrito" />
                <span>Comprá</span>
            </div>
        </div>
    </div>
)