import React from 'react'
import { Github } from './github'
import './blog.css'

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <h1 className="blog-title">Blog. </h1>
      <p className="blog-subtitle">
        {' '}
        I <b>write</b> Articles.{' '}
      </p>
      <div className="container">
        <div className="card">
          <h1>
            {' '}
            The complication of
            <br /> "this" keyword.
          </h1>
          <a
            href="https://iamkennis.hashnode.dev/the-complications-of-this-keywords-cklo1kxi0035k95s1c76z0fa8"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            {' '}
            blog{' '}
          </a>
          <div className="image-links">
            <a
              href="https://iamkennis.hashnode.dev/the-complications-of-this-keywords-cklo1kxi0035k95s1c76z0fa8"
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

export default Blog
