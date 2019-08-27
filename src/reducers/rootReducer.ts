import { navCategoryInput } from '../pageConfig'

export interface Actions{
    type : string,
    payload : string,

}

export interface IState{
    navShowState : boolean,
    curUrl : string,
}


const initialState:IState = {
    navShowState : false,
    curUrl : '/',
}

export const changeUrl = (url:string) => ({type:"CHANGE_URL", payload: url});

const rootReducer= ( state = initialState , action:Actions):IState =>{
    switch(action.type){
        case 'CHANGE' :
            return {...state , navShowState : !state.navShowState}
        case 'CHANGE_URL' :
            return {...state , curUrl : action.payload}
        default :
            return state;
    }
}

export default rootReducer;