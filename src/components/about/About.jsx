import React, { Component } from 'react';
import Button from '../button/Button';
import './About.scss';
import Image from '../../img/about-me.png';

class About extends Component{
    render(){
        return(
			<section className="about-me space-section">
				<div className="container">
					<div className="g-col-2">
						<div className="about-me__img-wrapper">
							<figure className="t-align-right">
								<img className="about-me__img" src={Image} alt="Designed by Freepik" />
								<span className="about-me__img-ref">Diseñado por <a href="https://www.freepik.es/" className="about-me__img-link" target="_blank" rel="noopener noreferrer">Vectorpouch</a></span>
							</figure>
						</div>
						<div className="about-me__info-wrapper">
							<h2 className="about-me__title">Un poco de historia...</h2>
							<div className="about-me__info">
								<p>
									Hola! Mi nombre es <b>Abraham Mamani</b>, tengo 24 años y soy un apasionado por el aprendizaje,
									sobre todo cuando se trata de <strong>desarrollo web</strong>. <br />
									Actualmente me encuentro en busca de <strong>empleo</strong> como <b>Desarrollador Frontend</b>, 
									y aunque poseo solo medio año de experiencia laboral cuento con lo más 
									importante; motivación por <b>progresar</b>.
								</p>
								<p>
									Si bien me <strong>especializo</strong> en <strong>Front</strong> mi conocimiento abarca también
									el ámbito del <strong>Back</strong> (aunque no a un nivel alto). <br />Algunas de las <strong>tecnologías </strong>
                                    que manejo y con las que quisiera trabajar son: <strong>HTML</strong>,
									<strong> CSS (Sass)</strong>, <strong>JavaScript (jQuery, ReactJS)</strong>,
									<strong> Bootstrap</strong>, <strong>PHP (Laravel)</strong>, <strong>Git/Github</strong> y <strong>Gulp</strong>.
								</p>
							</div>
                            <Button />
						</div>
					</div>
				</div>
			</section>
        )
    }
}

export default About;