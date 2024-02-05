import React from 'react'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <>
        <section id="about" className="aboutcontainer">

            <h2 className="abouttitle">About</h2>
            <div className="aboutcontent">
            <img src={getImageUrl("about/aboutimg.png")} alt='My Image' className="aboutimg"/>

            <ul className="aboutitems">

                <li className="aboutitem">
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon"/>
                <div className="aboutitemtext">
                    <h3>Full Stack Developer</h3>
                    <p>I'm a Full Stack developer with experience in creating responsive websites.</p>
                </div>
                </li>

                <li className="aboutitem">
                <img src={getImageUrl("about/serverIcon.png")} alt="UI Icon"/>
                <div className="aboutitemtext">
                    <h3>Backend Developer</h3>
                    <p>I have experience designing fast and optimized backend systems and APIs to ensure seamless performance.</p>
                </div>
                </li>

                <li className="aboutitem">
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon"/>
                <div className="aboutitemtext">
                    <h3>UI Designer</h3>
                    <p>I have experience in designing web sites using Figma.</p>
                </div>
                </li>

            </ul>

            </div>

        </section>
    </>
  )
}

export default About