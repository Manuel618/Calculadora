import React from "react";
import lbmCodingLogo from '../imagenes/UTD.png';
import '../App.css';


const Logo = (props) => (
    <div className='UTD-logo-contenedor'>
        <img 
            src={lbmCodingLogo}
            className='UTD-logo'
            alt='Logo de UTD'
        />
        {props.imgLogo}

    </div>

);


export default Logo;