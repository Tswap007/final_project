import './polyfills'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/amatic-sc';
import '@fontsource/gemunu-libre';

import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { RainbowKitProvider, darkTheme, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from '@wagmi/core/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const infuraApiKey = import.meta.env.VITE_INFURA_API_KEY;
const alchemyApiKey = import.meta.env.VITE_ALCHEMY_API_KEY;


const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: alchemyApiKey }),
    infuraProvider({ apiKey: infuraApiKey }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'WONDERLAND WANDERERS',
  projectId: '7a62a3959e95370783e36542fc37d5a1',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

// Define Chakra theme here
const theme = extendTheme({
  fonts: {
    body: 'amatic-sc, sans-serif',
    heading: 'gemunu-libre, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} theme={darkTheme({ fontStack: 'system', overlayBlur: 'small' })} modalSize='compact'>
            <App />
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
