import { createContext, useState, useEffect} from "react";
import { mainCards as dataCards } from "../data/mainCards";

export const MainContext = createContext()

export function MainContextProvider(props){
  const [cards, setCards] = useState([])

  function createMainCard(card){
    setCards([...cards,{
        id: cards.length,
        title: card.title,
        desciption: card.desciption,
        imgUrl:card.imgUrl,
        target: card.target
    }])
  }

  useEffect(()=>{
    setCards(dataCards)
  }, [])


  return(
    <MainContext.Provider value={{cards, createMainCard}}>
      {props.children}
    </MainContext.Provider>
  )

}