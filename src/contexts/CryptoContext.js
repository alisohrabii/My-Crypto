

import { createContext,useEffect,useState } from "react";
export const CryptoContext=createContext(null);



const CryptoContextProvider = (props) => {
  console.log('Crypto context star')
const[currancy,setcurrancy]=useState(null);
useEffect(()=>{
 
  console.log("Crypto Context renderd")
 }
  )
  return (
   
      <CryptoContext.Provider value={{currancy,setcurrancy}}>
        {props.children}
      </CryptoContext.Provider>
    )


};


export default CryptoContextProvider;