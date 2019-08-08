import React from 'react';
import './Footer.scss';

const Footer = ({year}) => (
    <footer className="app-footer">
        <div className="container">
            <div className="g-col-4">
                <div>
                    <h3 className="app-footer__title">Reflexión</h3>
                    <p>"Siempre habrá algún premio para todo aquel que insista."</p>
                </div>
                <div>
                    <h3 className="app-footer__title">Contacto</h3>
                    <ul className="app-footer__list">
                        <li className="app-footer__list-item">
                            <span className="is-icon t-cell fas fa-envelope"></span>
                            <span className="t-cell">abraham.e.mamani@gmail.com</span>
                        </li>
                        <li className="app-footer__list-item">
                            <span className="is-icon t-cell fas fa-mobile-alt"></span>
                            <span className="t-cell">(011)-1557177548</span>
                        </li>
                        <li className="app-footer__list-item">
                            <span className="is-icon t-cell fas fa-map-marker-alt"></span>
                            <span className="t-cell">Garín, GBA Norte, Argentina.</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="app-footer__title">Redes sociales</h3>
                    <ul className="app-footer__group d-flex">
                        <li className="app-footer__group-item">
                            <a href="https://www.linkedin.com/in/abraham-mamani-2a3571142/" className="app-footer__group-link" target="_blank" rel="noopener noreferrer">
                                <span className="is-icon fab fa-linkedin"></span>
                            </a>
                        </li>
                        <li className="app-footer__group-item">
                            <a href="https://github.com/abrahamemamani" className="app-footer__group-link" target="_blank" rel="noopener noreferrer">
                                <span className="is-icon fab fa-github-square"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="app-footer__bar-bottom">
            <div className="container">
                <span className="app-footer__copy">
                    &copy; { year }. Todos los derechos reservados | Diseñado por Abraham Mamani.
                </span>
            </div>
        </div>
    </footer>
);
 
export default Footer;