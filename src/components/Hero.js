import React from 'react'
import './Hero.css'
import Crypto from '../assests/Cryto.jpg'


export const Hero = () => {
  return (
    <div className='hero'>
     <div className='container'>
         <div className='left'>
             <p>Buy crypto now with an account</p>
             <h1>Invest in cypto currency with your retirment.</h1> 
             <p>Buy sell or trade hundred of assests now.</p> 
             <div className='input-container'>
             <input type='email' placeholder='Enter email here'/> 
                   <button className='btn'>Learn More</button>         
            </div>
        </div>   
           <div className='right'>
                <div className='img-container'>
                    <img src ={Crypto} alt=''/>
                    </div>    
            </div> 



         </div>   


    </div>
  )
}

export default Hero