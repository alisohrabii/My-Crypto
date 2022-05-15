import { useEffect, useState } from "react";
import axios from "axios";
import CryptoService from "../service/CryptoService";
import NewsService from "../service/NewsService";
function UseWebService(sevicetype,requesttype,subUrl,params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //setLoading(true);
    switch (sevicetype) {
        case "CryptoService":
        const service=new CryptoService()
        switch (requesttype) {
            case 'get':
   
                service.get(subUrl,params).then(res=>{setData(res.data)
                  console.log(`fetchhhh${subUrl}`)
                  console.log(res.data)
                }).catch((err) => {
                console.log(`errrrrrr${err}`)
                    setError(err);
                  })
                  .finally(() => {
                    //setLoading(false);
                  });
                
                break;
        
            default:
                break;
        }
            break;
            case "NewsService":
              setLoading(true);
              const servicenews=new NewsService()
              switch (requesttype) {
                  case 'get':
         
                      servicenews.get(subUrl,params).then(res=>{setData(res.data)}).catch((err) => {
                          setError(err);
                        })
                        .finally(() => {
                         setLoading(false);
                        });
                      
                      break;
              
                  default:
                      break;
              }
            break;
    
        default:
            break;
    }
 
  }, [sevicetype,requesttype,params]);

  const gethistoryrefetch = (subUrl) => {
              setLoading(true);
             const service=new CryptoService()
              service.get(subUrl,params).then(res=>{setData(res.data)
  
              }).catch((err) => {
              
                  setError(err);
                })
                .finally(() => {
                  setLoading(false);
                });
              
    
  };
 const  refetchnews=()=>{
   
   setLoading(true);
  const servicenews=new NewsService();
  servicenews.get(subUrl,params).then(res=>{setData(res.data)}).catch((err) => {
    setError(err);
  })
  .finally(() => {
    setLoading(false);
  });


 }

  return { data,error,loading, gethistoryrefetch,refetchnews };
}

export default UseWebService;