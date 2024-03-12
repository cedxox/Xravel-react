import React from 'react'
import "../Components/Motor.css"
export const Motor = () => {
    return (
        <div className='context'>
            {/* <p>
               <span> Explore</span>, Experience, Connect Your <span className='span1'>Journey</span>, Your Memories, Your<span className='span2'> Adventure</span>.
            </p> */}
            <div className='context2'>
                <button className='button'>
                    <img src="apple-logo-png-12905.png" alt="" />
                    <div className='context_button'>
                        <aside>Download on the</aside>
                        <h1 className='res'>App Store</h1>
                    </div>
                    
                </button>
                <button className='button'>
                    <img src="google-play-logo-10629.png" alt="" />
                    <div className='context_button'>
                        <aside >Download on the</aside>
                        {/* contentEditable='true' */}
                        <h1 className='res'>Google Play</h1>
                    </div>
                    
                </button>
            </div>
        </div>
    )
}
