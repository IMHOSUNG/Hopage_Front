import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import Nav from './component/navbar/nav';
import Header from './component/header/header';
import Card from './component/body/PostCard/card';
import Me from './component/body/aboutme/aboutme';

const App: React.FC = () => {

  const [show, setShow] = useState(false);
  const [curUrl ,setCurUrl] = useState("/");

  const we_open = () => {
    setShow(!show);
  }

  const getUrl = (Url:string) => {
    setCurUrl(Url);
  }

  return (
    <div className="App"> 
            <Router>
              <Nav showtoggle={show} open={we_open} getUrl={getUrl} curUrl ={curUrl}></Nav>
              <Header open ={we_open}></Header>
              <Switch>
                <Route exact path="/" component={Card} />
                <Route path="/about" component={Me} />
                <Route path="/users" component={Card} />
              </Switch>
            </Router>
    </div>
  );
}

export default App;
