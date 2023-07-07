import React from 'react'; 
import star from '../images/Star 1.png'

export const Card = ({coverImg, openSpots, title, price, reviewCount, rating, location}) => {

  let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }


  return (
    <div className='card'>
        {badgeText && <div className='card-badge'>{badgeText}</div>}
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
