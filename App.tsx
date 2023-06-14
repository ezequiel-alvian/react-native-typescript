
import Main from './components/Main'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  productsReducer  from './reducer/productsReducer';


const store = configureStore({
  reducer:{ products: productsReducer }
})

export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}


