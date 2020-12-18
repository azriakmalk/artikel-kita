import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Routes } from '../config';
import { getArtikel, loadUser } from '../config/Redux/getApi';
import { Store } from '../config/Redux/store';
import './App.css';


function App() {  
  useEffect(()=>{
    Store.dispatch(loadUser())
    Store.dispatch(getArtikel())
  },[])
  return (
  <Provider store={Store}>
    <Routes/>
  </Provider>
  )
}

export default App;
