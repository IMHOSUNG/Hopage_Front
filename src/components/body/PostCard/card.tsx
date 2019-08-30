import React, { useEffect, useState, useMemo } from 'react';
import {DefaultImage, PageList} from '../../../pageConfig'
import {getPost} from '../../../services/post'
import "./card.css"

interface CardItem{
    id : string,
    thumnail? : string,
    key? : string
}

interface IProps{

}

const CardItem:React.FC<CardItem> = ({thumnail, id}) => {

    const [value, setValue] = useState<any>([{ title: '', body : ''}]);

    useEffect(() =>{
            const fetchData = async()=>{
            await getPost(id).then((response)=>{setValue({
                    title : response.data.title,
                    body : response.data.body
                })}
            )
        };
        fetchData();
    },[id])
    
    console.log("render Card Item "+ id)
    if(thumnail === undefined){
        thumnail = DefaultImage
    }

    return (
        <div className="w3-third w3-container w3-margin-bottom">
                <img src={thumnail} alt="thumnail" className="w3-round-medium thumnail w3-black"/>            
                <div className="card w3-container w3-white">
                    <div>
                        <p><b>{value.title}</b></p>
                        <p>{value.body}</p>
                    </div>
                </div>
        </div>  
    )
}

const Card:React.FC<IProps> = () => {

    const CardList = useMemo(()=> PageList.map((i:string)=>(
        <CardItem thumnail={DefaultImage} id={i} key={i} />
    )),[])

    return(
      <div className="w3-row-padding">
        {CardList}
      </div>
    )
}

export default Card; 