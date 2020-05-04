import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return <section class="section bgimage flex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12  text-center display-block text-white">
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

const Textpassage = () => {
    return <section class="section">
    <div class="container-fluid">
    <div class="row align-middle">
    <div class="col-lg-6 is-center ">
    <h3 class="title">
    Wir ermöglichen digitale Geschäftsmodelle und Prozesse
    </h3>
    <p>
    Wir analysieren gemeinsam mit ihnen die aktuelle Situation in
    ihrem Unternehmen. Darauf aufbauend erstellen wir neue Konzepte
    mit digitalen Lösungsansätzen und Technologien im Bereich Web.
    <br />
    <br />
    Die Umsetzung erfolgt direkt von Enval. Daraus ergibt sich der
    Vorteil, das Planung, Gestaltung und Realisation aus einer Hand
    hervor gehen.
    <br />
    <br />
    Langfristig werden neue Lösungen überwacht und basierend auf
    monitorings werden kontinuirlich Verbesserungen vorgenommen.
    </p>
    <br />
    <a href="" class="text-link">
    <div class="icons-inline">
    <span class="button-text">
    Kostenlose Beratung
    </span>
    <span class="material-icons">
    arrow_forward
    </span>
    </div>
    </a>
    </div>
    <div class="col-lg-6">
    <img  className="col-img" src="https://images.unsplash.com/photo-1540670492524-0eef68c090bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Bild mit Tablet einer Enval Besprechung" />
    <div class="bild-unterschrift-kachel-rechts" id="color-green">
    <span>Digitale Lösungen für Kundenbeziehungen</span>
    </div>
    </div>
    </div>
    </div>
    </section>
}

const Textpassage2 = () => {
    return <section class="section">
    <div class="container-fluid">
    <div class="row">
    <div class="col-lg-6">
    <img className="col-img" src="https://images.unsplash.com/photo-1540670492524-0eef68c090bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Bild eines Enval meetings" />
    <div class="bild-unterschrift-kachel-links" id="color-green" >
    <span>Kunden Gewinnung durch Suchmaschinen Optimierung</span>
    </div>
    </div>
    <div class="col-lg-6 is-center">
    <h4 class="title">Fortschrittliche Technologien im Web</h4>
    <p>
    Wir erstellen Webseiten basierend auf modernen Technologien. Egal
    ob ihr Unternehmen zu repräsentieren oder um spezielle Zielgruppen
    abzudecken.
    <br />
    <br />
    SEO beginnt bereits bei der Programmierung von Hompages. Der
    Aufbau der Seiten wird nach einem Strengen Plan erstellt, um
    später bestmögliche Ergebnisse in Suchmaschinen zu erreichen.
    </p>
    <br />
    <a href="" class="text-link">
    <div class="icons-inline">
    <span class="button-text">
    Über unsere Technologien
    </span>
    <span class="material-icons">
    arrow_forward
    </span>
    </div>
    </a>
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
        <Textpassage />
        <Textpassage2 />
    </div>
    </div>
};

export default Home;