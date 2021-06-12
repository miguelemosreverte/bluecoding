
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import {store} from './app/store'


import {GifSearch} from './features/gif_search/GifSearch'
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <GifSearch />
  </Provider>,
  rootElement
)