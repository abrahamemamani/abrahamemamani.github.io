import React, { Component } from 'react';
import './App.scss';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Formation from './components/formation/Formation';
import Footer from './components/footer/Footer';

class App extends Component {
  getYear = () =>{
    return new Date().getFullYear();
  }
  render(){
    return (
      <div className="app-wrapper first-color">
        <Banner />
        <main>
          <About />
          <Portfolio />
          <Formation />
        </main>
        <Footer year={this.getYear()}/>
      </div>
    );
  }
}

export default App;
