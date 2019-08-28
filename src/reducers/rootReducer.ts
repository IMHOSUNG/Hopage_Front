import { navCategoryInput } from '../pageConfig'

export interface navCategoryItem{
    name : string,
    url : string,
    component : React.FunctionComponent<any>,
    layoutTitle : string,
    clicked : boolean,
}

export interface Actions{
    type : string,
    payload : string,
}

export interface IState{
    navShowState : boolean,
    curUrl : string,
    navCategory : Array<navCategoryItem>,
    curTitle : string,
}

const initialState:IState = {
    navShowState : false,
    curUrl : "/",
    navCategory : navCategoryInput,
    curTitle : "",
}

const getTitle = (nav:Array<navCategoryItem>,url:string ) => {
    
    const find:any = nav.find((cat:navCategoryItem) => (cat.url === url))
    return find.layoutTitle
}

export const changeUrl = (url:string) => ({type:"CHANGE_URL", payload: url});

const rootReducer= ( state = initialState , action:Actions):IState =>{
    switch(action.type){
        case 'CHANGE' :
            return {...state , navShowState : !state.navShowState}
        case 'CHANGE_URL' :
            return {...state , curUrl : action.payload, 
                    curTitle : getTitle(state.navCategory,action.payload),
                    navCategory : state.navCategory.map(
                        (category:navCategoryItem) => (category.url === action.payload)
                        ?{
                            ...category,
                            clicked : true
                        } : {
                            ...category,
                            clicked : false
                        }
                    ),
                }
        default :
            return state;
    }
}

export default rootReducer;