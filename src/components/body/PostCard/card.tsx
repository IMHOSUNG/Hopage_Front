import React, { useEffect, useState } from 'react';
import {DefaultImage, NodeJsImage } from '../../../pageConfig'
import {getPost} from '../../../services/post'
import "./card.css"

interface CardItem{
    id : string,
    thumnail? : string,
    title : string,
    description : string,
}

interface IProps{

}

const CardItem:React.FC<CardItem> = ({thumnail, title, description, id}) => {

    const [value, setValue] = useState<any>([{ title: title, body : description}]);

    useEffect(() =>{
            const fetchData = async()=>{
            
            const info = await getPost(id)
            setValue({
                title : info.data.title,
                body : info.data.body
            })
        };
        fetchData();
    },[id])
    
    console.log("render Card Item "+ id)
    if(thumnail === undefined){
        thumnail = DefaultImage
    }
    //fetchData(id).then((value)=>{setT(value.title), setB(value.body), setC(value.comments)})

    return (
        <div className="w3-third w3-container w3-margin-bottom ">
            <img src={thumnail} alt="thumnail" className="w3-round-medium thumnail w3-black"/>            
            <div className="w3-container w3-white">
                <p><b>{value.title}</b></p>
                <p>{value.body}</p>
            </div>
        </div>  
    )
}

const Card:React.FC<IProps> = () => {

    return(
      <div className="w3-main" style={{marginLeft:"300px"}}>
      <div className="w3-row-padding">
        <CardItem title={"test"} description={"subtitle"} thumnail={NodeJsImage} id={"1"}/>
      </div>
      </div>
    )
}

export default Card; 