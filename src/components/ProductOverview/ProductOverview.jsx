import React, { useRef } from 'react';
import PhotoModal from "./PhotoModal";

function ProductOverview(){

    const carouselImg = [
      "https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201218-WA0008-01_fgun5y.jpg",
      "https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201024-WA0035-01_mmqnrp.jpg",
      "https://res.cloudinary.com/carlosshmc/image/upload/v1626985089/Regalarte/IMG-20201219-WA0031-01_ggyg37.jpg",
      "https://res.cloudinary.com/carlosshmc/image/upload/v1626985087/Regalarte/df095418-07fd-442c-8a04-008404604d73-01_esntcf.jpg",
      "https://res.cloudinary.com/carlosshmc/image/upload/v1626984428/Regalarte/IMG-20200930-WA0069-01_gru6xo.jpg"
    ]

    // RELLENADO DE BOTONES DEL SLIDE
    let slidesToShow = [<button key="0" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>];

    for(let i=1; i<carouselImg.length; i++){slidesToShow.push(<button type="button" key={i} data-bs-target="#carouselExampleDark" data-bs-slide-to={i} aria-label={"Slide " + i}></button>)}

    // RELLENADO DE LAS IMAGENES DEL SLIDE
    let imagesToShow = [<div key="0" className="carousel-item active" data-bs-interval="5000">
    <img src={carouselImg[0]} className="d-block w-100 product-slideshow-img" alt="..." onClick={()=>modalView(carouselImg[0])}/>
    </div>];

    for(let i=1; i<carouselImg.length; i++){imagesToShow.push(<div key={i} className="carousel-item" data-bs-interval="5000">
    <img src={carouselImg[i]} className="d-block w-100 product-slideshow-img" alt="..." onClick={()=>modalView(carouselImg[i])} />
    </div>)}

    // FUNCION LLAMADO A MODAL CON IMAMGEN CLICKEADA
    async function modalView(str){
      const img = await fetch(str)
      var myModal = new bootstrap.Modal(document.getElementById('PhotoModal'), {
        keyboard: false
      })
      document.querySelector(".modal-body").innerHTML = `<img src="${img.url}" class="d-block img-modal"/> 
      <button type="button" class="btn-close position-absolute top-0 end-0 m-2" data-bs-dismiss="modal" aria-label="Close"></button>`
      myModal.toggle();
    }

    
    return(
      <>
      {/* MODAL */}
        <PhotoModal/>

        <div className="col-lg-8 col-sm-12 mx-auto border bg-light mt-3">

        {/* ARTICULO */}
        <div className="mt-4 row mx-auto">
    <div className="col-12 row mx-auto ">

        <div id="carouselExampleDark" className="col-sm-12 col-lg-8 carousel carousel-dark slide product-overview" data-bs-ride="carousel">
        <div className="carousel-indicators">

          {slidesToShow}
 
        </div>
        <div className="carousel-inner">

          {imagesToShow}
         

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
      
      </>
      
    )
}

export default ProductOverview;