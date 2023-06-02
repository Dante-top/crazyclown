import React from 'react'

import MintButton from './MintButton'
interface Props {
  walletConnected?: boolean
}

const defaultProps = {
  walletConnected: false,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TimeLine = (props: Props) => {
  props = { ...defaultProps, ...props }

  return (
    <section className="py-20">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-12 mb-lg-0">
            <span className="small text-info fw-bold">What's new at Shuffle</span>
            <h2 className="mt-8 mb-10">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
            <p className="mb-12 lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet
              orci.
            </p>
            {/* <a className="btn btn-primary" href="#">Activate Demo</a> */}
            <div className="col-auto ms-lg-auto">
              <MintButton walletConnected={props.walletConnected} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="bg-light rounded px-5 px-lg-10">
              <div className="py-8 border-bottom">
                <div className="d-flex align-items-start">
                  <span
                    className="me-6 flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle bg-info text-white"
                    style={{ width: 48, height: 48 }}
                  >
                    1
                  </span>
                  <div>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
              <div className="py-8 border-bottom">
                <div className="d-flex align-items-start">
                  <span
                    className="me-6 flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle bg-warning text-white"
                    style={{ width: 48, height: 48 }}
                  >
                    2
                  </span>
                  <p className="text-muted">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
              <div className="py-8 border-bottom">
                <div className="d-flex align-items-start">
                  <span
                    className="me-6 flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle bg-danger text-white"
                    style={{ width: 48, height: 48 }}
                  >
                    3
                  </span>
                  <div>
                    <p className="text-muted">
                      Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 border-bottom">
                <div className="d-flex align-items-start">
                  <span
                    className="me-6 flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle bg-danger text-white"
                    style={{ width: 48, height: 48 }}
                  >
                    3
                  </span>
                  <div>
                    <p className="text-muted">
                      Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 border-bottom">
                <div className="d-flex align-items-start">
                  <span
                    className="me-6 flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle bg-danger text-white"
                    style={{ width: 48, height: 48 }}
                  >
                    3
                  </span>
                  <div>
                    <p className="text-muted">
                      Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8">
                <div className="d-flex align-items-start">
                  <span
                    className="me-6 flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle bg-danger text-white"
                    style={{ width: 48, height: 48 }}
                  >
                    3
                  </span>
                  <div>
                    <p className="text-muted">
                      Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
