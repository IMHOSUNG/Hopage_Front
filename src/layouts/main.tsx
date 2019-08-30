import React from 'react'
import Header from '../components/header/header'
import Card from '../components/body/PostCard/card'

const MainLayout: React.FC = () => {

  return (
    <div className="w3-main" style={{marginLeft:"300px"}}>
        <Header/>
        <Card/>
    </div>
  );
}

export default MainLayout;
