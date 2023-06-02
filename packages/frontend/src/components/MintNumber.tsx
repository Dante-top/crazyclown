import React from 'react'
interface Props {
  mintedNum: number
  maxSupply: number
  tokenSymbol: string
}

const MintNumber = (props: Props): JSX.Element => {
  const { mintedNum, maxSupply, tokenSymbol } = props
  return (
    <div className="container">
      <h4>
        {mintedNum}/{maxSupply} {tokenSymbol} Minted
      </h4>
    </div>
  )
}

export default MintNumber
