import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
  
        <Carousel>
        <img 
          src={urlFor(image)} className="https://cdn.sanity.io/images/rodmjlm9/production/2feda07ebe25b3e79302d30762050e48344a258a-300x168.jpg"
        />
       </Carousel> 
      </div>
      
    </div>
  )
}

export default FooterBanner


