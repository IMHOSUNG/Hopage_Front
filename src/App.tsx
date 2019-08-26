import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './component/navbar/nav';
import Header from './component/header/header';
import Card from './component/body/PostCard/card';
import Me from './component/body/aboutme/aboutme';
import Contact from './component/body/contactme/contactme';

const Category = ["PORTFOLIO","ABOUT","CONTACT"];
const CategoryUrl = ["/", "/about", "/contact"];
const App: React.FC = () => {

  const [curUrl ,setCurUrl] = useState("/");

  //nav State
  //Category List : Array<String>
  //Category Url : Array<String>
  const getUrl = (Url:string) => {
    setCurUrl(Url);
  }

  return (
    <div className="App"> 
            <Router>
              <Nav getUrl={getUrl} curUrl ={curUrl}></Nav>
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
