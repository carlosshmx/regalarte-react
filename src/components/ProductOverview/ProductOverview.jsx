import ProductCard from "./InfoCard";
import ProductPics from "./ProductPics";

function ProductOverview(){

    return(
        <div className="col-lg-8 col-sm-12 mx-auto border bg-light mt-3">

        {/* ARTICULO */}
        <div className="mt-4 row mx-auto">
    <div className="col-12 row mx-auto ">

        <div id="carouselExampleDark" className="col-sm-12 col-lg-8 carousel carousel-dark slide product-overview" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201218-WA0008-01_fgun5y.jpg" className="d-block w-100 product-slideshow-img" alt="..."/>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201218-WA0008-01_fgun5y.jpg" className="d-block w-100 product-slideshow-img" alt="..."/>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201218-WA0008-01_fgun5y.jpg" className="d-block w-100 product-slideshow-img" alt="..."/>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201218-WA0008-01_fgun5y.jpg" className="d-block w-100 product-slideshow-img" alt="..."/>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className=" col-sm-12 col-lg-4 d-flex flex-column border">
        <p className="mb-0 mt-2">Vendidos: 10</p>
        <h4 className="pt-2">Suspiros</h4>
      <div className="d-flex">
        5 strellas
        <a href="#comments" className="ms-2 text-decoration-none">10 Calificaciones</a>
      </div>
        <h2 className="p-2">UDS 10</h2>
        <p className="p-2">Descripcion</p>
        <p className="p-2 color-dark"><i className="fa-solid fa-truck"></i> Envios gratis a todo el pais</p>

        <button type="button" className="mt-auto mb-4 p-2 btn btn-primary fw-bold">Agregar al carrito</button>
      </div>
  </div>
</div>





        {/* COMENTARIOS */}

      <div className="row justify-content-center mt-5 mx-auto">
        <div className="comments_containter col-lg-8 col-sm-11" id="comments">
          <h4>Comentarios</h4>
          <div className="comments">
            
          </div>
          <div className="new_coment mt-4">
            <div className="d-flex align-items-center gap-3 ">
              <h4 className="my-auto">Califica el articulo: </h4>
              <div>
                <span className="opinion_star fa fa-star cursor-active"></span>
                <span className="opinion_star fa fa-star cursor-active"></span>
                <span className="opinion_star fa fa-star cursor-active"></span>
                <span className="opinion_star fa fa-star cursor-active"></span>
                <span className="opinion_star fa fa-star cursor-active"></span>
              </div>
              
            </div>

            <p className="mb-0 invisible opinion_error text-danger" >Seleccione su calificación</p>

            <form className="mb-3" action="">
              <div className="form-floating d-flex">
                <textarea className="form-control" placeholder="Leave a comment here" id="new_description" ></textarea>
                <label htmlFor="floatingTextarea2">Tu opinión:</label>
              </div>
              <div className="row justify-content-center">
                <button id="send_opinion" type="button" className=" col-11 col-md-6 col-lg-4 mt-2 btn btn-primary fw-bold">Enviar</button>
              </div>
            </form>

          </div>
        </div>

        <div className="col-lg-4 col-sm-11" id="related-products">
          <h4 className="text-center">Productos relacionados</h4>
          <div className="related_products d-flex flex-sm-row flex-lg-column gap-2">
           
          </div>
        </div>
      </div>

      </div>
      

      
    )
}

export default ProductOverview;