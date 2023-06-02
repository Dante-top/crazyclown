import React from 'react'
import Image from 'react-bootstrap/Image'

import Carousel from 'react-bootstrap/Carousel'
import MintButton from './MintButton'

import image1 from '../assets/images/1.png'
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'
import image5 from '../assets/images/5.png'
import image6 from '../assets/images/6.png'
import image7 from '../assets/images/7.png'
import image8 from '../assets/images/8.png'
import image9 from '../assets/images/9.png'
import image10 from '../assets/images/10.png'
import image11 from '../assets/images/11.png'
import image12 from '../assets/images/12.png'
import image13 from '../assets/images/13.png'
import image14 from '../assets/images/14.png'
import image15 from '../assets/images/15.png'
import image16 from '../assets/images/16.png'
import image17 from '../assets/images/17.png'
import image18 from '../assets/images/18.png'
import image19 from '../assets/images/19.png'
import image20 from '../assets/images/20.png'
import image21 from '../assets/images/21.png'

import redDotLeftBars from '../assets/zeus-assets/icons/dots/red-dot-left-bars.svg'
import yellowDotBlueLine from '../assets/zeus-assets/icons/dots/yellow-dot-right-shield-blue-line.svg'

interface Props {
  walletConnected?: boolean
}

const defaultProps = {
  walletConnected: false,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Header = (props: Props) => {
  props = { ...defaultProps, ...props }

  return (
    <section className="position-relative bg-light pb-24 mb-lg-60" id="mint">
      <div className="pt-12 mb-lg-24">
        <div className="container text-center">
          <span className="text-info fw-bold">
            What is {'{'}NFT Collection{'}'}
          </span>
          <h2 className="h1 mt-8">Empowering Women</h2>
          <p className="max-w-3xl mx-auto my-12 lead text-muted">
            Every purchase automatically send a portion of the sale directly to a women's charity ETH wallet.
          </p>
          <MintButton walletConnected={props.walletConnected} />
        </div>
      </div>
      <div className="d-none d-lg-block position-absolute start-0 end-0 mx-3" style={{ height: 256 }}>
        <Carousel controls={false} indicators={false} interval={2000}>
          <Carousel.Item>
            <div className="row flex-nowrap">
              <div className="col">
                <Image src={image1} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image2} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image3} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image4} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image5} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image6} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col ">
                <Image src={image7} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row flex-nowrap">
              <div className="col">
                <Image src={image8} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image9} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image10} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image11} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image12} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image13} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image14} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row flex-nowrap">
              <div className="col">
                <Image src={image15} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image16} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image17} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image18} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image19} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col mt-4">
                <Image src={image20} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
              <div className="col">
                <Image src={image21} className="w-100 rounded" style={{ height: 280, objectFit: 'contain' }} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <Image src={redDotLeftBars} className="d-none d-lg-block position-absolute start-0 top-0 mt-24" />
      <Image src={yellowDotBlueLine} className="d-none d-lg-block position-absolute end-0 bottom-0 mb-48" />
    </section>
  )
}

export default Header
