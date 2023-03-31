import CartItem from "./CartItem";
import { items} from "../../data/ProductsData";
import TotalBox from "./TotalBox";
import { useState } from "react";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";

export default function Cart() {

    const{totalPrice} = useContext(MainContext)


  return (
    <div className="container mt-3  gap-1 row justify-content-md-center mx-auto">
      <div className="card col-md-8 bg-white mb-2 px-0">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="m-2">Carrito</h2>

        </div>
        <hr className="border border-danger border-2 opacity-50 my-0"></hr>
        {items.map((item, index) => (
                <CartItem titulo={item.titulo} variedad={item.variedad} precio={item.precio} imgUrl={item.imgUrl} key={index} qty={item.qty} id={"item" + index} />
                
                
            ))}
        
      </div>
        <TotalBox totalPrice={totalPrice}/>

    </div>
  );
}
