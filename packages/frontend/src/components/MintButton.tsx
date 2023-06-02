import React from 'react'
import Button from 'react-bootstrap/Button'

interface Props {
  walletConnected?: boolean
}

const defaultProps = {
  walletConnected: false,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MintButton = (props: Props) => {
  props = { ...defaultProps, ...props }

  return (
    <div className="container">
      {props.walletConnected === true ? (
        <Button size="lg" variant="info" className="pb-3 pt-5">
          <p className="fs-2 fw-bold ">Mint Now</p>
        </Button>
      ) : (
        <a className="btn btn-info btn-lg d-block d-sm-inline-block pb-5 pt-5 mb-2 mb-sm-0 me-sm-4" href="#nav">
          <p className="fs-2 fw-bold ">Connect Wallet</p>
        </a>
      )}
    </div>
  )
}

export default MintButton
