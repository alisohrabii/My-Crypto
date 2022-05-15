import { createContext,useState ,useEffect} from "react";
export const NewsContext=createContext(null);



const NewsContextProvider = (props) => {
  
const[news,setnews]=useState(null);
useEffect(()=>{
 
    console.log("news Context renders")
   }
    )

  return (
   
      <NewsContext.Provider value={{news,setnews}}>
        {props.children}
      </NewsContext.Provider>
    )


};


export default NewsContextProvider;