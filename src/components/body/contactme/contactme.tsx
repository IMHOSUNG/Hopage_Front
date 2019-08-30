import React from 'react';
import { MyEmail, MyGit } from '../../../pageConfig';

interface IProps{

}

const Header:React.FC<IProps> = () => {

    return(
        <div className="w3-container w3-padding-large w3-grey">
            <h4 id="contact"><b>Contact Me</b></h4>
            <div className="w3-row-padding w3-center w3-padding-24" style={{margin:0 ,padding:"-16px"}}>
            <div className="w3-half w3-teal">
                <p><i className="fa fa-google w3-xxlarge w3-text-light-grey"></i></p>
                <p>{MyEmail}</p>
            </div>
            <div className="w3-half w3-dark-grey">
                <p><i className="fa fa-github w3-xxlarge w3-text-light-grey"></i></p>
                <p>{MyGit}</p>
            </div>
            </div>
        </div>
    )
}

export default Header; 