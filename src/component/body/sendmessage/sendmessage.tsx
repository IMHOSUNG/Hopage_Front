import React from 'react';

interface IProps{

}

interface IState{

}

const Header:React.FC<IProps> = () => {

    return(
        <div className="w3-main" style={{marginLeft:"300px"}}>
            <div className="w3-container w3-padding-large w3-grey">
                <hr className="w3-opacity"/>
                <div className="w3-section">
                    <label>Name</label>
                    <input className="w3-input w3-border" type="text" name="Name" required/>
                </div>
                <div className="w3-section">
                    <label>Email</label>
                    <input className="w3-input w3-border" type="text" name="Email" required/>
                </div>
                <div className="w3-section">
                    <label>Message</label>
                    <input className="w3-input w3-border" type="text" name="Message" required/>
                </div>
                <button type="submit" className="w3-button w3-black w3-margin-bottom"><i className="fa fa-paper-plane w3-margin-right"></i>Send Message</button>
            </div>
        </div>
    )
}

export default Header; 