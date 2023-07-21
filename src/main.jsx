import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/amatic-sc';
import '@fontsource/gemunu-libre'

const theme = extendTheme({
  fonts: {
    body: 'amatic-sc, sans-serif',
    heading: 'gemunu-libre, sans-serif',
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
