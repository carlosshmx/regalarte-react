import { createContext, useState, useEffect} from "react";
import { items } from "../data/ProductsData";

export const MainContext = createContext()

export function MainContextProvider(props){

  const[totalPrice, setTotalPrice] = useState(0)



  function totalizeCart(){
    setTotalPrice(0);
    let total = 0;
    items.map((item)=>{total = total+item.precio})
    setTotalPrice(total);
  }

  useEffect(()=>{
    totalizeCart()
  }, [])


  return(
    <MainContext.Provider value={{items, totalPrice, setTotalPrice}}>
      {props.children}
    </MainContext.Provider>
  )

}