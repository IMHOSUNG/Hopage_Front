import { navCategoryInput, PageList } from '../pageConfig'

const INITIALIZE_INPUT = "auth/INITIALIZE_INPUT"
const CHANGE_INPUT = "auth/CHANGE_INPUT"

export interface navCategoryItem{
    name : string,
    url : string,
    component : React.FunctionComponent<any>,
    layoutTitle : string,
    clicked : boolean,
}

export interface Actions{
    type : string,
    payload : any,
}


interface Input{
    name : string,
    value : string,
}

export interface IState{
    navShowState : boolean,
    curUrl : string,
    navCategory : Array<navCategoryItem>,
    curTitle : string,
    curUser : string,
    form : {
        name:string , password:string
    }
    CardList : Array<number>
}


const initialState:IState = {
    navShowState : false,
    curUrl : "/",
    navCategory : navCategoryInput,
    curTitle : "",
    curUser : "",
    form : {
        name: "",
        password: ""
    },
    CardList : PageList
}

const getTitle = (nav:Array<navCategoryItem>,url:string ) => {
    
    const find:any = nav.find((cat:navCategoryItem) => (cat.url === url))
    return find.layoutTitle
}

export const initializeInput = () => ({
    type: INITIALIZE_INPUT
});

export const changeInput = ({name, value}:Input ) => ({
    type : CHANGE_INPUT,
    payload: {
        name,value
    }
})

export const changeUrl = (url:string) => ({type:"CHANGE_URL", payload: url});
export const changeNav = (showstate:boolean) => ({type:"CHANGE", payload : !showstate})
export const fetchCard = () => ({type:"INCREASE" })

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
        case INITIALIZE_INPUT :
            return {
                ...state,
                form: {
                    name: "",
                    password: ""
                }
            }
        case CHANGE_INPUT:
            let newForm:any = state.form;
            newForm[action.payload.name] = action.payload.value;
            return {
                ...state,
                form: newForm
            };
        case "INCREASE" :
            return {
                ...state,
                CardList : [...state.CardList , ...Array.from(Array(12).keys(), n => n + state.CardList.length + 1)]
            };
        default :
            return state;
    }
}

export default rootReducer;