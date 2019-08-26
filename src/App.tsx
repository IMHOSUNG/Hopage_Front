import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './component/navbar/nav';
import Header from './component/header/header';
import Card from './component/body/PostCard/card';
import Me from './component/body/aboutme/aboutme';
import Contact from './component/body/contactme/contactme';

const App: React.FC = () => {

  //nav State
  //Category List : Array<String>
  //Category Url : Array<String>

  return (
    <div className="App"> 
            <Router>
              <Nav></Nav>
              <Header></Header>
              <Switch>
                <Route exact path="/" component={Card} />
                <Route path="/about" component={Me} />
                <Route path="/users" component={Contact} />
              </Switch>
            </Router>
    </div>
  );
}

export default App;
