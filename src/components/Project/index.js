import React from 'react'
import { Github } from './github'
import './project.css'

const Project = () => {
  return (
    <div className="projects" id="project">
      <h1 className="project-title"> Projects. </h1>
      <p className="project-subtitle">
        {' '}
        I <b>design</b> and <b>Build</b> web Applications.{' '}
      </p>
      <div className="container">
        <div className="card">
          <h1>
            {' '}
            Picker Dice <br /> Game.
          </h1>
          <a
            href="https://picker-dice-game.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            {' '}
            portfolio{' '}
          </a>
          <div className="image-links">
            <a
              href="https://github.com/iamkennis/dice-picker-game"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
        <div className="card">
          <h1>
            {' '}
            Guessing <br /> Number Game.
          </h1>
          <a
            href="https://guessing-number-game.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            {' '}
            portfolio{' '}
          </a>
          <div className="image-links">
            <a
              href="https://github.com/iamkennis/dice-picker-game"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
        <div className="card">
          <h1>
            {' '}
            Guessing <br /> Number Game.
          </h1>
          <a
            href="https://guessing-number-game.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            {' '}
            portfolio{' '}
          </a>
          <div className="image-links">
            <a
              href="https://github.com/iamkennis/dice-picker-game"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
        <div className="card">
          <h1>
            {' '}
            Guessing <br /> Number Game.
          </h1>
          <a
            href="https://guessing-number-game.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            {' '}
            portfolio{' '}
          </a>
          <div className="image-links">
            <a
              href="https://github.com/iamkennis/dice-picker-game"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
