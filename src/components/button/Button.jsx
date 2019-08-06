import React, { Component } from 'react';
import './Button.scss';
import Curriculum from '../../pdf/CV Abraham Mamani - Frontend Developer.pdf';

class Button extends Component{
    render(){
        return(
            <a href={Curriculum} className="m-btn btn-curve" download>Descargar CV</a>
        )
    }
}

export default Button;