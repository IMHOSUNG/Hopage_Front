import React from 'react'
import Header from '../components/header/header'
import Tech from '../components/body/technical/technical'

const TechLayout: React.FC = () => {

  return (
    <div className="w3-main" style={{marginLeft:"300px"}}>
        <Header/>
        <Tech/>
    </div>
  );
}

export default TechLayout;
