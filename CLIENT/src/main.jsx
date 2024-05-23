import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { router } from './Routers/Router.jsx'
import {  RouterProvider } from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './Store/store.jsx'

import { ALLUSERS } from './Services/profileApi.jsx'
store.dispatch(ALLUSERS())


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  
)
