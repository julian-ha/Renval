import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return <section class="bgimage text-center flex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center align-align-middle display-block text-white">
         <h1 className="h1">Neue digitale Technologien</h1>
          <p className="h5">für Ihr Unternehmen</p>
          <Button variant="primary">Unsere Angebote</Button>
        </div>
      </div>
    </div>
  </section>
}

const Mehrwerte = () => {
    return <section class="section" id="leistungen">
    <div class="container-fluid">
        <div className="row">
            <div className="col">
                
                <h2 className="h2 heading">Wir ermöglichen digitalen Fortschritt</h2>
                
                <p>
                Wir realisieren für ihr Unternehmen digitale Lösungen und Prozesse zur Optimierung der Kommunikation zu ihren Kunden und Interessenten. <br />
                Durch neue Schnittstellen und Technologien ist ihr Unternehmen der Digitalisierung wieder einen Schritt näher.
                </p>
                <Link className="text-link">Kostenlose Beratung  
                <span class="material-icons">
                    arrow_forward
                </span>
                </Link>
                <br />
                <br />
                
            </div>
        </div>
    <div class="row">
    <div class="col-lg-3">
    <div class="box">
    <span class="material-icons box-icon">
    question_answer
    </span>
    <p class="box-heading">
    Consulting
    </p>
    <p>
    Wir beraten Sie in den Bereichen Internetauftritt (Webseiten,
    SocialMedia). Analysieren neue Möglichkeiten und nicht genutzte
    Potenziale.
    </p>
    </div>
    </div>
    <div class="col-lg-3">
    <div class="box">
    <span class="material-icons box-icon" >
    timeline
    </span>
    <p class="box-heading">
    Umsetzung
    </p>
    <p>
    Wir kümmern uns um die Umsetzung von Webseiten oder Marketing
    Strategien sowie die Erstellung von intelligenten Webanwendungen
    und Apps.
    </p>
    </div>
    </div>
    <div class="col-lg-3">
    <div class="box">
    <span class="material-icons box-icon" >
    code
    </span>
    <p class="box-heading">
    Betreuung
    </p>
    <p>
    Wir betreuen ihre Webseite und kümmern uns um
    Suchmaschinenoptimierung und Änderungswünsche sowie Technische
    Korrektheit und Fehlerfreiheit.
    </p>
    </div>
    </div>
    <div class="col-lg-3">
    <div class="box">
    <span class="material-icons box-icon icon" >
    fingerprint
    </span>
    <p class="box-heading">
    Betrieb
    </p>
    <p>
    Wir kümmern uns um performantes und sicheres Hosting ihrer
    Webseite sowie die Verwaltung ihrer E-Mail Adressen und
    Einrichtung von Domains.
    </p>
    </div>
    </div>
    </div>
    </div>
    </section>
}

const Home = () => {
    return <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Hallo Daniel</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="container-fluid">
       
        <Header />
        <Mehrwerte />
    </div>
    </div>
};

export default Home;