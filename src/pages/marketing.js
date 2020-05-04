import React from 'react';
import { Helmet } from "react-helmet";

const Marketing = () => {
    return <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Das ist das Marketing</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Marketing</h1>
    </div>
};

export default Marketing;