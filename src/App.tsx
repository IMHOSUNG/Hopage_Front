import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Nav from './component/navbar/nav';
import Header from './component/header/header';
import { navCategoryInput } from './pageConfig'

const App: React.FC = () => {

  const RouteList = navCategoryInput.map(({component,url})=>
    ( url === '/') 
    ? <Route exact path={url} component={component} key={url}/> 
    : <Route path={url} component = {component} key={url}/>
  );

  return (
    <div className="App"> 
            <Router>
              <Nav></Nav>
              <Header></Header>
              <Switch>
                {RouteList}
              </Switch>
            </Router>
    </div>
  );
}

export default App;
