import React from 'react'
import { Link } from 'gatsby'
import {
  FooterWrapper,
  IntroFooter,
  Container,
  ContainerHeader,
  Linked,
  OutroFooter,
  FirstIntro,
  LeftOutro,
  RightOutro,
} from './styles.js'

const getYear = new Date().getFullYear()

export default function Footer() {
  return (
    // Complete this section with the contact route with https://cuberto.com/services/
    <FooterWrapper>
      <IntroFooter>
        <Container id="contact">
          <ContainerHeader>Have an idea?</ContainerHeader>
          <Linked>
            <Link to="#">Tell me about it!</Link>
          </Linked>
        </Container>
      </IntroFooter>

      <OutroFooter>
        <FirstIntro>
          <div>
            <h1>Email:</h1>
            <p> amodukehindee@gmail.com </p>
          </div>
          <hr />
          <div>
            <h1>Phone:</h1>
            <p> +2348108444864 </p>
          </div>
        </FirstIntro>
        <LeftOutro>
          <a
            href="https://github.com/iamkennis"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            GitHub{' '}
          </a>
          <a
            href="https://twitter.com/IamKennis_"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Twitter{' '}
          </a>
          <a
            href="https://www.linkedin.com/in/amodu-kehinde/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Linkedin{' '}
          </a>
        </LeftOutro>
        <RightOutro>
          <p>&copy; {getYear} amodukehinde</p>
        </RightOutro>
      </OutroFooter>
    </FooterWrapper>
  )
}
