import { Link } from "react-router-dom";

const productId = 198;

function MainCard({card}) {
  return (
    <>
      <div className="card home-card bg-light">
        <img src={card.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">
            {card.desciption}
          </p>
          <Link to={`/user/${productId}`} className="btn bg-pink-regalarte text-white icon-shadow">
            Ver mas...
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainCard;
