import React from 'react'
import Images from './Images';


const Cards = (props) => {
  console.log(props);
  return (
     <>
        
    <div className='card'>
          <Images imgsrc={props.imgsrc}></Images>
        <div className='card_info'>
            <span className='card_category'>A Netflix original Series</span>
            <h3 className='card_title'>{props.series_name}</h3>
            <a href={props.series_link} target='_blank'>
             <button className='btn'>Watch Now</button>
            </a>
        </div>
    </div>

     </>
  )
}

export default Cards
