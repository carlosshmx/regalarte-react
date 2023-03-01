function SlideShow(){
    return(
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner main-slideshow">
    <div className="carousel-item active " data-bs-interval="5000">
      <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985087/Regalarte/df095418-07fd-442c-8a04-008404604d73-01_esntcf.jpg" className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1677018362/regalarte_letras_nml55d.png" className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1626984736/Regalarte/100035400698-189450-01_szzok6.jpg" className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        
        
        </>
        

    )
}

export default SlideShow;