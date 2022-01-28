import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelecter } from './NothingSelecter'
import { Sidebar } from './Siderbar'

export const JournalScreen = () => {

    //Para extraer algo de la store
    const {active} = useSelector( state => state.notes );
    
    return(
        <div className='journal__main-content'>
            <Sidebar/>
            <main>

                {
                    (active)
                    ?(<NoteScreen/>)
                    :(<NothingSelecter/>)
                }
            </main>
        </div>
    )
} 