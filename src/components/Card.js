import React from 'react'; 
import star from '../images/Star 1.png'
import swimmer from '../images/katie-zaferes.png'

export const Card = ({coverImg, title, price, reviewCount, rating, location}) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img alt='swimmer' src={`/images/${coverImg}`}></img>
        </div>
        <div className='card-info'>
            <img src={star} className='star-img'></img>
            <h5 className='star-rate'>{rating}</h5>
            <h5 className='star-num'>({reviewCount})</h5>
            <h5 className='star-country'>. {location}</h5>
        </div>
        <p>{title}</p>
        <h4>From ${price} <span className='person'>/ person</span></h4>
    </div>
  )
}
