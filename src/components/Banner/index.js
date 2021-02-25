import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './styles.module.css'


export default function Banner() {
  const greet = useRef(null)
  const name = useRef(null)
  const title = useRef(null)
  const left = useRef(null)
  const right = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ paused: true })
    tl.fromTo(
      greet.current,
      0.1,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, ease: 'bounce.in' }
    )
      .fromTo(name.current, 0.1, { y: -10, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(title.current, 0.1, { y: -10, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        left.current,
        0.4,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'back.out(1.7)' }
      )
      .fromTo(
        right.current,
        0.4,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'back.out(1.7)' }
      )
      .play()

  
  }, [])

  return (
    <div className={styles.banner} id="banner">
      <div className={styles.scroll}>
        <div className={styles.scroller}> </div>
      </div>

      <div className={styles.bannerText}>
        <div>
          <p ref={greet}>
            Hi There
            <span role="img" aria-label="wave">
              👋🏼
            </span>
            , I am
          </p>

          <h1 className={styles.avatarName} ref={name}>
            Amodu Kehinde
          </h1>

          <h1 className={styles.jobTitle} ref={title}>
            Frontend Developer
          </h1>

          <section className={styles.bannerTextSection}>
            <p ref={left} className={styles.bannerTextSection__intro}>
              I love to help create great and scalable frontend projects with
              best user experiences.
            </p>
            {/* <p ref={right}>
                          
            </p> */}
          </section>
        </div>
        <section className={styles.bannerScroll}>
          <section className={styles.bannerScroller}>
            <section> 
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}
