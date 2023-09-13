import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from "./styles/global";

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Details from "./pages/Details"
import NewDish from "./pages/NewDish"
import EditDish from "./pages/EditDish"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
