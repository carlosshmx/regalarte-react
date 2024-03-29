import { Link } from "react-router-dom";
import ProductOverview from "../ProductOverview/ProductOverview"

export default function ProductCard({card}){

  // window.onload = function() {
  //   document.getElementById("loader").style.display = "none";
  // };
    return (
        <>
          <Link className="card product-card bg-light col-3 text-decoration-none text-dark p-0" to={"/product/sampleID"}>
            <img src={card.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h5 className="card-title">{card.titulo}</h5>
              <p className="card-text">
              {card.variedad}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-auto ms-4">${card.precio}</h3>
              <button to={`/user/10`} className="btn bg-pink-regalarte text-white icon-shadow">
              <i className="fa-sharp fa-solid fa-cart-plus"></i>
              </button>
              </div>
             
            </div>
          </Link>
        </>
      );
}