import React from 'react'

interface Props {
  message: string
  dismiss: any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TransactionErrorMessage = (props: Props) => {
  const { message, dismiss } = props

  return (
    <div className="alert alert-danger" role="alert">
      Error sending transaction: {message.substring(0, 100)}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={dismiss}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default TransactionErrorMessage
