import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "typeface-roboto";
import { AuthContextProvider} from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

const securityHeaders = {
  'Content-Security-Policy': "script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self' https://sap-project-api.herokuapp.com https://warm-strudel-d45ad5.netlify.app; font-src 'self'; object-src 'none'; media-src 'self'",

  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

Object.entries(securityHeaders).forEach(([header, value]) => {
  const headerElement = document.querySelector('head');
  const metaElement = document.createElement('meta');
  metaElement.setAttribute('http-equiv', header);
  metaElement.setAttribute('content', value);
  headerElement.appendChild(metaElement);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
