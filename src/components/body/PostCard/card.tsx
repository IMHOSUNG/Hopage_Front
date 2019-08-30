import React, { useState, useMemo, useLayoutEffect, useCallback } from 'react';
import {NodeJsImage} from '../../../pageConfig'
import {getPost} from '../../../services/post'
import useInfiniteScroll from '../../../services/useInfiniteScroll'
import "./card.css"
import { fetchCard, IState } from '../../../reducers/rootReducer';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


interface CardItem{
    id : number,
    thumnail? : string,
    key? : number
}

interface IProps{

}

const CardItem:React.FC<CardItem> = ({thumnail, id}) => {

    const [value, setValue] = useState<any>([{ title: '', body : ''}]);

    //if you want to manipulate DOM in the effect, and want to make sure it happens before browser paint, you need to use useLayoutEffect.
    useLayoutEffect(() =>{
        const fetchData = async()=>{
            await getPost(id.toString()).then((response)=>{
                setValue({
                    title : response.data.title,
                    body : response.data.body
                })}
            )
        };
        fetchData();
    },[id])

    console.log("render Card Item "+ id)
    if(thumnail === undefined){
        thumnail = NodeJsImage
    }

    return (
        <div className="w3-third w3-container w3-margin-bottom">
                <img src={thumnail} alt="thumnail" className="w3-round-medium thumnail w3-black"/>            
                <div className="card w3-container w3-white">
                    <div>
                        <p><b>{id} {value.title}</b></p>
                        <p>{value.body}</p>
                    </div>
                </div>
        </div>  
    )
}


const curTitleSelector = (state:IState) => state.CardList;

const Card:React.FC<IProps> = () => {

    const dispatch = useDispatch();
    const cardlist = useSelector(curTitleSelector,shallowEqual);

    const moreItemList= useCallback(()=>{setTimeout(() => {
        dispatch(fetchCard())
        setIsFetching(false)
      },2000);},[dispatch])

    const [isFetching, setIsFetching] = useInfiniteScroll(moreItemList)
    
    const CardList = useMemo(()=> cardlist.map((i:number)=>(
        <CardItem thumnail={NodeJsImage} id={i} key={i} />
    )),[cardlist])


    /*
    function fetchMoreListItems() {
        setTimeout(() => {
          //setListItems(prevState => ([...prevState, ...Array.from(Array(15).keys(), n => n + prevState.length + 1)]))
          dispatch(fetchCard())
          setIsFetching(false)
        },2000);
    }
    */

    return(
      <div className="w3-row-padding">
        {CardList}
        {isFetching && 'Fetching more list items...'}
      </div>
    )
}

export default Card; 