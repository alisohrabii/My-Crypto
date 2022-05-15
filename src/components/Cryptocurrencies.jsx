import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Loader from './Loader';
import { useContext } from 'react';
import { CryptoContext } from '../contexts/CryptoContext';
import {CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons'
 const Cryptocurrencies = ({ simplified }) => {
  
  const count = simplified ? 10 : 100;
  const { currancy } = useContext(CryptoContext);

  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');
console.log('jjjjjjjjooo');
console.log(currancy);
  useEffect(() => {
    setCryptos(currancy?.data?.coins);

    const filteredData = currancy?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [currancy, searchTerm]);

  

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
 
        </div>
  
      )}
          <Row gutter={15} style={{padding:"10px 8px 10px 20px", margin:"0 5px" , fontWeight:'bold',fontSize:'13px',borderTop:'1px solid #cecece',borderBottom:'1px solid #cecece',color:"#515151"}}>
            <Col span={2}>#Rank</Col>
            <Col span={5}>Name</Col>
            <Col span={2}>Price</Col>
            <Col span={3}>24h%</Col>
            <Col span={4}>Market Cap</Col>
            <Col span={3}>Volume(24h)</Col>
            <Col span={4}>SparkLine</Col>
          </Row>




        {cryptos?.map((currency) => (
 
        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
          <Row gutter={15} align="middle" style={{padding:"0px 8px 0px 20px", margin:"0 5px" , fontWeight:'bold',fontSize:'14px',minHeight:'60px',borderTop:'1px solid #cecece',borderBottom:'1px solid #cecece',color:"#515151"}}>
            <Col span={2}>  {currency.rank}</Col>
            <Col span={5}><img className="crypto-image" width='30px' src={currency.iconUrl} /><h3 style={{display:'inline',margin:"0 4px"}}>{currency.name}</h3><h3 style={{display:'inline',margin:"0 0px",color:'#969696'}}>{currency.symbol}</h3></Col>
            <Col span={2}> {millify(currency.price)} $ </Col>
            <Col span={3}>{parseFloat(currency.change) >=0 ? (<span style={{ color:"#33b562"}}><CaretUpOutlined />{currency.change}%</span>):(<span style={{color:'#d74040'}}><CaretDownOutlined  />{currency.change}%</span>)}</Col>
            <Col style={{color:"#6c6c6c"}} span={4}>{Math.round((parseInt(currency.marketCap))/1000).toLocaleString(undefined, { maximumFractionDigits: 3 })}K</Col>
            <Col span={3}>{millify(currency["24hVolume"])}</Col>
            <Col span={4}>
               {currency.sparkline[26]-currency.sparkline[0]>=0?(<div><Sparklines data={currency.sparkline}   height={40} margin={5}><SparklinesLine   style={{ strokeWidth: 3, stroke: "#19c28a", fill: "#5fefa2" }}  /></Sparklines></div>):(<div><Sparklines data={currency.sparkline}   height={60} margin={5}><SparklinesLine  style={{ strokeWidth: 3, stroke: "#cd3a3a", fill: "#ed9a9a" }}  /></Sparklines></div>)}
              </Col>
          </Row>

  
        
              
             
               
          </Link>
     
        ))}
   
    </>
  );
};

export default Cryptocurrencies;
