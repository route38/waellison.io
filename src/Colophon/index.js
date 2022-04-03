import "./index.css";

const Colophon = () => {
    return (
        <div className="container">
            <p>
                This site was made using React and plain CSS.  It was written on a 2021
                MacBook Pro laptop with the M1 Pro processor using Visual Studio Code,
                and the site was tested in the latest versions of Google Chrome, Apple
                Safari, and Mozilla Firefox.
            </p>
            <p>
                The site is hosted on Azure CDN with DNS hosted by Azure and domain
                registration through Gandi.  My much more traditional blog is hosted
                at <a href='https://rt38.net'>Route 38</a> via an old-fashioned virtual
                private server.
            </p>
        </div>
    );
}

export default Colophon;
