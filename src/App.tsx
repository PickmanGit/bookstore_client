import {Row,Button,Col, Alert, ThemeProvider, Container, Form, FormControl} from 'react-bootstrap';
import { Dispatch, FC, useEffect, useState } from 'react';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { pageOptions, PublicRoutes } from './InitialValues';
import './App.css';

import Footer from './components/footer/Footer';

import { useRoutes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from './store/hooks';
import { checkUsers, loginUsers } from './store/action-creators/user';
import jwtDecode from 'jwt-decode';
import { addUserOptions } from './store/reducer/userReducer';
import AlertGlobalMessage from './components/alertMessage/AlertGlobalMessage';
import { removeMessage } from './store/reducer/messageReducer';




function App(){

  const routes = useRoutes([...PublicRoutes])
  const {message,type} = useAppSelector(state=>state.message)
  const dispatch = useAppDispatch()
 
  useEffect(()=>{
      if(localStorage.getItem('userJwt')){
        dispatch(checkUsers())
      }
  },[])

  const removeWarning = ()=>{
      dispatch(removeMessage())
  }

  return (
    <div className='App'>
        <Header/>
            <div className="content">
                {message && <AlertGlobalMessage description={message} type={type} setShow={removeWarning} /> }
                    {routes}    
                    
            </div>
       <Footer/> 
    </div>
  );
}

export default App;
