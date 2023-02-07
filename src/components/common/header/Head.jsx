import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h3>Indian Institute of Information Technology Design & Manufacturing Jabalpur</h3>
            <span>An institute of National Importance</span>
          </div>

          <div className='social'>
          <a href="https://twitter.com/iiitdmjbp"><i className='fab fa-twitter icon'></i></a>
          <a href="https://www.instagram.com/iiitdm_jabalpur/"><i className='fab fa-instagram icon'></i></a>
          <a href="https://www.facebook.com/iiitdm.jbp/"><i className='fab fa-facebook-f icon'></i></a>
          <a href="https://www.youtube.com/channel/UCODKL--xMCqXIK31cRdOWOw"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
