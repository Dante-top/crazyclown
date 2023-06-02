import React from 'react'

interface Props {
  message: string
  dismiss: any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NetworkErrorMessage = (props: Props) => {
  const { message, dismiss } = props

  return (
    <div className="alert alert-danger" role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={dismiss}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default NetworkErrorMessage
