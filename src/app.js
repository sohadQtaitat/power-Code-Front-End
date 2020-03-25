import React from 'react';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import Data from './components/data/index.js'
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js';
import {Switch,Route,Link} from "react-router-dom";
import Cours from './components/course/course.js';
import Code from './components/codeEditor/codeEditor.js'
import Chat from './components/chat/chat.js'

const User = props => {
  return (
    <Auth capability="read">

    <Route path='/chat'>
      <Chat/>
    </Route>

    <Route path='/code' >
      <Code/>
    </Route>

      <Route path ='/data'>
      <Data/>
      </Route>
     
      <Route path='/course'>
        <Cours/>
      </Route>
    </Auth>
  );
};

const Editor = props => {
  return (
    <Auth capability="update">
    </Auth>
  );
};

const Admin = props => {
  return (
    <Auth capability="delete">
    </Auth>
  );
};

const App =(props)=> {

   
    return (
     <>
      <Route path='/'>
   
        <Header />
        <Login />
        <hr />
        <User/>
        <Editor />
        <Admin />
        <Footer/>

      </Route>
     </>
    );
  
}

export default App;
