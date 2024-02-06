import React from 'react'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <>
        <section className='herocontainer'>
            <div className='herocontent'>
                <h1 className='herotitle'>Hi, I'm Malarvizhi</h1>
                <p className='herodescription'>Dedicated web developer with a passion for developing and deploying user-friendly web applications. A Full Stack web development Enthusiast.</p>
                <a href="#contact" className='herocontactbtn'>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/myheroimg.png")} alt='Hero Image of me' className='heroimg'/>
            <div className='herotopblur'/>
            <div className='herobottomblur'/>
        </section>
    </>
  )
}

export default Hero