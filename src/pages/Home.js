import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Hallo Daniel</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Startseite</h1>
    </div>
};

export default Home;