import React ,{useState}from 'react';
import './loginForm.css'
import { watchFile } from 'fs';

interface IProps{

}

interface IState{

}

const Register = () => {
    console.log("register")
}

const Login = async(email:string, password:string) => {
    
    const url = "http://localhost:3030/api/auth/login/"
    console.log(email + " " + password)
    if(password.length < 6){
        alert("잘못된 입력 입니다.")
    }
    
    //websocket이랑 같이 쓸 때 socket 연결 성립을 위한 대기 시간 필요??
    const options = {
        method : 'POST',
        headers : {
            'Conncetion' : 'keep-alive',
            'Access-Control-Allow-Origin': '*',
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            username : email,
            password : password
        })
    }

    await fetch(url, options)
    .then(async(res) => {
        if(res.ok){ console.log(res)
            return await res.json()
        }else{
            alert(res)
        }
       })
    .then(async(data) =>alert(data.token))
    .catch(error => alert(error))
}

const LoginForm:React.FC<IProps> = () => {

    const [email , setEmail] = useState<any>()
    const [password, setPassword] = useState<any>()

    return(
        
        <div className="login-page">
            <div className="form">
                <div className="w3-row w3-section">
                    <div className="w3-col" style={{width:"50px"}}>
                        <i className="w3-xxlarge fa fa-envelope-o"></i>
                        </div>
                        <div className="w3-rest">
                        <input className="w3-input w3-border" name="email" type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="w3-col" style={{width:"50px"}}><i className="w3-xxlarge fa fa-key"></i></div>
                            <div className="w3-rest">
                        <input className="w3-input w3-border" name="password" type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                <button type="submit" onClick={()=>Login(email,password)}>Login</button>
                <p className="message">Not registered? <a onClick={()=>Register()}>Create an account</a></p>
                
            </div>
        </div>
    )
}

export default LoginForm; 

