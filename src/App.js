import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "./context"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import Header from './components/layout/Header'
import About from './components/pages/About'
import NotFound from './components/pages/404'
import Test from './components/test/Test'


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/edit/:id" component={EditContact} />
              <Route component={NotFound} />
           
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
