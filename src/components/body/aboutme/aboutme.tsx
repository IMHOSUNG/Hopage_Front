import React from 'react';
import {DefaultImage, AboutMeTitle, AboutMeDescription} from '../../../pageConfig'

interface IProps{

}

interface IState{

}

const AboutMe:React.FC<IProps> = () => {
 
    return(
        <>
            <div className="w3-row-padding w3-padding-16" id="about">
                <div className="w3-col m6">
                <img src={DefaultImage} alt="Me" style={{width:"100%"}}/>
                </div>
            </div>
            <div className="w3-container w3-padding-large" style={{marginBottom:"20px"}}>
                <h4><b>{AboutMeTitle}</b></h4>
                <p>{AboutMeDescription}</p>
                <hr/>
            </div>
        </>
    )
}

export default AboutMe; 