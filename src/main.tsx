import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as UserProvider } from './user/context';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider >

        <App />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
)
