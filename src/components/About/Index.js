import React, { useRef } from 'react'
import { Image } from './profileImg'
import './About.css'

export default function About() {
  const aboutContainer = useRef(null)
  const image = useRef(null)
  const about = useRef(null)

  return (
    <div className="About" ref={aboutContainer} id="about">
      <div ref={about}>
        <h1>About</h1>
        <p>
          Iam FrontEnd Developer and a self taught developer,I have always been
          passionate and love solving problem with programming tools, and
          also build software web applications that can be optimize and user
          friendly with HTML/CSS & JAVASCRIPT/REACT/REDUX. I also love
          contributing to open source projects. I have an experience in User
          Interface Design,Visual hierarchy, Design system with tools like
          ABOBE/FIGMA.
        </p>
      </div>
      <div>
        <div className="about__image" ref={image}>
          <Image />
        </div>
      </div>
    </div>
  )
}

