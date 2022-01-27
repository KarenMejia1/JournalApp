import React from 'react'

export const JournalEntry = () => {
    return ( 
        <div className='journal__entry pointer'> 
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize:'cover',
                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Userbox_creeper.svg/800px-Userbox_creeper.svg.png)'
                }}>
            </div>
            <div className='journal__entry-body'>
                    <p className='journal__entry-title'>
                        Un nuevo día
                    </p>

                    <p className='journal__entry-content'>
                        Tu te vas y yo me quedo aqui, llovera y ya no sere tuya, sere la gata bajo la lluvia
                    </p>
                </div>

                <div className='journal__entry-date-box'>
                    <span>Monday</span>
                    <h4>28</h4>
                </div>
        </div>
    )
}