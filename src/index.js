import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from './axios'

axios.interceptors.request.use(request => {
  console.log(request)
  // I can intercept every request and do stuff proxy
  return request
}, error => {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  console.log(response)
  // I can intercept every request and do stuff proxy
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
