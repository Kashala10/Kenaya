import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import store from '../redux/store/store';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
