import React, { Component } from 'react';
import mixitup from 'mixitup';
import mixitems from './load-mixitems';
import Mixitem from '../mixitem/Mixitem';
import './Portfolio.scss';
import '../mixitup/Mixitup.scss';

class Portfolio extends Component {
    state = {
        mixitems : []
    }

    componentDidMount(){
        this.setState({
            mixitems : mixitems
        });
    }
    componentDidUpdate(){
        const config = {
            selectors: {
                target: '.mix'
            },
            animation: {
                enable : true,
                duration: 500
            }
        };
        // eslint-disable-next-line
        const mixer = new mixitup('.mixitup', config);
    }
    render() {
        const mixitems = this.state.mixitems;
        return (
			<section className="my-portfolio space-section">
				<div className="container">
					<h2 className="app-title">Mi portafolio</h2>
                    <div className="mixitup-controls d-flex justify-content-center flex-wrap">
						<button type="button" className="control" data-filter="all">Todos</button>
						<button type="button" className="control" data-filter=".exp">Laboral</button>
						<button type="button" className="control" data-filter=".app">Aplicaciones</button>
						<button type="button" className="control" data-filter=".tmp">Templates</button>
					</div>
					<div className="mixitup">
                        { mixitems.map((mixitem, key) => (
                            <Mixitem key     = {key}
                                     title   = { mixitem.title }
                                     image   = { mixitem.image }
                                     info    = { mixitem.info }
                                     date    = { mixitem.date }
                                     link    = { mixitem.link }
                                     target  = { mixitem.target } />
                        ))}
						<div className="gap"></div>
						<div className="gap"></div>
					</div>
				</div>
			</section>
        );
    }
}
 
export default Portfolio;