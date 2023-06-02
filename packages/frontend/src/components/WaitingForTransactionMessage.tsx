import React from 'react'

interface Props {
  txHash: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const WaitingForTransactionMessage = (props: Props) => {
  const { txHash } = props

  return (
    <div className="alert alert-info" role="alert">
      Waiting for transaction <strong>{txHash}</strong> to be mined
    </div>
  )
}

export default WaitingForTransactionMessage
