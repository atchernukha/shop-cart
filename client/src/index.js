import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#61dafb'
    },
    secondary: {
      main: '#da61bf'
    }
  }
})

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
     <App />
     </ThemeProvider>
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

