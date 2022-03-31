import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Colophon from './Colophon';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/colophon" element={<Colophon />} />
    </Routes>

    <Footer />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
