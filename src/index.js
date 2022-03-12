import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "../src/store"
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>   
     <Provider store={store}>
     <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


