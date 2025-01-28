import React from 'react'
import "./offers.css"
import { useState } from "react"
import { Special_Offers } from '../../constants/constants'


const Offers = () => {


  return (
    <section className="offers">
      <div className="offers-container">

        <div className="offers-title-wrapper">
          <h1 className="title"> <span>Exclusive</span> Deals Just for You</h1>
          <p className="subtitle">Discover our handpicked offers to save big and enjoy more.</p>
        </div>

        <div className="offers-wrapper">
              {Special_Offers.map((offer)=>(
                <OfferBox key={offer.id} 
                title={offer.title} 
                description={offer.description} 
                span={offer.pageSpan}
                img={offer.image}
                sale_percentage={offer.percentage_off}/>
              ))}

        </div>

      </div>
    </section>
  )
}


function OfferBox({title, description,img, span, sale_percentage}) {
  const [offerBoxHover, setOfferBoxHover] = useState(false);
  const [viewOffferDetials, setViewOffferDetials] = useState(false);

  const handelBoxHover_mouseOver = () => {
    setOfferBoxHover(true);
  }
  const handelBoxHover_mouseLeave = () => {
    setOfferBoxHover(false);
  }


  const handelViewOfferDetials = () => {
    setViewOffferDetials(!viewOffferDetials);
  }
  return (

    <div className="offer-box" style={{width:`${span}`}} onMouseOver={handelBoxHover_mouseOver} onMouseLeave={handelBoxHover_mouseLeave}>
      <img className='offer-image' src={img} alt={title}/>
      <h1 className='sale-percentage'>{sale_percentage}%</h1>
      <img className='price-tage' src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-yellow-price-tag-vector-png-image_6706592.png" alt="price tage" />
      <div className="offer-hover" style={{ height: offerBoxHover ? "100%" : 0, opacity: offerBoxHover ? "1" : "0" }}>
        <h1>🎒 {title} ✏️</h1>
        <p>{description}</p>
        <div className="buttons-wrapper">
          <button className='bundel-btn'>Get Bundle</button>
          <button className='view-btn' onClick={handelViewOfferDetials}>{viewOffferDetials ? "Hide Details" : "View Details"}</button>
        </div>

        <div className="details" style={{ display: viewOffferDetials ? "block" : "none" }}>
          <p>itmes in the bundel:</p>
          <ul>
            <li>Pencel</li>
            <li>dasklfjlkadsfadf</li>
            <li>adfdasfadsf</li>
            <li>dasfadfsasdf</li>
            <li>adfasdfafasdf</li>
          </ul>
        </div>

      </div>
    </div>

  )
}


export default Offers
