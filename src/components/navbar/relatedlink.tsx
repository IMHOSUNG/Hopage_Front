import React, {useMemo} from 'react';
import { navRelatedLink } from '../../pageConfig'

interface IProps{

}

interface Item{
    url : string,
    name : string,
}

interface RList{
    links : Array<Item>,
}

const areEqual = (prevProps:Item,nextProps:Item) => {

    return (prevProps.url === nextProps.url)
}

const LinkItem:React.FC<Item> = React.memo(({url, name}) => {
    console.log("link item render "+name)
    return (
        <div>
            <a href ={url}>
                <i className={`fa fa-${name} w3-hover-opacity`} style={{marginRight : "10px"}}/>
            </a>
        </div>
    )
},areEqual)

const LinkList:React.FC<RList> = ({links}) => {
    
    const _linklist = useMemo(()=>links.map(
        ({url, name})=>(
            <LinkItem name={name} url={url} key={url}/>
        )
    ),[links])

    return (
        <div>
            {_linklist}
        </div>
    );
}

const Relatedlink:React.FC<IProps> = () => {

    return(
            <div className="w3-panel w3-large">
                <LinkList links={navRelatedLink}/>
            </div>
    )
}

export default Relatedlink;