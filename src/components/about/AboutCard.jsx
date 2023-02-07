import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Carousel from 'react-bootstrap/Carousel';

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/bg.jpeg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/gate.jpg"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/campus3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
          </div>
          <div className='right row'>
            <Heading   title='Latest Updates' subtitle='Get all the latest information here' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p><h6>{val.desc}</h6></p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
