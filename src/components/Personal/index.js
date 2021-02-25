import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './personal.css'

export default function More() {
  const moreContainer = useRef(null)
  const iDesign = useRef(null)
  const iDevelop = useRef(null)
  const iLearn = useRef(null)
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': function scrollOnMobile() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: moreContainer.current,
            scrub: true,
          },
        })

        tl.fromTo(
          iDesign.current,
          0.1,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0 }
        )
          .fromTo(
            iDevelop.current,
            0.1,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0 }
          )
          .fromTo(
            iLearn.current,
            0.1,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0 }
          )
      },
    })
  }, [])

  return (
    <div className="more" id="more" ref={moreContainer}>
      <div ref={iDesign}>
        <h1>iDesign. </h1>
        <p>
          I have experience design with AdobeXD and Figma, and also have
          understanding the visual hierarchy for better user experience.
        </p>
      </div>
      <div ref={iDevelop}>
        <h1>iDevelop..</h1>
        <p>
          I develop applications with Javascript Frontend-end technologies to build
          efficient, I can absolutely function independently of them to deliver fast, 
          resilient solutions to optimized applications for user experience.
        </p>
      </div>
      <div ref={iLearn}>
        <h1>iLearn...</h1>
        <p>
          I strongly believe that learning is a part of the journey. The more I
          learn new stuffs, the more I am able to make connections of the things
          around me.
        </p>
      </div>
    </div>
  )
}
