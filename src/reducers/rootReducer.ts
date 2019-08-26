
interface Actions{
    type : string,
}

const initialState= {
    navShowState : false,
}

const rootReducer = (state = initialState , action:Actions) =>{
    switch(action.type){
        case 'CHANGE' :
            return {navShowState : !state.navShowState}
        default :
            return state;
    }
}

export default rootReducer;