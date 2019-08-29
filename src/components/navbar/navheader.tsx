import React from 'react';
import {DefaultImage} from '../../pageConfig';
import { useDispatch } from "react-redux";

interface IProps{
    title : string,
    subtitle : string,
}

const areEqual = (prevProps:IProps,nextProps:IProps) => {

    return (prevProps.title === nextProps.title && prevProps.subtitle === nextProps.subtitle)
}

const NavHeader:React.FC<IProps> = ({title,subtitle}) => {

    const dispatch = useDispatch();
    console.log("navHeader call");

    return(
        <div className="w3-container">
            <span onClick={() => {dispatch({type:"CHANGE"})}} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
            <i className="fa fa-remove"></i>
            </span>
            <img src={DefaultImage} style={{width:"45%"}} className="w3-round" alt="img"/><br/><br/>
            <h4><b>{title}</b></h4>
            <p className="w3-text-grey">{subtitle}</p>
        </div>
    )
}

export default React.memo(NavHeader,areEqual);