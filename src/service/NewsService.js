import axios from "axios"
import { useContext } from "react"
import { NewsContext } from "../contexts/NewsContext"
const header={
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '324a167762msh9b2f2a78fe7c2a3p11a94cjsn0484f5a76874'
}
const options4 = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '324a167762msh9b2f2a78fe7c2a3p11a94cjsn0484f5a76874'
    }
  };

export default class NewsService {
constructor(props){
this.Url='https://bing-news-search1.p.rapidapi.com'
}


get (subUrl,params){
    console.log(subUrl)
    const options={
        headers:header,
        method: 'GET',
        url:this.Url+subUrl
        }
    return axios.request(options)
}
post(){}
put(){}
delete(){}
}