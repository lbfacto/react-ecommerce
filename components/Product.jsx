import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


export const Product = ({ product: { image, name,
details, price, Slug
} }) => {
  return (
    <div>
      <Link href={'/product/${slug.current}'}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"  
          />
          <p className="product-name">{name}
          </p>
          <p className="product-details">{details} 
          </p>
          <p className="product-slug">{Slug} 
          </p>
          <p className="product-price">{price} Fcfa 
          </p>
          
        </div>
      </Link>
    </div>
  )
}

export default Product
