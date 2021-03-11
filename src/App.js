
import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import {HashRouter as Router ,Route,Switch} from 'react-router-dom';
import Addcontact from './components/contacts/Addcontact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './Context';

import './App.css';


class App extends Component {
  render(){
  return (
    <Provider>
      <Router>
      <div className="App">
        <Header  branding="Contact Manager 1"/>
       <div className='container'>
         <Switch>
           <Route exact path='/' component={Contacts} /> 
           <Route exact path='/about' component={About}/>
           <Route exact path='/add/contact' component={Addcontact}/>
           <Route exact path='/edit/contact/:id' component={EditContact}/>
           <Route exact path='/test' component={Test}/>
           <Route  component={NotFound}/>
           
         </Switch>
       </div>
      </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
