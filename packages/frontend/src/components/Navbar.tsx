/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'react-bootstrap/Image'
import WalletButton from './WalletButton'
import logo from '../assets/zeus-assets/logo/logo-zeus-red.svg'
import { Link } from 'react-router-dom'

interface Props {
    provider: any
    loadWeb3Modal: any
    logoutOfWeb3Modal: any
}
  
const Navbar = (props: Props):JSX.Element => {
    const { 
        provider,
        loadWeb3Modal,
        logoutOfWeb3Modal
    } = props;

    return (  
    <div>
        <nav className="navbar navbar-light navbar-expand-lg" id="nav">
          <div className="container-fluid">
            <a className="navbar-brand h4 text-decoration-none" href="/">
              <Image src={logo} alt="{NFT Collection}" width="100" />
            </a>
            <div className="d-lg-none">
              <button className="btn btn-sm navbar-burger">
                <svg className="d-block" width={16} height={16} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto me-4">
                <li className="nav-item">
                  <a className="nav-link" href="/#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#nfts">
                    NFTs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#dao">
                    DAO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mynfts">
                    My NFTS
                  </Link>
                </li>
              </ul>
              <div className="d-none d-lg-block">
                <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar