import axios from "axios"
import { useContext } from "react"
import { CryptoContext } from "../contexts/CryptoContext"
const header={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '324a167762msh9b2f2a78fe7c2a3p11a94cjsn0484f5a76874'
}
const options4 = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
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

export default class CryptoService {
constructor(props){
this.Url='https://coinranking1.p.rapidapi.com'
}


get (subUrl,params){
   
    const options={
        headers:header,
        method: 'GET',
        url:this.Url+subUrl
        }
    //if(subUrl==''){
    //options.url=this.domin
    //}else{
        
        //    options.url=`${this.domin}${subUrl}`
         
        //}
    
console.log(options.url)
    return axios.request(options)
 

}
post(){}
put(){}
delete(){}





}