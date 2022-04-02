import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Colophon from './Colophon';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends React.Component {
    render() {
        // TODO: Add content prop to portfolio component
        return (
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/colophon" element={<Colophon />} />
                </Routes>
                <Footer />
            </Router>
        );
    }
}

export default App;
