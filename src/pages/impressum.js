import React from 'react';
import { Helmet } from 'react-helmet';

const Impressum = () => {
    return <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Das ist das Impressum</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Das ist das Impressum</h1>
    </div>
};

export default Impressum;