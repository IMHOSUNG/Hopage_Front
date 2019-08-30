import React ,{useEffect} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import Nav from './components/navbar/nav'
import {changeUrl} from './reducers/rootReducer'
import { navCategoryInput } from './pageConfig'

const App: React.FC = () => {

  //외부접속 didmount 처리
  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchData = async () => {
          let response = window.location.pathname;
          dispatch(changeUrl(response));
      }
      fetchData();
  })  

  const RouteList = navCategoryInput.map(({component,url})=>
    ( url === '/') 
    ? <Route exact path={url} component={component} key={url}/> 
    : <Route exact path={url} component = {component} key={url}/>
  );

  return (
    <div className="App"> 
            <Router>
              <Nav></Nav>
              <Switch>
                {RouteList}
              </Switch>
            </Router>
    </div>
  );
}

export default App;
