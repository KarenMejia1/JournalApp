import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

//Tambien se puedo haber usado el useState

    const [formValues, handleInputChange] = useForm({
        name: 'Karen',
        email: 'mep@karen.com',
        password: '123',
        password2: '123'
    });

    const{name, email, password, password2} = formValues

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ) {
            console.log('Formulario correcto')
        }
    }

    //Validacion del formulario
    const isFormValid = () => {

        if(name.trim().length === 0){
            console.log('Name is required')
            return false;
        }else if(!validator.isEmail(email)){
            console.log('Email is not valid')
            return false;
        }else if(password !== password2 || password.length < 5){
            console.log('Password should be at least 6 characters')
            return false
        }
        return true;
    }

    return(
        <>
        <h3 className='auth__title'>Register</h3>
        <form onSubmit={handleRegister}>

            <div className='auth__alert-error'>Hola mundo</div>

        <input
                type="text"
                placeholder='Name'
                name='name'
                className='auth__input'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}>
            </input>

            <input
                type="text"
                placeholder='Email'
                name='email'
                className='auth__input'
                autoComplete='off'
                value={email}
                onChange={handleInputChange}>
            </input>

            <input
                type="password"
                placeholder='Password'
                name='password'
                className='auth__input'
                value={password}
                onChange={handleInputChange}>
            </input>

            <input
                type="password"
                placeholder='Confirm password'
                name='password2'
                className='auth__input'
                value={password2}
                onChange={handleInputChange}>
            </input>

            <button
                className='btn btn-primary btn-block mb-5'
                type='submit'
            >
                Register
            </button>

            <Link 
                to="/auth/login"
                className='link mt-5'> 
                    Already registered?
            </Link>
        </form>
    </>
    )
} 