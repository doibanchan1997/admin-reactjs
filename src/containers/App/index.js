import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {Provider} from 'react-redux';
import Dashboard from '../Dashboard';
import Navbar from '../Navabar';
import Sidebar from '../Sidebar';
import configureStore from '../../redux/configureStore';
import FormCommon from '../../components/FormCommon';
import routes from './../../routes';
import GlobalLoading from '../../components/globalLoading';

// show menu component  
let showContentMenu = (route) =>{
  let result = null;
  if(routes.length>1){
    result = routes.map((item, index)=>{
      return(
        <Route
          key={index}
          path={item.path}
          exact = {item.exact}
          component = {item.main}
        />
      )
    })
  }
  return result;
} 
function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
        <Router>
          <GlobalLoading/>
          <Navbar/>
          <Sidebar/>
          <FormCommon/>
          <Switch>
          {showContentMenu(routes)}
          </Switch>
        </Router>
    </Provider>
   
  );
}

export default App;
