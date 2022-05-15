import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined,BarChartOutlined,PieChartOutlined, DollarCircleOutlined,HeatMapOutlined , FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Loader from './Loader';
import LineChart from './LineChart';
import UseWebService from './usefetch';
import { useEffect } from 'react';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();

  const [timeperiod, setTimeperiod] = useState('7d');
  const { data } =UseWebService('CryptoService','get',`/coin/${coinId}`);
  const { data: coinHistory,loading:cryptoloading,gethistoryrefetch } =UseWebService('CryptoService','get',`/coin/${coinId}/history?timePeriod=${timeperiod}`);
  
 
const cryptoDetails = data?.data?.coin;
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
///useEffect(()=>{
////refetch('CryptoService','get',`/coin/${coinId}/history?timeperiod=${timeperiod}`)

//},[timeperiod])
  const stats = [
    { title: 'Current Price', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined style={{ fontSize: '36px', color: '#43AEE6' }} /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined  style={{ fontSize: '36px', color: '#43AEE6' }}/> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined style={{ fontSize: '36px', color: '#43AEE6' }} /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined  style={{ fontSize: '36px', color: '#43AEE6' }}/> },
    { title: 'All-time-high(DA)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined style={{ fontSize: '36px', color: '#43AEE6' }} /> },
  ];

  const otherStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon:<BarChartOutlined style={{ fontSize: '24px', color: '#68bcea' }}/> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <PieChartOutlined style={{ fontSize: '24px', color: '#68bcea' }} /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined style={{ fontSize: '24px', color: '#68bcea' }}  /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <HeatMapOutlined  style={{ fontSize: '24px', color: '#68bcea' }} /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined style={{ fontSize: '24px', color: '#68bcea' }} /> },
  ];
  useEffect(()=>{
console.log('detail renders')


  })
  if (!data) return <Loader />;
  return (
<div>
    {data &&  <div >
 
     <Row  gutter={14}  >   
      
       <Col span={8} >
         <div className='state-container2' >
              <Row gutter={16} justify="center">
                <Col>
                  <h2><b>{cryptoDetails?.name}</b></h2>
                </Col>
                <Col>
                  <img className="crypto-image" width="32px" src={cryptoDetails?.iconUrl} />
                </Col>
              </Row>
                {stats.map(({ icon, title, value }) => (
                  <Col className="coin-stats" key={title}>
                    <Col className="coin-stats-name">
                      <Text>{icon}</Text>
                      <h4 ><b>{title}</b></h4>
                    </Col>
                    <h2 ><b>{value}</b></h2>
                  </Col>
                ))}
          </div>
          <div className='state-container2'>
                {otherStats.map(({ icon, title, value }) => (
                  <Col className="coin-stats" key={title}>
                    <Col className="coin-stats-name">
                      <Text>{icon}</Text>
                      <h4><b>{title}</b></h4>
                    </Col>
                    <Text>{value}</Text>
                  </Col>
                ))}
          </div>
          <Col className="coin-links cryptodetail-items" >
          <Title level={3} className="coin-details-heading">{cryptoDetails.name} Links</Title>
          {cryptoDetails.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
          </Col>

      </Col> 
      <Col span={16} >
      <div className='cryptodetail-items'>
          <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} cryptoloading={cryptoloading} />
          <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => gethistoryrefetch(`/coin/${coinId}/history?timePeriod=${value}`)}>
            {time.map((date) => <Option key={date}>{date}</Option>)}
          </Select>
        </div>

          
     
      <div className='cryptodetail-items'>
      
          <Title level={3} className="coin-details-heading">What is {cryptoDetails.name}?</Title>
          {HTMLReactParser(cryptoDetails.description)}
       
       
      </div>
    
      
      </Col>
    
     </Row>
    






    </div> }
    </div>
  );
};

export default CryptoDetails;
