
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Loader from './Loader';

const { Title } = Typography;

const LineChart = ({ coinHistory,cryptoloading, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i= coinHistory?.data?.history?.length-1; i >-1; i -= 30) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for ( let i= coinHistory?.data?.history?.length-1 ; i > -1; i -= 30) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
  }
  
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#58d7cf',
        borderColor: '#2bbdbd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
if(cryptoloading ) return <Loader/>
  return (
    <>
    {!cryptoloading &&
    <>
      <Row className="chart-header">    <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
      </>
    }
      </>
  );
};

export default LineChart;
