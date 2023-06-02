/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
interface Props {
  provider: any
  loadWeb3Modal: any
  logoutOfWeb3Modal: any
}

const WalletButton = (props: Props): JSX.Element => {
  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = props
  return (
    <button
      className="btn btn-info d-block d-sm-inline-block mb-2 mb-sm-0 me-sm-4"
      type="button"
      onClick={() => {
        if (!provider) {
          loadWeb3Modal()
        } else {
          logoutOfWeb3Modal()
        }
      }}
    >
      {!provider ? 'Connect Wallet' : 'Disconnect Wallet'}
    </button>
  )
}

export default WalletButton
