/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'
import { Contract } from '@ethersproject/contracts'
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import useWeb3Modal from './hooks/useWeb3Modal'
import { ethers } from 'ethers'
import toast from 'react-hot-toast'

import ABIS from './contracts/abis/deployments.json';

import Navbar from './components/Navbar'
import Dashboard from './views/dashboard'
import MyNFTView from './views/MyNFT';

import { ChainList } from './constants';

function App(): JSX.Element {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal()
  // const [transData, setTransData] = useState<any>()
  const [nftData, setNftData] = useState<any>()
  const [contract, setContract] = useState<any>()
  const [mintedNum, setMintedNum] = useState<number>(0)
  const [mintLoading, setMintLoading] = useState(false)
  const [myTokenList, setMyToken] = useState<any>([]);

  useEffect(() => {
    if (!provider) readOnChainData()
  }, [])

  useEffect(() => {
    if (provider) {
      loadNFTContract()
    }
  }, [provider])

  const loadNFTContract = async () => {
    const { chainId } = await provider.getNetwork();
    const abi:any = ABIS
    const chainName = ChainList[chainId];
    if(abi[chainId]) {
      const Info = abi[chainId][chainName]
      const ABIList = Info['contracts']
      const _abi = ABIList['NFT']['abi']
      const address = ABIList['NFT']['address']
      const signer = provider.getSigner()
      const _nftContract = new ethers.Contract(address, _abi, signer)
      setContract(_nftContract)
  
      loadInfo(_nftContract)
  
      // Get Total Minted
      const minted = await _nftContract.totalSupply()
      setMintedNum(minted.toNumber())
    } else {
      toast.error('wrong network!')
    } 
  }

  const readOnChainData = async () => {
   try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const { chainId } = await provider.getNetwork();
      const abi:any = ABIS
      const chainName = ChainList[chainId];
      if(abi[chainId]) {
        const Info = abi[chainId][chainName]
        const ABIList = Info['contracts']
        const _abi = ABIList['NFT']['abi']
        const address = ABIList['NFT']['address']
        const signer = provider.getSigner()
        const _nftContract = new ethers.Contract(address, _abi, signer)
        setContract(_nftContract)
    
        loadInfo(_nftContract)
    
        // Get Total Minted
        const minted = await _nftContract.totalSupply()
        setMintedNum(minted.toNumber())
      } else {
        toast.error('wrong network!')
      } 
    } catch (err) {
      console.log(err)
    }  
  }

  const loadInfo = async (contract: Contract) => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    let price = await contract.price()
    const maxSupply = await contract.maxSupply()
    price = ethers.utils.formatUnits(price)
    setNftData({
      name,
      symbol,
      price,
      maxSupply: maxSupply.toNumber(),
    })
  }

  const loadMyNFTs = async (contract: Contract) => {
		const accounts = await (window as any).ethereum.request({
			method: 'eth_requestAccounts',
		})
    const _myTokenList: any[] = [];
    if(accounts[0]) {
      const tokenList = await contract.walletOfOwner(accounts[0])
      for(let i = 0; i < tokenList.length; i++) {
        const tokenId = tokenList[i]
        const tokenURI = await contract.tokenURI(tokenId)
        const data = await fetch(tokenURI)
        const metaData = await data.json()
        _myTokenList.push({
          tokenId,
          ...metaData
        }) 
      }
    }
    setMyToken(_myTokenList);
  }

  // This method just clears part of the state.
  function _dismissTransactionError() {
    // setTransData({ transactionError: undefined })
  }

  const _mintTokens = async (quantity: number) => {
    // // Sending a transaction is a complex operation:
    // //   - The user can reject it
    // //   - It can fail before reaching the ethereum network (i.e. if the user
    // //     doesn't have ETH for paying for the transactions gas)
    // //   - It has to be mined, so it isn't immediately confirmed.
    // //     Note that some testing networks, like Hardhat Network, do mine
    // //     transactions immediately, but your dapp should be prepared for
    // //     other networks.
    // //   - It can fail once mined.
    // //
    // // This method handles all of those things, so keep reading to learn how to
    // // do it.
    try {
      // If a transaction fails, we save that error in the component's state.
      // We only save one such error, so before sending a second transaction, we
      // clear it.
      _dismissTransactionError()
      // We send the transaction, and save its hash in the Dapp's state. This
      // way we can indicate that we are waiting for it to be mined.
      setMintLoading(true)
      const totalPrice = quantity * nftData.price
      const tx = await contract.mint(quantity, { value: ethers.utils.parseEther(totalPrice.toString()) })
      // We use .wait() to wait for the transaction to be mined. This method
      // returns the transaction's receipt.
      const receipt = await tx.wait()
      // The receipt, contains a status flag, which is 0 to indicate an error.
      if (receipt.status === 0) {
        // We can't know the exact error that made the transaction fail when it
        // was mined, so we throw this generic one.
        throw new Error('Transaction failed')
      }
      toast.success('Successfully minted')

      // Update Total Minted
      const minted = await contract.totalSupply()
      setMintedNum(minted.toNumber())

      // If we got here, the transaction was successful, so you may want to
      // update your state. Here, we update the user's balance.
      // await _updateBalance()
    } catch (error: any) {
      const { message } = error
      toast.error(message)
      // We check the error code to see if this error was produced because the
      // user rejected a tx. If that's the case, we do nothing.
      if (error === 'ERROR_CODE_TX_REJECTED_BY_USER') {
        return
      }
      // Other errors are logged and stored in the Dapp's state. This is used to
      // show them to the user, and for debugging.
      // setTransData({ transactionError: error })
    } finally {
      // If we leave the try/catch, we aren't sending a tx anymore, so we clear
      // this part of the state.
    }
    setMintLoading(false)
  }
  return (
    <>
      <Router>
        <Navbar 
          provider={provider} 
          loadWeb3Modal={loadWeb3Modal} 
          logoutOfWeb3Modal={logoutOfWeb3Modal} 
        />
        <Switch>
          <Route path="/mynfts">
            <MyNFTView myTokenList={myTokenList}/>
          </Route>
          <Route path="/">
            <Dashboard 
                provider={provider}
                nftData={nftData}
                mintedNum={mintedNum}
                mintLoading={mintLoading}
                _mintTokens={_mintTokens}
            />
          </Route>
        </Switch>
      </Router>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: '17px',
          },
        }}
      />
    </>
  )
}

export default App
