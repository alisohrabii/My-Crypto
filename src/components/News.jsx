
import React, { useRef, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import Loader from './Loader';
import UseWebService from './usefetch';
import { useEffect } from 'react';
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [existnews, setexistnews] = useState(false);
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = UseWebService('CryptoService',"get",'/coins?limit=100');
  const count=simplified ? 6 : 12;
  const { data: cryptoNews,loading:newsLoading,refetchnews } = UseWebService('NewsService',"get",`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`);


if(newsLoading || !cryptoNews?.value) return <Loader/>
  return (
    <div>
      {!newsLoading && cryptoNews?.value &&
  
  <Swiper
  slidesPerView={3}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
>

      {cryptoNews.value.map((news, i) => (
        <SwiperSlide>
          <a href={news.url} target="_blank" rel="noreferrer">
            <div className="news-card">
              <div style={{display:'flex'}}>
              <div className="news-image-container"> <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" /></div>
                <h4><p>{news.name.length > 90 ? `${news.name.substring(0, 90)}...` : news.name}</p></h4>

              </div>
                
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
            </div>
          </a>
         
        </SwiperSlide>
      ))}
     </Swiper>
}
    </div>
  );
};

export default News;



 