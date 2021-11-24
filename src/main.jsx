/* eslint-env browser */
import './index.css'
import { App } from './app'
import { Provider } from 'react-redux'
import { render } from 'preact'
import { store } from './redux/store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
