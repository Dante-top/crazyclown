/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useEffect, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'
import Portis from '@portis/web3'
import Authereum from 'authereum'
import Fortmatic from 'fortmatic'

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID = 'INVALID_INFURA_KEY'

const NETWORK_NAME = 'mainnet'

function useWeb3Modal() {
  const [provider, setProvider] = useState<any>()
  const [autoLoaded, setAutoLoaded] = useState(false)
  // const { autoLoad = true, infuraId = INFURA_ID, NETWORK = NETWORK_NAME } = config;

  const autoLoad = true
  const infuraId = INFURA_ID
  const NETWORK = NETWORK_NAME

  // Coinbase walletLink init
  const walletLink = new WalletLink({
    appName: 'coinbase',
  })

  // WalletLink provider
  const walletLinkProvider = walletLink.makeWeb3Provider(`https://mainnet.infura.io/v3/${INFURA_ID}`, 1)

  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal = new Web3Modal({
    network: NETWORK,
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId,
        },
      },
      'custom-walletlink': {
        display: {
          logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
          name: 'Coinbase',
          description: 'Connect to Coinbase Wallet (not Coinbase App)',
        },
        package: walletLinkProvider,
        connector: async (provider) => {
          await provider.enable()
          return provider
        },
      },
      portis: {
        display: {
          logo: 'https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png',
          name: 'Portis',
          description: 'Connect to Portis App',
        },
        package: Portis,
        options: {
          id: '6255fb2b-58c8-433b-a2c9-62098c05ddc9',
        },
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: 'pk_live_5A7C91B2FC585A17', // required
        },
      },
      authereum: {
        package: Authereum, // required
      },
    },
  })

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect()
    setProvider(new Web3Provider(newProvider))
  }, [web3Modal])

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      window.location.reload()
    },
    [web3Modal]
  )

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal()
      setAutoLoaded(true)
    }
  }, [autoLoad, autoLoaded, loadWeb3Modal, setAutoLoaded, web3Modal.cachedProvider])

  return [provider, loadWeb3Modal, logoutOfWeb3Modal]
}

export default useWeb3Modal
