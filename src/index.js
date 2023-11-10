import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/theme';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// reportWebVitals();