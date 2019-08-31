import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Category from "./category";
import NavHeader from "./navheader";
import { IState } from '../../reducers/rootReducer'
import Relatedlink from './relatedlink';
import './nav.css'

interface IProps{

}

const navStateSelector = (state:IState) => state.navShowState;
const categoryStateSelector = (state:IState) => state.navCategory;

const Nav:React.FC<IProps> = () => {

    const dispatch = useDispatch();
    const showState = useSelector(navStateSelector);
    const category = useSelector(categoryStateSelector,shallowEqual);

    return(
        <>
            <nav className="w3-sidebar w3-container w3-collapse w3-white w3-animate-left" 
              style={{zIndex:3, width:"300px" ,display: showState ? 'block' : 'none'}} id="mySidebar">
            <NavHeader title ={"title"} subtitle={"subtitle"}/>
            <Category Categorys={category}/>
            <Relatedlink/>

            </nav>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={() => {dispatch({type:"CHANGE"})}} style={{cursor:"pointer", display: showState ? 'block' : 'none' }} title="close side menu" id="myOverlay"/>
        </>
    )
}

export default Nav;