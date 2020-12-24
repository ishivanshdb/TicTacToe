import { CHANGESYMBOL } from "./action";

export const MySymbolReducer = (state,action)=>{
    switch(action.type){
        case CHANGESYMBOL:
            return action.payload;
        default:
            return state;
    }
}