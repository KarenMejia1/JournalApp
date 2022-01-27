import Swal from 'sweetalert2'


import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui'

export const startLoginEmailPassword = (email, password) =>{
    //Va a regresar un callback
    return (dispatch)=>{ //Se pueden hacer varios dispatch
        
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then( ({user}) => {
            dispatch( login(user.uid, user.displayName));

            dispatch(finishLoading());
        })
        .catch(e => {
            console.log(e)
            dispatch(finishLoading());

            //Alerta
            Swal.fire('Error', e.message, 'error')
        })

        
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {

//Tarea asincrona, necesito retornar un callback
return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async({user}) => {  //Esto retorna una promesa
        
        await user.updateProfile({displayName: name})
        dispatch(
            login(user.uid, user.displayName)
            )
    })
    .catch(e => {
        console.log(e)
        Swal.fire('Error', e.message, 'error');
    })
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

export const login = (uid, displayName) => {
    return({
        type:types.login,
        payload:{
            uid,
            displayName
        }
    })
}

//Asincrono porque en la parte de firebase tengo que disparala 
export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut(); //Esto retorna una promesa
        
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})



