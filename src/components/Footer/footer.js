import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (   
            <div className="footer">
            <section className="section">
                <div className="container">
                    <h2 className="title has-text-weight-bold">Kontaktieren Sie uns</h2>
                    <p className="subtitle">
                        Erhalten Sie Ihr individuelles Angebot
                    </p>
                    <ul>
                        <li><i className="lni lni-phone"></i> <b>Telefon:</b> +49 123456789</li>
                        <li>
                            <i className="lni lni-envelope"></i> <b>Mail:</b> info@enval.de
                        </li>
                    </ul>
                    <br />
                    <p className="title is-6">Link-Verzeichnis</p>
                    <ul>
                        <li>
                            <Link to="/impressum">Impressum</Link>
                        </li>
                        <li>
                            <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
                        </li>
                       
                    </ul>
                </div>
            </section>
        </div>
        )
    }
}

export default Footer