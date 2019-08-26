import React, { useCallback } from 'react';
import {url} from '../config';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

interface IProps{

    curUrl : string,
    getUrl(url:string) : void,
}

interface IState{
    navShowState : boolean,
}

const navShowState = (state:IState) => state.navShowState;

const Nav:React.FC<IProps> = ({curUrl, getUrl}) => {

    const dispatch = useDispatch();
    const showState = useSelector(navShowState);


    console.log(showState);

    return(
        <div>
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" 
              style={{zIndex:3, width:"300px" ,display: showState ? 'block' : 'none'}} id="mySidebar">
            <div className="w3-container">
                <button onClick={() => {dispatch({type:"CHANGE"})}} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                <i className="fa fa-remove"></i>
                </button>
                <img src={url} style={{width:"45%"}} className="w3-round"/><br/><br/>
                <h4><b>PORTFOLIO</b></h4>
                <p className="w3-text-grey">Template by W3.CSS</p>
            </div>
            <div className="w3-bar-block">
                <Link to="/" style={{ textDecoration: 'none' }}>
                <button onClick={()=>getUrl('/')} className={`w3-bar-item w3-button w3-padding ${(curUrl==='/')&&'w3-text-teal'}`}>
                    <i className="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO</button> 
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                <button onClick={()=>getUrl('/about')} className={`w3-bar-item w3-button w3-padding ${(curUrl==='/about')&&'w3-text-teal'}`}>
                    <i className="fa fa-user fa-fw w3-margin-right"></i>ABOUT</button> 
                </Link>
                <Link to="/users" style={{ textDecoration: 'none' }}>
                <button onClick={()=>getUrl('/users')} className={`w3-bar-item w3-button w3-padding ${(curUrl==='/users')&&'w3-text-teal'}`}>
                    <i className="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</button>
                </Link>
            </div>
            <div className="w3-panel w3-large">
                <i className="fa fa-facebook-official w3-hover-opacity" style={{marginRight : "10px"}}></i>
                <i className="fa fa-instagram w3-hover-opacity" style={{marginRight : "10px"}}></i>
                <i className="fa fa-snapchat w3-hover-opacity"style={{marginRight : "10px"}}></i>
                <i className="fa fa-pinterest-p w3-hover-opacity"style={{marginRight : "10px"}}></i>
                <i className="fa fa-twitter w3-hover-opacity"style={{marginRight : "10px"}}></i>
                <i className="fa fa-linkedin w3-hover-opacity"style={{marginRight : "10px"}}></i>
                <i className="fa fa-github w3-hover-opacity"style={{marginRight : "10px"}}></i>
            </div>
            </nav>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={() => {dispatch({type:"CHANGE"})}} style={{cursor:"pointer", display: showState ? 'block' : 'none' }} title="close side menu" id="myOverlay"/>
        </div>
    )
}

export default React.memo(Nav);