import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import NavBar from '../NavBar';
import Footer from '../Footer';

class App extends React.Component {
    render() {
        return (
            <Resume/>
        );
    }
}

export default App;
