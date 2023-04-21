import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'urql';
import { client } from './service/client';

import { Header } from './componnets/Header'
import { Main } from './componnets/Main';
import { Footer } from './componnets/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider value={client}>
      <div className="w-full min-h-screen flex flex-col justify-between md:max-w-[700px] lg:max-w-[900px]  xl:max-w-[1140px] md:mx-auto p-3 antialiased">
        <Header/>
        <Main/>
        <Footer/>
        
      </div>
    </Provider>
  </React.StrictMode>,
)
