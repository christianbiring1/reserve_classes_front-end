import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
          <ToastContainer />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
