import { navCategoryInput } from '../pageConfig'


export interface Actions{
    type : string,
    payload : string,

}

export interface IState{
    navShowState : boolean,
    curUrl : string,
    navCategory : any,
}


const initialState:IState = {
    navShowState : false,
    curUrl : "/",
    navCategory : navCategoryInput,
}

export const changeUrl = (url:string) => ({type:"CHANGE_URL", payload: url});
export const checkUrl = (url:string) => ({type:"CHECK_URL" , payload: url });

const rootReducer= ( state = initialState , action:Actions):IState =>{
    switch(action.type){
        case 'CHANGE' :
            return {...state , navShowState : !state.navShowState}
        case 'CHANGE_URL' :
            return {...state , curUrl : action.payload, 
                navCategory : state.navCategory.map(
                    (category:any) => (category.url == action.payload)
                    ?{
                        ...category,
                        clicked : true
                    } : {
                        ...category,
                        clicked : false
                    }
                )
            }
        default :
            return state;
    }
}

export default rootReducer;