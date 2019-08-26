import React, {useMemo, useCallback} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from 'react-router-dom';
import { IState, changeUrl} from '../../reducers/rootReducer'

interface IProps{

}

interface Item{
    url : string,
    name : string,
}

interface tCategory{
    categorys : Array<Item>,
}

const curUrlSelector = (state:IState) => state.curUrl;

/*const areEqual = (prevProps:Item, nextProps:Item) => {
    return (prevProps.name === nextProps.name);
  }
*/

const CategoryItem:React.FC<Item> = React.memo(({url, name}) =>{

    const dispatch = useDispatch();
    const curUrl = useSelector(curUrlSelector,shallowEqual);
    const setUrl = useCallback(()=>dispatch(changeUrl(url)),[dispatch,url]);

    console.log("render item "+name)
    return (
        <Link to={url} style={{ textDecoration: 'none' }}>
        <button onClick={setUrl} className={`w3-bar-item w3-button w3-padding ${(curUrl===url)&&'w3-text-teal'}`}>
            <i className="fa fa-th-large fa-fw w3-margin-right"></i>{name}
        </button> 
        </Link> 
    )
},)

const CategoryList:React.FC<tCategory> = ({categorys}) => {

    const CategoryList = useMemo(()=> categorys.map(
        ({url,name}) => (
            <CategoryItem url={url} name={name} key={url}/>
        )
    ),[categorys]);

    return (
        <div>
            {CategoryList}
        </div>
    );
}

const Category:React.FC<IProps> = () => {

    const Category = [
        { name : "PORTFOLIO", url : "/"},
        { name : "ABOUT" , url : "/about"},
        { name : "CONTACT", url : "/contact"}
    ];

    console.log("render Category")
    return(
            <div className="w3-bar-block">
                <CategoryList categorys={Category}/>
            </div>
    )
}

export default Category;