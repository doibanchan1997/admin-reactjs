import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Dashboard from '../dashboard';
import Navbar from '../navabar';
import Sidebar from '../sidebar';
import configureStore from '../../redux/configureStore';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
        <Navbar/>
        <Sidebar/>
        <Dashboard/>
    </Provider>
   
  );
}

export default App;
