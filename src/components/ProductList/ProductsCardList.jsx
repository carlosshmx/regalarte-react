import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import ProductCard from "./ProfuctCard";

export default function ProductsCardList(){
    const {items} = useContext(MainContext)
    return(
        <div>
            {items.map((card) => (
                <ProductCard key={card.id} card={card}/>
            ))}
        </div>

    )
}