import React from 'react'
import { AiFillInstagram, AiOutlineTwitter , AiOutlineFacebook, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 LB Shop Store All s reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
        <AiOutlineGithub/>

      </p>
    
    </div>
   
    
  )
}

export default Footer