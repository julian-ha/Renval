import React from 'react';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbars from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

//Pages
import Home from './pages/Home';
import Leistungen from './pages/leistungen';
import AboutUs from './pages/aboutus';
import Marketing from './pages/marketing';
import Datenschutzerklaerung from './pages/datenschutzerklaerung';
import Impressum from './pages/impressum';
import Error from './pages/error';

function App() {
  return (
    <React.Fragment>
      <Router>
      <div>
      <Navbars />
        

        <Switch>
          <Route exact path='/' component= {Home}/>
          <Route exact path='/aboutus' component= {AboutUs}/>
          <Route exact path='/digitale-leistungen' component={Leistungen}/>
          <Route exact path='/marketing' component={Marketing}/>
          <Route exact path='/datenschutzerklaerung' component={Datenschutzerklaerung}/>
          <Route exact path='/impressum' component={Impressum}/>
          <Route component={Error}/>
        </Switch>

        <Footer />
      </div>

        
      </Router>
    </React.Fragment>
  );
}

export default App;
