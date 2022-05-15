import React, { useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { useEffect } from 'react';
import CryptoService from './service/CryptoService';
import {  Homepage,  Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
import NewsPage from './components/NewsPage'

import { CryptoContext } from './contexts/CryptoContext';
import UseWebService from './components/usefetch';
import axios from 'axios';
import { ConsoleSqlOutlined } from '@ant-design/icons';

const App = () =>{
  console.log('app start')
  const {currancy,setcurrancy}=useContext(CryptoContext)
 const {data,err}=UseWebService("CryptoService","get",'/coins');
 useEffect(()=>{
   setcurrancy(data)
    console.log('set currancy calledapp renderd')
 }
 ,[data])
 useEffect(()=>{
  setcurrancy(data)
   console.log('app renderd')
}
)
  
return(

  (
    <div className="app">
         <div className="navbar">
<Navbar />
</div>
<div className="main" >
<Layout>
  <div className="routes">
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/exchanges">
    
      </Route>
      <Route exact path="/cryptocurrencies">
        <Cryptocurrencies />
      </Route>
      <Route exact path="/crypto/:coinId">
        <CryptoDetails />
      </Route>
      <Route exact path="/news">
        <NewsPage />
      </Route>
    </Switch>
  </div>
</Layout>
<div className="footer">
  <Typography.Title level={5} style={{ color: 'black', textAlign: 'center' }}>Copyright © 2022
    <Link to="/">
      Crypto.
    </Link> <br />
    All Rights Reserved.
  </Typography.Title>
  <Space>
    <Link to="/">Home</Link>
    <Link to="/exchanges">Exchanges</Link>
    <Link to="/news">News</Link>
  </Space>
</div>
</div>
    </div>
  )
)

}

export default App;
