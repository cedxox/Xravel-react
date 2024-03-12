import React from 'react'
import "../Components/Content.css"
export const Content = () => {
  return (
    <div className='content'>
        <div className="image1">
            <img src="las-vegas-1846684_1280.jpeg" alt="image1" />
            <p className='inline'>TRAVEL</p>
        </div>
        <div className="image2">
            <img src="stonehenge-101801_1280.jpeg" alt="image2" />
            <img src="taj-mahal-866692_1280.jpeg" alt="" />
            <p className='inline'>EXPLORE</p>
        </div>
        <div className="image3">
            <img src="manor-house-2359884_1280.jpeg" alt="" />
            <p className='inline'>FIND THE BEST HOTEL</p>
        </div>
    </div>
  )
}
