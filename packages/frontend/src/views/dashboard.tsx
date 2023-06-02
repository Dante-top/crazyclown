/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'

// import GET_TRANSFERS from './graphql/subgraph'
import Header from '../components/Header'
import Features from '../components/Features'
import Gallery from '../components/Gallery'
import TimeLine from '../components/TimeLine'
import RoadMap from '../components/RoadMap'
import FAQ from '../components/FAQ'
import CallToAction from '../components/CallToAction'
import MintAction from '../components/MintAction'
import Footer from '../components/Footer'
import MintNumber from '../components/MintNumber'
interface Props {
    provider: any
    nftData: any
    mintedNum: number
    mintLoading: boolean
    _mintTokens: any
}

function Dashboard(props: Props): JSX.Element {
  const {
      provider,
      nftData,
      mintedNum,
      mintLoading,
      _mintTokens
  } = props;
  return (
    <>
      <Header />
      {
        nftData &&
        <MintNumber 
          mintedNum={mintedNum} 
          tokenSymbol={nftData.symbol} 
          maxSupply={nftData.maxSupply}
        />
      }
      {
        provider && nftData && 
        <MintAction 
          mintTokens={(quantity: number) => _mintTokens(quantity)} 
          tokenSymbol={nftData.symbol} 
          loading={mintLoading}
        />
      }
      <Features />
      <Gallery />
      <TimeLine />
      <RoadMap />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Dashboard;
