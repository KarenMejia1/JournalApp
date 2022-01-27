import React from 'react'

export const NotesAppBar = () => {
    return(
        <div className='notes__appbar'>
            <span>28 de Agosto 2020</span>

            <div>
                <button className='btn'>
                    Picture para cargar una imagen
                </button>

                <button className='btn'>
                    Save
                </button>
            </div>
        </div>
    )
}