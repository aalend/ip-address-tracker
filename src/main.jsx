import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import IpGeoContextProvider from './store/IpGeoContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IpGeoContextProvider>
      <App />
    </IpGeoContextProvider>
  </React.StrictMode>
);
