import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/roboto';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import './style/index.css';
import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);
