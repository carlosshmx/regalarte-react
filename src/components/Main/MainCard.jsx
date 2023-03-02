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
          <a href="#" className="btn bg-pink-regalarte text-white icon-shadow">
            Ver mas...
          </a>
        </div>
      </div>
    </>
  );
}

export default MainCard;
