import React from 'react';
import './loginForm.css'

interface IProps{

}

interface IState{

}

const LoginForm:React.FC<IProps> = () => {
 
    return(
        <div className="login-page">
            <div className="form">
                <form className="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p className="message">Already registered? <a href='/'>Sign In</a></p>
                </form>

                <form>
                <div className="w3-row w3-section">
                    <div className="w3-col" style={{width:"50px"}}>
                        <i className="w3-xxlarge fa fa-envelope-o"></i>
                        </div>
                        <div className="w3-rest">
                        <input className="w3-input w3-border" name="email" type="text" placeholder="Email"/>
                        </div>
                        <div className="w3-col" style={{width:"50px"}}><i className="w3-xxlarge fa fa-key"></i></div>
                            <div className="w3-rest">
                        <input className="w3-input w3-border" name="password" type="password" placeholder="password"/>
                        </div>
                    </div>
                <button>Login</button>
                <p className="message">Not registered? <a href='/'>Create an account</a></p>
                </form>
                
            </div>
        </div>
    )
}

export default LoginForm; 

