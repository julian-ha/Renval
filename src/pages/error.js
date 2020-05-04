import React from 'react';
import { Helmet } from "react-helmet";

const Error = () => {
    return <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Auf der Seite ist ein Fehler aufgetreten</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Error 404</h1>
    </div>
};

export default Error;