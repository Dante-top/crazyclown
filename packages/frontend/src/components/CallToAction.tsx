import React from 'react'
import MintButton from './MintButton'

interface Props {
  walletConnected?: boolean
}

const defaultProps = {
  walletConnected: false,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CallToAction = (props: Props) => {
  props = { ...defaultProps, ...props }
  return (
    <section className="py-20" style={{ backgroundColor: '#EBF8FF' }}>
      <div className="container">
        <h2 className="mb-8 mb-lg-16 display-1">Empower Women Now</h2>
        <div className="row">
          <div className="col col-lg-7 mb-3 mb-lg-0">
            <p className="lead text-muted mb-1">By minting an empowerment NFT, </p>
            <p className="lead text-muted">we can make a difference. </p>
          </div>
          <div className="col-12 col-lg-auto ms-auto">
            <MintButton walletConnected={props.walletConnected} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
