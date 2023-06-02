import React from 'react'
import Image from 'react-bootstrap/Image'

import image22 from '../assets/images/22.png'
import image23 from '../assets/images/23.png'
import image24 from '../assets/images/24.png'
import image25 from '../assets/images/25.png'
import image26 from '../assets/images/26.png'
import image27 from '../assets/images/27.png'
import image28 from '../assets/images/28.png'
import image29 from '../assets/images/29.png'
import image30 from '../assets/images/30.png'
import image31 from '../assets/images/31.png'

import MintButton from './MintButton'
interface Props {
  walletConnected?: boolean
}

const defaultProps = {
  walletConnected: false,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Gallery = (props: Props) => {
  props = { ...defaultProps, ...props }

  return (
    <section className="pb-20" id="nfts">
      <div className="container">
        <div className="mb-6 mb-lg-14 row align-items-end justify-content-between">
          <div className="max-w-3xl mb-4 mb-lg-0">
            <span className="small text-info fw-bold">What's new at Shuffle</span>
            <h2 className="mt-8">Empowerments</h2>
          </div>
          <div className="col-auto ms-lg-auto">
            <MintButton walletConnected={props.walletConnected} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-1">
            <Image src={image22} className="img-fluid w-100 rounded" style={{ height: 400, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-4 p-1">
            <Image src={image23} className="img-fluid w-100 rounded" style={{ height: 400, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-4 p-1">
            <Image src={image24} className="img-fluid w-100 rounded" style={{ height: 400, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-3 p-1">
            <Image src={image25} className="img-fluid w-100 rounded" style={{ height: 275, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-3 p-1">
            <Image src={image26} className="img-fluid w-100 rounded" style={{ height: 275, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-3 p-1">
            <Image src={image27} className="img-fluid w-100 rounded" style={{ height: 275, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-3 p-1">
            <Image src={image28} className="img-fluid w-100 rounded" style={{ height: 275, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-4 p-1">
            <Image src={image29} className="img-fluid w-100 rounded" style={{ height: 400, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-4 p-1">
            <Image src={image30} className="img-fluid w-100 rounded" style={{ height: 400, objectFit: 'contain' }} />
          </div>
          <div className="col-12 col-md-4 p-1">
            <Image src={image31} className="img-fluid w-100 rounded" style={{ height: 400, objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
