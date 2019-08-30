import React from 'react'
import LoginForm from '../components/body/loginform/login';


const LoginLayout: React.FC = () => {

  return (
    <div className="w3-main" style={{marginLeft:"300px"}}>
        <LoginForm/>
    </div>
  );
}

export default LoginLayout;
