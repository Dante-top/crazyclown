import React from 'react'
import Image from 'react-bootstrap/Image'

import blueDot from '../assets/zeus-assets/icons/dots/blue-dot-left-bars.svg'
import yellowDot from '../assets/zeus-assets/icons/dots/yellow-dot-right-shield.svg'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FAQ = () => {
  return (
    <section className="position-relative py-20" id="faq">
      <Image src={blueDot} className="d-none d-lg-block position-absolute top-0 start-0 mt-16" />

      <Image src={yellowDot} className="d-none d-lg-block position-absolute bottom-0 end-0 mb-20" />

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto text-center mb-12">
            <span className="small text-info fw-bold">Get your answers</span>
            <h2 className="mt-8 mb-10">FAQ</h2>
            <p className="lead text-muted">If your question is not answered below, please join our Telegram</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {/* <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>When can I purchase?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What is the purchase price?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>When is the reveal?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Where can I see my NFT?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>What is the royalty %?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>What is the first charity?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>How does the DAO & voting work??</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>What makes Empowerment unique?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
