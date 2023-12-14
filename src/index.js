import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
/* 
import { Suspense } from 'react';

import { ThreeDots } from 'react-loader-spinner'
 */
import { BrowserRouter } from 'react-router-dom'

/* 
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
  supportedLngs: ['en', 'tk', 'ru'],
  //lng: 'en',
  fallbackLng: "en",
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain', 'sessionStorage'],
    caches: ['cookie'],
  },
  ns: ["default"],
  defaultNS: "default",
  backend: {
    loadPath: '/locales/{{lng}}/translation.json',
  },
  react: { useSuspense: false },
  debug: true,
});
 */

/* 
const Loading = () => {
  return (
    <>
      <div className='loading v_100'>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#800080"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  )
} */

const root = ReactDOM.createRoot(document.getElementById('__react'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
