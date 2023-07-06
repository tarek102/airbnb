import React from 'react'; 
import star from '../images/Star 1.png'

export const Card = () => {
  return (
    <div className='card'>
        <div className='card-img'>
            <button>Sold Out</button>
        </div>
        <div className='card-info'>
            <img src={star} className='star-img'></img>
            <h5 className='star-rate'>5.0</h5>
            <h5 className='star-num'>(6)</h5>
            <h5 className='star-country'>. USA</h5>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <h4>From $136 <span className='person'>/ person</span></h4>
    </div>
  )
}
