import React from 'react';

interface IProps{

}

interface IState{

}

const Header:React.FC<IProps> = () => {

    return(
        <div className="w3-main" style={{marginLeft:"300px"}}>
            <div className="w3-container w3-padding-large" style={{marginBottom:"20px"}}>
                <h4>Technical Skills</h4>
                <p>Photography</p>
                <div className="w3-grey">
                    <div className="w3-container w3-dark-grey w3-padding w3-center" style={{width:"95%"}}>95%</div>
                </div>
                <p>
                    <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
                        <i className="fa fa-download w3-margin-right"></i>Download My Portfolio
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Header; 