import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import UseWebService from './usefetch';

const { Title } = Typography;

const Homepage = () => {
  const { data,loading } = UseWebService("CryptoService","get",`/coins?limit=${10}`);
  const globalStats = data?.data?.stats;

  if (!globalStats) return <Loader />;

  return (
    <div >
    { globalStats && 
            <div >
                <div style={{padding:'10px',background:"#FFFF ", backgroundImage: 'linear-gradient(to bottom,rgb(248, 250, 253),rgb(255, 255, 255))'}}>
                    <h3 style={{marginLeft:"9px",borderBottom:"1px solid gray" , display:"inline ", padding:'1px'}}>Latest Crypto News</h3>

                    <News />
                    <div className="global-state" >
                    <h3  >Global Crypto Stats</h3>
                    <hr></hr>
                    <Row gutter={[32,10]}>
                      <Col span={8}><b>Total Cryptocurrencies :</b> {(parseInt(globalStats.total)).toLocaleString(undefined, { maximumFractionDigits: 2 })} </Col>
                      <Col span={8}><b> Exchanges :</b> {millify(globalStats.totalExchanges)} </Col>
                      <Col span={8}><b> Market Cap : </b> {(parseInt(globalStats.totalMarketCap)).toLocaleString(undefined, { maximumFractionDigits: 2 })}</Col>
                      <Col span={8}><b> 24h Volume" : </b>{`$${millify(globalStats.total24hVolume)}`} </Col>
                      <Col span={8}><b>Total Cryptocurrencies :</b> {(parseInt(globalStats.total)).toLocaleString(undefined, { maximumFractionDigits: 2 })} </Col>
                      <Col span={8}><b>Total Markets :</b>{(parseInt(globalStats.totalMarkets)).toLocaleString(undefined, { maximumFractionDigits: 2 })}</Col>
                    </Row>
                </div>
                </div>
               
              
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <h3>   Top Cryptos In The World</h3>
                <h3><Link to="/cryptocurrencies">Show more</Link></h3>
              </div>
              <Cryptocurrencies simplified />
             
            
            </div>
    }
   
</div>
  )
};

export default Homepage;
