import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) =>{
    //Va a regresar un callback
    return (dispatch)=>{
        //Se pueden hacer varios dispatch
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500);
    }
}

//Google
export const startGoogleLogin = () => {
    //Tarea asincrona
    return (dispatch) => {
        //Retorno de una promesa
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
                )
        })
    }
}

export const login = (uid, displayName) =>{
    return({
        type:types.login,
        payload:{
            uid,
            displayName
        }
    })
}