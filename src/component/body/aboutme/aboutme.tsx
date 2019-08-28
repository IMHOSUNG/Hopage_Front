import React from 'react';
import CONTACT from '../contactme/contactme'

interface IProps{

}

interface IState{

}

const AboutMe:React.FC<IProps> = () => {
 
    return(
        <div className="w3-main" style={{marginLeft:"300px"}}>
            <div className="w3-row-padding w3-padding-16" id="about">
                <div className="w3-col m6">
                <img src="/w3images/avatar_g.jpg" alt="Me" style={{width:"100%"}}/>
                </div>
            </div>
            <div className="w3-container w3-padding-large" style={{marginBottom:"20px"}}>
                <h4><b>About Me</b></h4>
                <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                <hr/>
            </div>
            <CONTACT/>
        </div>

    )
}

export default AboutMe; 