import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';
import FormActivitiesAdd from './pages/FormActivitiesAdd';
import TableTest from './pages/TablesTest';
import FormModifyActivities from './pages/FormModifyActivities';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App/>} />
      <Route path='RegisterUser' element={<RegisterUser/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='FormActivitiesAdd' element={<FormActivitiesAdd/>}/>
      <Route path='FormModifyActivities' element={<FormModifyActivities/>}/>
      <Route path='Tables' element={<TableTest/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
