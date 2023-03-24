import { DolarData } from "../../data/CartData"
export default function TotalBox(props){

    async function showdata(){
        const dolarValue = await DolarData();
        console.log(dolarValue)
        document.getElementById("totalBS").innerText = "Bs: " + Math.round(dolarValue*props.totalPrice) 
    }

    showdata();
    
    return(
        <div className="col-md-3 px-0">
        <div className="card">
          <div className="card-body d-flex flex flex-column text-center">
            <h5 className="card-title">Subtotal</h5>
            <h2 className="card-subtitle mb-2">${props.totalPrice}</h2>
            <p className="card-text" id="totalBS">Bs: --</p>
            <label>
              <input type="radio" name="opcion" value="1" />
              Retito personal
            </label>
            <label>
              <input type="radio" name="opcion" value="2" />
              Envio a domicilio
            </label>

            <button type="button" className="btn btn-warning mt-3">
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    )
}