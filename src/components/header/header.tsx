import React, { useCallback } from 'react';
import {DefaultImage } from '../../pageConfig'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { IState } from '../../reducers/rootReducer'

interface IProps{

}

interface IFilter{
   name? : string,
}

interface IBody{
   title : any,
   filterList? : Array<IFilter>
}

/*
const Filter:React.FC<IFilter> = ({}) => {

  return (
    <div>
      <span className="w3-margin-right">Filter:</span> 
      <button className="w3-button w3-black">ALL</button>
      <button className="w3-button w3-white">
        <i className="fa fa-diamond w3-margin-right"></i>Design</button>
      <button className="w3-button w3-white w3-hide-small">
        <i className="fa fa-photo w3-margin-right"></i>Photos</button>
      <button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Art</button>
    </div>
  )
}*/

// ToDO : 필터 기능 구현 하기 (DB)
const Headerbody:React.FC<IBody> = ({title, filterList}) => {

  return(
    <div className="w3-container">
    <h1><b>{title}</b></h1>
    <div className="w3-section w3-bottombar w3-padding-16">
     
    </div>
    </div>
  )
}

const curTitleSelector = (state:IState) => state.curTitle;

// TODO : URL 따라 헤더 타이틀이 변하게 할 것
const Header:React.FC<IProps> = () => {

    const dispatch = useDispatch();
    const curTitle = useSelector<IState,string>(curTitleSelector,shallowEqual);
    const changeUrl = useCallback(() => {dispatch({type:"CHANGE"})},[dispatch])

    console.log("header render");
    return(
        <header id="portfolio">
            <img src={DefaultImage} style={{width:"65px"}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" alt="img"/>
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onClick={changeUrl}>
              <i className="fa fa-bars"></i>
            </span>
            <Headerbody title={curTitle}/>
        </header>
    )
}

export default Header; 