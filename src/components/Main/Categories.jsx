import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <div className="container mx-auto row">
      <div className="card col-12 px-0">
        <Link className="card-body text-decoration-none text-dark" to={"/cakes"}>
          <blockquote className="blockquote mb-0 row justify-content-center align-items-center category-card">
            <img
              src="https://res.cloudinary.com/carlosshmc/image/upload/v1680115274/Regalarte/removal.ai__tmp-642485c036177_dfyin7.png"
              alt=""
              className="col-3 categorie-img-card"
            />
            <div className="col-6 d-flex justify-content-center">
              <h2>Cakes</h2>
            </div>

            <img
              src="https://res.cloudinary.com/carlosshmc/image/upload/v1680115274/Regalarte/removal.ai__tmp-642486160cb47_vcmz94.png"
              alt=""
              className="col-3 categorie-img-card"
            />
          </blockquote>
        </Link>
      </div>

        <div  className=" card  col-md-6 col-12 px-0">
          <Link to={"/donutscupcakes"} className="card-body text-decoration-none text-dark">
            <blockquote className="blockquote mb-0 row mx-auto align-items-center category-card">
              <img
                src="https://res.cloudinary.com/carlosshmc/image/upload/v1680117847/Regalarte/removal.ai__tmp-64248ff009754_coz7t5.png"
                alt=""
                className="col-7 categorie-img-card"
              />
              <div className="col-5 d-flex justify-content-center">
                <h2>Cupcakes</h2>
              </div>

            </blockquote>
          </Link>
        </div>
        <div className="card col-md-6 col-12 px-0">
          <Link to={"/donutscupcakes"} className="card-body text-decoration-none text-dark">
            <blockquote className="blockquote mb-0 row mx-auto align-items-center category-card">

              <div className="col-5 d-flex justify-content-center">
                <h2>Donuts</h2>
              </div>

              <img
                src="https://res.cloudinary.com/carlosshmc/image/upload/v1680118200/Regalarte/removal.ai__51cc3ab6-6686-49ba-a2f7-b17463202980_ynkyba.png"
                alt=""
                className="col-7 categorie-img-card"
              />
            </blockquote>
          </Link>
        </div>


        <div className=" card  col-md-6 col-12 px-0">
          <Link to={"/pasapalos"} className="card-body text-decoration-none text-dark">
            <blockquote className="blockquote mb-0 row mx-auto align-items-center category-card">
              <img
                src="https://res.cloudinary.com/carlosshmc/image/upload/v1680236928/Regalarte/removalai__tmp-64265b5e8d9fb_r14grq.png"
                alt=""
                className="col-7 categorie-img-card"
              />
              <div className="col-5 d-flex justify-content-center">
                <h2>Pizza</h2>
              </div>

            </blockquote>
          </Link>
        </div>

        <div className="card col-md-6 col-12 px-0">
          <Link to={"/pasapalos"} className="card-body text-decoration-none text-dark">
            <blockquote className="blockquote mb-0 row mx-auto align-items-center category-card">

              <div className="col-5 d-flex justify-content-center">
                <h2>Tequeños</h2>
              </div>

              <img
                src="https://res.cloudinary.com/carlosshmc/image/upload/v1680236928/Regalarte/removalai__tmp-64265bedc2eba_obcigy.png"
                alt=""
                className="col-7 categorie-img-card"
              />
            </blockquote>
          </Link>
        </div>



    </div>
  );
}
