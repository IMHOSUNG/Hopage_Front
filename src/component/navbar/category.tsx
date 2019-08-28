import React, {useMemo, useCallback} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from 'react-router-dom';
import { IState, changeUrl} from '../../reducers/rootReducer'
import { navCategoryInput } from '../../pageConfig'

interface IProps{
    Categorys : any,
}

interface Item{
    url : string,
    name : string,
    clicked : boolean,
}

interface tCategory{
    categorys : Array<Item>,
}

const CategoryItem:React.FC<Item> = React.memo(({url, name, clicked}) =>{

    const dispatch = useDispatch();
    const setUrl = useCallback(()=>dispatch(changeUrl(url)),[dispatch,url]);
    //const curUrl = useSelector(curUrlSelector,shallowEqual);

    console.log("render Category item "+name +" " +clicked)
    return (
        <Link to={url} style={{ textDecoration: 'none' }}>
            <button onClick={setUrl} className={`w3-bar-item w3-button w3-padding ${clicked &&'w3-text-teal'}`}>
                <i className="fa fa-th-large fa-fw w3-margin-right"></i>{name}
            </button> 
        </Link> 
    )
},)

const CategoryList:React.FC<tCategory> = ({categorys}) => {

    const CategoryList = useMemo(()=> categorys.map(
        ({url,name, clicked}) => (
            <CategoryItem url={url} name={name} clicked={clicked} key={url} />
        )
    ),[categorys]);

    return (
        <div>
            {CategoryList}
        </div>
    );
}

const Category:React.FC<IProps> = ({Categorys}) => {

    return(
            <div className="w3-bar-block">
                <CategoryList categorys={Categorys}/>
            </div>
    )
}

export default Category;