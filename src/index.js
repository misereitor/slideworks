import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import Register from './Pages/Register/Register'
import List from './Pages/List/List'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/register' component={Register}></Route>
      <Route exact path='/list/:id' component={List}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
