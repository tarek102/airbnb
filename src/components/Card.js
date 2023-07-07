import React from 'react'; 
import star from '../images/Star 1.png'
// import swimmer from '../images/swimmer.png'

export const Card = ({img, title, price, reviewCount, rating, country}) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img alt='swimmer' src={img}></img>
            {/* <button>Sold Out</button> */}
        </div>
        <div className='card-info'>
            <img src={star} className='star-img'></img>
            <h5 className='star-rate'>{rating}</h5>
            <h5 className='star-num'>({reviewCount})</h5>
            <h5 className='star-country'>. {country}</h5>
        </div>
        <p>{title}</p>
        <h4>From ${price} <span className='person'>/ person</span></h4>
    </div>
  )
}
