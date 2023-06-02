import React from 'react'

interface Props {
  selectedAddress: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NoTokensMessage = (props: Props) => {
  const { selectedAddress } = props

  return (
    <>
      <p>You don't have tokens to transfer</p>
      <p>
        To get some tokens, open a terminal in the root of the repository and run:
        <br />
        <br />
        <code>npx hardhat --network localhost faucet {selectedAddress}</code>
      </p>
    </>
  )
}

export default NoTokensMessage
