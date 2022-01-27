import { types } from "../types/types";

export const authReducer = (state={}, action) => {

    //Vamos a configurar las acciones o tipos de types
    switch(action.type){
        case types.login:
            return{
                uid:action.payload.uid,
                name: action.payload.displayName
            }
        
        case types.logout:
            return{ } //Retorna un arreglo vacio
            
        default:
            return state;
    }
}