
import Main from './components/Main'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  tasksReducer  from './reducer/productsReducer';


const store = configureStore({
  reducer:{ tasks: tasksReducer }
})

export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}


