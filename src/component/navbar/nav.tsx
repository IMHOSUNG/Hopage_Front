import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Category from "./category";
import NavHeader from "./navheader";
import { IState } from '../../reducers/rootReducer'
import Relatedlink from './relatedlink';

interface IProps{

}

const navStateSelector = (state:IState) => state.navShowState;

const Nav:React.FC<IProps> = () => {

    const dispatch = useDispatch();
    const showState = useSelector(navStateSelector);
   
    console.log("nav call");

    return(
        <div>
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" 
              style={{zIndex:3, width:"300px" ,display: showState ? 'block' : 'none'}} id="mySidebar">
            <NavHeader title ={"title"} subtitle={"subtitle"}/>
            <Category/>
            <Relatedlink/>
            </nav>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={() => {dispatch({type:"CHANGE"})}} style={{cursor:"pointer", display: showState ? 'block' : 'none' }} title="close side menu" id="myOverlay"/>
        </div>
    )
}

export default Nav;