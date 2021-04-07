import React, { useRef } from 'react'

import './Education.css'

export default function Education() {
  const eduContainer = useRef(null)
  const education = useRef(null)

  return (
    <div className="education" ref={eduContainer} id="education">
      <div ref={education}>
        <h1>Education.</h1>
        <h4>Udemy</h4>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <h4>Pluralsight</h4>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}
