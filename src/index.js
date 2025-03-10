import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "remixicon/fonts/remixicon.css";
import Header from './components/Header';
import App from './components/App';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

    <section id='home'>  
        <App />
    </section>

    <section id='about'>
      <About />
    </section>

    <section id='skills'>
      <Skill />
    </section>
    
    <section id='projects'>
      <Projects />
    </section>
    
    <section id='contact'>
      <Contact />
    </section>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
