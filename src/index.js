import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './Components/API_Search/ProviderRootStore'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
    <App />
    </StoreProvider>
  

  </React.StrictMode>,
  document.getElementById('root')
);

