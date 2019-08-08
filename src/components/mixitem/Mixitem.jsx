import React from 'react';
import './Mixitem.scss';

const Mixitem = ({ title, image, info, date, link, target }) => (
    <article className={`m-card mix ${target}`}>
        <a href={link} className="m-card__link" target="_blank" rel="noopener noreferrer">
            <figure className="m-card__img-wrapper">
                <img className="m-card__img" src={image} alt={title}/>
                <span className="m-card__date">{date}</span>
            </figure>
            <div className="m-card__body t-align-center">
                <span className="m-card__title">{title}</span>
                { info ? (
                    <>
                        <hr />
                        <span className="m-card__data">{info}</span>
                    </>
                ) : ''}
            </div>
        </a>
    </article>
);
 
export default Mixitem;