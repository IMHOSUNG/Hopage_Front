import React from 'react'
import Header from '../components/header/header'
import About from '../components/body/aboutme/aboutme'
import CONTACT from '../components/body/contactme/contactme'


const AboutLayout: React.FC = () => {

  return (
    
    <div className="w3-main" style={{marginLeft:"300px"}}>
        <Header/>
        <About/>
        <CONTACT/>
    </div>
  );
}

export default AboutLayout;
