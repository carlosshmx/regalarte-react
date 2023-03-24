import { useState } from "react";

export default function CartItem(props){
    
    const[imputValue, setImputValue] =  useState(props.qty);
    const[price, setPrice] = useState(props.precio*props.qty)


    function handleChange(event) {
        setImputValue(Number(event.target.value));
      }


    
    return(

        <div className="">
            
        <div className="row align-items-center">
          <div className="col-6 col-md-3 cart-item">
            <img
              src={props.imgUrl}
              className="cart-item cart-img-item"
              alt="Imagen del producto "
            />
          </div>
          <div className="col-6 col-md-9">
            <div className="card-body row align-items-center m-0 p-0">
              <div className="col-12 col-md-9">
                <h5 className="card-title">{props.titulo}</h5>
                <h6>{props.variedad}</h6>

                <div className="row align-items-center">
                    <div className="col-8 col-lg-3">
                        <div className="input-group">
                            <button className="btn btn-secondary btn-sm" type="button" id="decrease-btn" onClick={()=>{imputValue>0 ? setImputValue(imputValue-1):null; setPrice(props.precio*(imputValue-1))}}>-</button>
                            <input type="text" id={props.id} className="form-control form-control-sm w-25" onChange={() => handleChange} value={imputValue} min="1" max="10" step="1"/>
                            <button className="btn btn-secondary btn-sm" type="button" id="increase-btn" onClick={()=>{setImputValue(imputValue+1); setPrice(props.precio*(imputValue+1))}}>+</button>
                        </div>
                    </div>
                    <div className="col-4 col-lg-3">
                        <span className="cursor-pointer">
                        <i className="fa-solid fa-trash"></i>
                        </span>
                    
                    </div>
                    
                </div>
                
               
            
              </div>
              <div className="col-12 col-md-3 text-center mt-3 mt-md-0">
                <h4>${price}</h4>
                <p>c/u ${props.precio}</p>
              </div>
           
            </div>
          </div>
        </div>
        <hr className="border border-danger border-2 opacity-50 my-0"></hr>
      </div>
    )
}