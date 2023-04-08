function SlideShow(){
    return(
        <div className="d-none d-md-block w-100">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner main-slideshow">
    <div className="carousel-item active " data-bs-interval="5000">
      <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1680273095/Banners%20Regalarte/Disen%CC%83o_sin_ti%CC%81tulo_whxn1s.png" className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1680273902/Banners%20Regalarte/Sumer_ikx84b.png" className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1680274523/Banners%20Regalarte/Deleivery_free_vcjivw.png" className="d-block w-100 " alt="..."/>
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

        
        
        </div>
        

    )
}

export default SlideShow;