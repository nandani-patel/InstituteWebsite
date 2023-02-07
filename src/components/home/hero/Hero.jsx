import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO PDPM IIITDMJ' title='National institute exclusively for IT, Design & Manufacturing' />
            <p>The Mission of the Institute is to create a multidisciplinary academic environment to prepare and train manpower of excellence for nurturing and promoting knowledge-based activities and innovations in design, fabrication and manufacturing of products by bringing together a collaborative and mutually stimulating mix of different fields of science, engineering and arts.</p>
            <div className='button'>
              <button className='primary-btn'>
              Learn More About Us<i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
