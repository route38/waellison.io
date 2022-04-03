import React from 'react';
import Resume from './Resume';
import Portfolio from './Portfolio';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends React.Component {
    render() {
        // TODO: Add content prop to portfolio component
        return (
            <React.StrictMode>
                <NavBar />

                <div className="container">
                    <Resume />
                    <Portfolio />
                </div>

                <Footer />
            </React.StrictMode>
        );
    }
}

export default App;
