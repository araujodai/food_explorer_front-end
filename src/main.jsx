import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from "./styles/global";

import { AuthProvider } from './hooks/auth';
import { SearchProvider } from './hooks/search';
import { CartProvider } from "./hooks/cart";

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
