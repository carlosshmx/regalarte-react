export default function Footer(){
    return(
        <div className="bg-dark text-light mt-3">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="m-3">
                        <p>Regalarte Punto Fijo</p>
                        <p>Punto Fijo - Venezuela</p>
                    </div>
                    
                </div>
                <div className="col-12 col-md-3">
                    <h5 className="m-3">Siguenos</h5>
                    <div className="d-flex justify-content-evenly m-3">
                        <a href="https://www.instagram.com/regalarte.pf" target="_blank"><i className="fa-brands fa-instagram fs-3 pink-regalarte"></i></a>
                        <a href="https://www.facebook.com/regalarte.pf/" target="_blank"><i className="fa-brands fa-square-facebook fs-3 pink-regalarte"></i></a>
                        <a href="https://wa.me/584146973701" target="_blank"><i className="fa-brands fa-whatsapp fs-3 pink-regalarte"></i></a>
                    </div>
                    
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <p>Web desarollada por Carlos Colmenares 2023</p>
            </div>
        </div>
    )
}