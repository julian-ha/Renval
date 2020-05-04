import React from 'react';
import { Helmet } from 'react-helmet';

const Datenschutzerklaerung = () => {
    return <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Das ist die Datenschutzerklaerung</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Das ist die Datenschutzerklaerung</h1>
    </div>
};

export default Datenschutzerklaerung;