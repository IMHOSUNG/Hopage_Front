import React from 'react';
import {DefaultImage} from '../../../pageConfig'
import "./card.css"

interface IProps{

}

interface IState{

}

const Card:React.FC<IProps> = () => {

    return(
      <div className="w3-main" style={{marginLeft:"300px"}}>
      <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom ">
              <img src={DefaultImage}
              alt="Norway" className="thumnail"/>            
          <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
          </div>  
          <div className="w3-third w3-container w3-margin-bottom">
              <img src={DefaultImage}
              alt="Norway" className="thumnail"
              />
          <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
          </div>  
          <div className="w3-third w3-container w3-margin-bottom">
          <img src={DefaultImage}
          alt="Norway" className="thumnail"/>
          <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
          </div>  
          <div className="w3-third w3-container w3-margin-bottom">
          <img src={DefaultImage} alt="Norway" className="thumnail"/>
          <div className="w3-container w3-white">
              <p><b>Lorem Ipsum</b></p>
              <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
          </div>  
      </div>
      </div>
    )
}

export default Card; 