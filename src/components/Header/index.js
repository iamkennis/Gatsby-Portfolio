import React, { useRef, useState, useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import gsap from 'gsap'

import {
  HeaderWrapper,
  Nav,
  Logo,
  ThemeToggler,
  Hamburger,
  Stick,
  NavToggle,
  Con,
  Social,
} from './styles'

export default function Header({ logo }) {
  const [isToggled, setToggled] = useState(false)
  const tl = useRef()

  // Animating the sticks
  const stickTl = useRef()
  const stick1 = useRef()
  const stick2 = useRef()
  const stick3 = useRef()

  const navToggle = useRef(null)
  const navToggleLinks = useRef(null)
  const header = useRef(null)
  const Link = useRef(null)
  const socialLink = useRef(null)

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
    stickTl.current = gsap.timeline({ paused: true })
    tl.current
      .to(navToggle.current, 0.4, { x: 0, opacity: 1, ease: 'back.out(1.7)' })
      .fromTo(
        navToggleLinks.current,
        0.4,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: true }
      )
      .fromTo(
        socialLink.current,
        0.4,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1 }
      )
      .play() //Animating the sidebar

    // Animate stick
    stickTl.current
      .to(stick3.current, 0.1, { xPercent: -10, opacity: 0 })
      .to(stick2.current, 0.1, { rotate: -45, width: '50px' })
      .to(stick1.current, 0.1, { y: 6, rotate: 45, width: '50px' })

    //    Animating the header on page start
    const headerAnimate = gsap.timeline({ paused: true })
    headerAnimate.fromTo(
      header.current,
      0.4,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1 }
    )
    headerAnimate.play()
  }, [])

  useEffect(() => {
    if (isToggled) {
      stickTl.current.play()
      tl.current.play()
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    } else {
      stickTl.current.reverse()
      tl.current.reverse()
      setTimeout(() => {
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
      }, 700)
    }
  }, [isToggled])

  let websiteTheme
  if (typeof window !== 'undefined') {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const themeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <HeaderWrapper ref={header}>
      <Nav>
        <Logo
          onClick={e => {
            e.preventDefault()
            scrollTo('#banner')
          }}
          style={logo}
        >
          {' '}
          {/* <span style={{ color: 'var(--textInverse)' }} role="logo">
            KENNIS.{' '}
          </span>{' '} */}
        </Logo>
        <ThemeToggler>
          <div onClick={themeToggle}>{theme === 'dark' ? '☀' : '☾'}</div>
        </ThemeToggler>

        <Hamburger onClick={() => setToggled(!isToggled)}>
          <Stick ref={stick1}></Stick>
          <Stick ref={stick2}></Stick>
          <Stick ref={stick3}></Stick>
        </Hamburger>
      </Nav>
      <NavToggle ref={navToggle}>
        <ul className="link" ref={navToggleLinks}>
          <li ref={Link} onClick={() => setToggled(!isToggled)}>
            <a
              href="#about"
              onClick={e => {
                e.preventDefault()
                scrollTo('#about')
              }}
            >
              About
            </a>
          </li>

          <li ref={Link} onClick={() => setToggled(!isToggled)}>
            <a
              href="#project"
              onClick={e => {
                e.preventDefault()
                scrollTo('#project')
              }}
            >
              Project
            </a>
          </li>

          <li ref={Link} onClick={() => setToggled(!isToggled)}>
            <a
              href="#blog"
              onClick={e => {
                e.preventDefault()
                scrollTo('#blog')
              }}
            >
              Blog
            </a>
          </li>

          <li ref={Link} onClick={() => setToggled(!isToggled)}>
            <a
              href="https://drive.google.com/file/d/11iueH3DwwCumOBDjP42Kd-eU_8EExt6P/view"
              id="pen"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>

          <li ref={Link} onClick={() => setToggled(!isToggled)}>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                scrollTo('#contact')
              }}
            >
              Contact
            </a>
          </li>

          <li ref={socialLink} onClick={() => setToggled(!isToggled)}>
            <Con>
              <h3> Connect With Me </h3>
              <p> amodukehindee@gmail.com </p>
            </Con>
            <Social>
              <a
                href="https://github.com/iamkennis/"
                target="_blank"
                rel="noreferrer"
                className="gh"
              >
                GH
              </a>
              <a
                href="https://twitter.com/IamKennis_"
                target="_blank"
                rel="noreferrer"
                className="tw"
              >
                TW
              </a>
              <a
                href="https://www.linkedin.com/in/amodu-kehinde/"
                target="_blank"
                rel="noreferrer"
                className="ln"
              >
                LN
              </a>
              <a
                href="https://iamkennis.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
                className="ln"
              >
                BL
              </a>
            </Social>
          </li>
        </ul>
      </NavToggle>
    </HeaderWrapper>
  )
}
