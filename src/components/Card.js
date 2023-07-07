import React from 'react'; 
import star from '../images/Star 1.png'

export const Card = (props) => {
  console.log(props.card);

  let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    
  return (
    
    <div className='card'>
        {badgeText && <div className='card-badge'>{badgeText}</div>}
        <div className='card-img'>
            <img alt='swimmer' src={`/images/${props.card.coverImg}`}></img>
        </div>
        <div className='card-info'>
            <img src={star} className='star-img'></img>
            <h5 className='star-rate'>{props.card.stats.rating}</h5>
            <h5 className='star-num'>({props.card.stats.reviewCount})</h5>
            <h5 className='star-country'>. {props.card.location}</h5>
        </div>
        <p>{props.card.title}</p>
        <h4>From ${props.card.price} <span className='person'>/ person</span></h4>
    </div>
  )
}
