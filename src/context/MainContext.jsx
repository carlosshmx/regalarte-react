import { createContext, useState, useEffect} from "react";
import { mainCards as dataCards } from "../data/mainCards";
import { items } from "../data/ProductsData";

export const MainContext = createContext()

export function MainContextProvider(props){
  const [cards, setCards] = useState([])
  const[totalPrice, setTotalPrice] = useState(0)

  function createMainCard(card){
    setCards([...cards,{
        id: cards.length,
        title: card.title,
        desciption: card.desciption,
        imgUrl:card.imgUrl,
        target: card.target
    }])
  }

  function totalizeCart(){
    setTotalPrice(0);
    let total = 0;
    items.map((item)=>{total = total+item.precio})
    setTotalPrice(total);
  }

  useEffect(()=>{
    setCards(dataCards);
    totalizeCart()
  }, [])


  return(
    <MainContext.Provider value={{items, cards, createMainCard, totalPrice, setTotalPrice}}>
      {props.children}
    </MainContext.Provider>
  )

}