import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {NodeJsImage} from '../../../pageConfig'
import {getPost} from '../../../services/post'
import useInfiniteScroll from '../../../services/useInfiniteScroll'
import "./card.css"
import { fetchCard, IState } from '../../../reducers/rootReducer';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

interface CardItem{
    id : number,
    thumnail? : string,
}

interface CardList{
    cList : Array<number>
}

interface IProps{

}

const curListSelector = (state:IState) => state.CardList;

const areEqual =(prevProps:CardItem , nextProps:CardItem) => {
    return ( prevProps.id === nextProps.id )
}

const CardItem:React.FC<CardItem> = React.memo(({thumnail, id}) => {

    const [value, setValue] = useState<any>([{ title: '', body : ''}]);
    //const [isloading, setLoading] = useState(false);

    //if you want to manipulate DOM in the effect, and want to make sure it happens before browser paint, you need to use useLayoutEffect.
    useEffect(() =>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        (async()=>{
            try {
                await getPost(id.toString(),{signal : signal})
                .then(async(response)=> await response.json())
                .then((data) => {
                    setValue({
                        title : data.title,
                        body : data.body
                    })}
                )
            } catch(error) {
            }

        })();
        return () => {
            abortController.abort();

        }
    },[id])

    console.log("render Card Item "+ id)
    if(thumnail === undefined){
        thumnail = NodeJsImage
    }

    return (
        <div className="display w3-container w3-margin-bottom">
            <img src={thumnail} alt="thumnail" className="w3-round-medium thumnail w3-black"/>            
            <div className="card w3-container w3-white">
                <div>
                    <p><b>{id} {value.title}</b></p>
                    <p>{value.body}</p>
                </div>
            </div>
        </div>  
    )
},areEqual)

const CardList:React.FC<CardList> =React.memo(({cList}) => {
    
    const CardList = useMemo(()=> cList.map((i:number)=>(
        <CardItem thumnail={NodeJsImage} id={i} key={i} />
    )),[cList])
    
    return (
        <>
            {CardList}
        </>
    )
},)

const Card:React.FC<IProps> = () => {

    const dispatch = useDispatch();
    const cardlist = useSelector(curListSelector,shallowEqual);  
    const moreItemList= useCallback(()=> {
        dispatch(fetchCard())
        setIsFetching(false)
    },[dispatch])

    const [isFetching, setIsFetching] = useInfiniteScroll(moreItemList)
    
    return(
      <div className="w3-row-padding"  style={{display:"hide"}}>
        <CardList cList={cardlist}/>
        <footer>
        {isFetching && 
            <div className="footer w3-xxlarge">
                    <i className="fa fa-refresh fa-spin" />
            </div>
        }  
        </footer>  
      </div>
    )
}

export default Card; 