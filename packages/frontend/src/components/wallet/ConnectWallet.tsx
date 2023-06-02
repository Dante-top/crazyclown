import React from 'react'

import NetworkErrorMessage from '../NetworkErrorMessage'

interface Props {
  connectWallet: any
  networkError: any
  dismiss: any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ConnectWallet = (props: Props) => {
  const { connectWallet, networkError, dismiss } = props

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && <NetworkErrorMessage message={networkError} dismiss={dismiss} />}
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-info d-block d-sm-inline-block mb-2 mb-sm-0 me-sm-4" type="button" onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet
