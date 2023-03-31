import { Link } from "react-router-dom";

export default function ProductCard({card}){
    return (
        <>
          <div className="card home-card bg-light">
            <img src={card.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.titulo}</h5>
              <p className="card-text">
              {card.variedad}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="my-auto ms-4">{card.precio}</h4>
              <Link to={`/user/10`} className="btn bg-pink-regalarte text-white icon-shadow">
                Agregar al carrito
              </Link>
              </div>
             
            </div>
          </div>
        </>
      );
}