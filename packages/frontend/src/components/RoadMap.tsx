import React from 'react'

import MintButton from './MintButton'
interface Props {
  walletConnected?: boolean
}

const defaultProps = {
  walletConnected: false,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const RoadMap = (props: Props) => {
  props = { ...defaultProps, ...props }

  return (
    <section className="py-20">
      <div className="container">
        <div className="row mb-16">
          <div className="col-12 col-lg-5 d-flex align-items-center">
            <div className="pe-lg-10">
              <span className="d-inline-block px-2 py-1 small bg-info rounded uppercase text-white">Development</span>
              <h2 className="mt-3 mb-4 h3">Lorem ipsum dolor</h2>
              <span className="d-inline-block mb-6 small text-muted">10 jun 2020 19:40</span>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
          <div className="order-first order-lg-last col-12 col-lg-7 mb-8 mb-lg-0">
            <div style={{ height: 384 }}>
              <img
                className="w-100 h-100 rounded"
                style={{ objectFit: 'cover' }}
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row mb-16">
          <div className="col-12 col-lg-7 mb-8 mb-lg-0">
            <div style={{ height: 384 }}>
              <img
                className="w-100 h-100 rounded"
                style={{ objectFit: 'cover' }}
                src="https://images.unsplash.com/photo-1557804506-d8017c1e4856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex align-items-center">
            <div className="ps-lg-10">
              <span className="d-inline-block px-2 py-1 small bg-info rounded uppercase text-white">Development</span>
              <h2 className="mt-3 mb-4 h3">Lorem ipsum dolor</h2>
              <span className="d-inline-block mb-6 small text-muted">10 jun 2020 19:40</span>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-16">
          <div className="col-12 col-lg-5 d-flex align-items-center">
            <div className="pe-lg-10">
              <span className="d-inline-block px-2 py-1 small bg-info rounded uppercase text-white">Development</span>
              <h2 className="mt-3 mb-4 h3">Lorem ipsum dolor</h2>
              <span className="d-inline-block mb-6 small text-muted">10 jun 2020 19:40</span>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
          <div className="order-first order-lg-last col-12 col-lg-7 mb-8 mb-lg-0">
            <div style={{ height: 384 }}>
              <img
                className="w-100 h-100 rounded"
                style={{ objectFit: 'cover' }}
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row mb-16">
          <div className="col-12 col-lg-7 mb-8 mb-lg-0">
            <div style={{ height: 384 }}>
              <img
                className="w-100 h-100 rounded"
                style={{ objectFit: 'cover' }}
                src="https://images.unsplash.com/photo-1556761175-9c1bafe0f436?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex align-items-center">
            <div className="ps-lg-10">
              <span className="d-inline-block px-2 py-1 small bg-info rounded uppercase text-white">Development</span>
              <h2 className="mt-3 mb-4 h3">Lorem ipsum dolor</h2>
              <span className="d-inline-block mb-6 small text-muted">10 jun 2020 19:40</span>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="col-auto ms-lg-auto">
            <MintButton walletConnected={props.walletConnected} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
