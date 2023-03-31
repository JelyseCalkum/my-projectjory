import React from 'react';
import { Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
      <Footer />
    </div>
  );
}

export default App;