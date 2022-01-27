import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelecter } from './NothingSelecter'
import { Sidebar } from './Siderbar'

export const JournalScreen = () => {
    return(
        <div className='journal__main-content'>
            <Sidebar/>
            <main>
                {/* <NothingSelecter/> */}
                <NoteScreen/>
            </main>
        </div>
    )
} 