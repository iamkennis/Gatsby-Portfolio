import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { Image } from './profileImg'
import "./About.css"

const About = () => {
  
  const aboutContainer = useRef(null)
  const image = useRef(null)
  const about = useRef(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': function scrollOnMobile() {
        const tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: aboutContainer.current,
            start: 'top top',
            scrub: true,
          },
        })

        tl.to([image.current, about.current], 0.1, {
          rotation: 45,
          autoAlpha: 0,
          translateX: 200,
        })
      },
    })
  }, [])
  return (
    <div className="About-me" ref={aboutContainer} id="about">
      <div ref={about}>
        <h1>About</h1>
        <p>
          Iam FrontEnd Developer and a self taught developer,I have always been
          passionate and love solving problem with programming tools, and also
          build software web applications that can be optimize and user friendly
          with HTML/CSS & JAVASCRIPT/REACT/REDUX. I also love contributing to
          open source projects. I have an experience in User Interface Design,
          Visual hierarchy, Design system with tools like ABOBE/FIGMA.
        </p>
      </div>
      <div>
        <div className="about__image" ref={image}>
         {/* <Image/> */}
        </div>
      </div>
    </div>
  )
}
   
 export default About

