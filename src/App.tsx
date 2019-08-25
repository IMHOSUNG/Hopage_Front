import React from 'react';
import "./App.css"
import Nav from './component/navbar/nav';
import Header from './component/header/header';
import Card from './component/body/PostCard/card';

const App: React.FC = () => {
  return (
    <div className="App">
            
            <Nav></Nav>

            <Header></Header>

            <Card></Card>

    </div>
  );
}

export default App;
