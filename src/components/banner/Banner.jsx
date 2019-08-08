import React, { Component } from 'react';
import './Banner.scss';
import Profile from '../../img/profile.jpg'
import Button from '../button/Button';

class Banner extends Component{
    render(){
        return (
            <header>
            <div className="app-banner">
                <div className="app-banner-container d-flex justify-content-center align-items-center f-column">
                    <img src={Profile} className="app-banner__img" alt="Imágen de perfil"/>
                    <h1 className="app-banner__title">
                        $_Abraham
                        <span className="app-banner__title--color">_Mamani;</span>
                    </h1>

                    <div className="app-banner__info">
                        <span className="d-block">
                            Desarrollador Frontend
                        </span>
                        <span className="d-block">
                            HTML, CSS, Bootstrap, JavaScript (jQuery, ReactJS)
                        </span>
                        <span className="d-block">
                            PHP (Laravel), MySQL, Git/GitHub
                        </span>
                        <span className="d-block">
                            Diseño web responsive (mobile first)
                        </span>
                        <span className="d-block">
                            Programación orientada a objetos y componentes
                        </span>
                    </div>
                    <Button/>
                </div>
            </div>
            </header>
        )
    }
}

export default Banner;