import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

const jsx = (
      <Provider store = {store}>
        <App />
      </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    { jsx }
  </React.StrictMode>,
  document.getElementById('root')
);
