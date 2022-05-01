import React from 'react';
import { Link } from 'react-router-dom';

class FrontPage extends React.Component {
    render() {
        return (
            <div className="container" id="frontPage">
                <h1>Hi.  I'm William.</h1>
                <p>
                    I make fast, dumb machines do slow, smart things as quickly as possible.
                </p>
                <p>
                    <Link to="/resume" className="ctaButton">
                        See what I can do.
                    </Link>
                </p>
            </div>
        );
    }
}

export default FrontPage;
