import React from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>About us</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>About us</h1>
    </div>
};

export default AboutUs;