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
      <div className="w-full min-h-screen relative flex flex-col justify-between md:max-w-[700px] lg:max-w-[900px]  xl:max-w-[1140px] md:mx-auto p-3 antialiased">
        <div className="z-10">
          <Header/>
          <Main/>
          <Footer/>
        </div>
        <div className=" w-[1000px] h-[1000px] rounded-full blur-3xl bg-gradient-to-br from-indigo-600 via-violet-500 to-pink-500 absolute -top-[900px] right-4 translate-x-1/2 translate-y-1/2 opacity-60"/>
        <div className=" w-[700px] h-[700px] rounded-full blur-3xl bg-gradient-to-tl from-indigo-500 to-green-500 absolute top-72 -left-[800px] translate-x-1/2 translate-y-1/2 opacity-60"/>
        
      </div>
    </Provider>
  </React.StrictMode>,
)
