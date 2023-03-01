import MainCard from "./MainCard";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

function MainCardsList(){

    const {cards} = useContext(MainContext)

    return(
        <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
            {cards.map((card) => (
                <MainCard key={card.id} card={card}/>
            ))}
        </div>
    )
}

export default MainCardsList;