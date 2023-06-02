import React from 'react'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

interface Props {
  mintTokens: (quantity: number) => void
  tokenSymbol: string
  loading: boolean
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MintAction = (props: Props) => {
  const { mintTokens, tokenSymbol, loading } = props

  return (
    <section className="py-5">
      <div className="container">
        <form
          onSubmit={(event) => {
            // This function just calls the mintTokens callback with the
            // form's data.
            event.preventDefault()

            const formData = new FormData(event.currentTarget)
            const quantity = formData.get('quantity')

            if (quantity) {
              mintTokens(Number(quantity))
            }
          }}
        >
          <div className="form-group">
            <label>How many? {tokenSymbol}</label>
            <input
              className="form-control"
              type="number"
              defaultValue="1"
              min="1"
              max="5"
              step="1"
              name="quantity"
              placeholder="1"
              required
            />
          </div>
          <div className="form-group mt-5">
            <Button className="btn btn-primary" type="submit">
              {loading ? (
                <>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" className="mr-5" />
                  Minting...
                </>
              ) : (
                'MINT NFT'
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default MintAction
