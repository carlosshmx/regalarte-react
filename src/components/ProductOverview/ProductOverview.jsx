import React, { useRef } from 'react';
import PhotoModal from "./PhotoModal";
import { useParams } from "react-router-dom"


function ProductOverview(){
  window.onload = function() {
    document.getElementById("loader").style.display = "none";
  };

    const{prodId}= useParams();

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
      document.querySelector(".modal-body").innerHTML = `<img src="${img.url}" className="d-block img-modal"/> 
      <button type="button" className="btn-close position-absolute top-0 end-0 m-2" data-bs-dismiss="modal" aria-label="Close"></button>`
      myModal.toggle();
    }

    
    return(
      <>
      {/* MODAL */}
        <PhotoModal/>

        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto border bg-light mt-3 flex-grow-1">

        {/* ARTICULO */}
        <div className="mt-4 row mx-auto">
          <div className="col-12 row mx-auto ">
            <div id="carouselExampleDark" className="col-sm-12 col-lg-7 carousel carousel-dark slide product-overview p-0" data-bs-ride="carousel">
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

      <div className=" col-sm-12 col-lg-5 d-flex flex-column border">
        <h4 className="pt-2">Producto: {prodId}</h4>
        <p className="p-2">Descripcion detallada del producto que se esta mostrando, hay selectores que permiten hacer variedades y esto modifica a su vez el precio</p>
        <h5>Personaliza tu pedido</h5>
        <div className='mb-1'>
            <select className="form-select" aria-label="Default select example">
              <option disabled selected value="0">Tamaño</option>
              <option value="1">1kg - 16 Porciones</option>
              <option value="2">1/2kg - 8 Porciones</option>
              <option value="3">1/4kg - 4 Porciones</option>
            </select>
        </div>
        <div className='mb-1'>
            <select className="form-select" aria-label="Default select example">
              <option disabled selected value="0">Sabor</option>
              <option value="1">Vainilla</option>
              <option value="2">Chocolate</option>
              <option value="3">Marmoleada</option>
            </select>
        </div>
        <div className='mb-1'>
            <select className="form-select" aria-label="Default select example">
              <option disabled selected value="0">Cubierta</option>
              <option value="1">Merenge Italiano</option>
              <option value="2">Buttercream</option>
            </select>
        </div>
        <h2 className="p-2 mt-auto">UDS 10</h2>
        <p className="p-2 color-dark"><i className="fa-solid fa-truck"></i> Delivery disponible</p>

        <button type="button" className="mt-auto mb-4 p-2 btn btn-primary fw-bold bg-pink-regalarte icon-shadow border-0">Agregar al carrito</button>
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