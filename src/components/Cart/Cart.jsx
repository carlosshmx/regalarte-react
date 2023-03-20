export default function Cart() {
  return (
    <div className="container mt-3  gap-1 row justify-content-md-center mx-auto">
      <div className="col-md-8 bg-white mb-2 px-0">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Carrito</h2>
        </div>
        <hr className="border border-danger border-2 opacity-50 my-0"></hr>

        {/* INICIO DE ITEM */}
   
          <div className="">
            <div className="row align-items-center">
              <div className="col-6 col-md-3 cart-item">
                <img
                  src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985688/Regalarte/IMG-20200917-WA0046-01_gr04zc.jpg"
                  className="cart-item cart-img-item"
                  alt="Imagen del producto "
                />
              </div>
              <div className="col-6 col-md-9">
                <div className="card-body row align-items-center m-0 p-0">
                  <div className="col-12 col-md-9">
                    <h5 className="card-title">Nombre del producto</h5>
                    <h6>Variedad: Color, tamaño</h6>

                    <div className="row align-items-center">
                        <div className="col-8 col-lg-3">
                            <div className="input-group">
                                <button className="btn btn-secondary btn-sm" type="button" id="decrease-btn">-</button>
                                <input type="text" className="form-control form-control-sm w-25" value="1" min="1" max="10" step="1" id="quantity-input"/>
                                <button className="btn btn-secondary btn-sm" type="button" id="increase-btn">+</button>
                            </div>
                        </div>
                        <div className="col-4 col-lg-3">
                        <i className="fa-solid fa-trash"></i>
                        </div>
                        
                    </div>
                    
                   
                   
                  </div>
                  <h4 className="col-12 col-md-3 text-center mt-3 mt-md-0">$25</h4>
                </div>
              </div>
            </div>
          </div>
      

        {/* FIN DE ITEM */}

        <hr className="border border-danger border-2 opacity-50 my-0"></hr>


        {/* INICIO ITEM 2 */}

        <div className="">
            <div className="row align-items-center">
              <div className="col-6 col-md-3 cart-item">
                <img
                  src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985688/Regalarte/IMG-20200917-WA0046-01_gr04zc.jpg"
                  className="cart-item cart-img-item"
                  alt="Imagen del producto "
                />
              </div>
              <div className="col-6 col-md-9">
                <div className="card-body row align-items-center m-0 p-0">
                  <div className="col-12 col-md-9">
                    <h5 className="card-title">Nombre del producto</h5>
                    <h6>Variedad: Color, tamaño</h6>

                    <div className="row align-items-center">
                        <div className="col-8 col-lg-3">
                            <div className="input-group">
                                <button className="btn btn-secondary btn-sm" type="button" id="decrease-btn">-</button>
                                <input type="text" className="form-control form-control-sm w-25" value="1" min="1" max="10" step="1" id="quantity-input"/>
                                <button className="btn btn-secondary btn-sm" type="button" id="increase-btn">+</button>
                            </div>
                        </div>
                        <div className="col-4 col-lg-3">
                        <i className="fa-solid fa-trash"></i>
                        </div>
                        
                    </div>
                    
                   
                   
                  </div>
                  <h4 className="col-12 col-md-3 text-center mt-3 mt-md-0">$25</h4>
                </div>
              </div>
            </div>
          </div>

        {/* FIN ITEM 2 */}

      </div>


      {/* SUBTOTAL */}
      <div className="col-md-3 px-0">
        <div className="card">
          <div className="card-body d-flex flex flex-column text-center">
            <h5 className="card-title">Subtotal</h5>
            <h2 className="card-subtitle mb-2">$29</h2>
            <p className="card-text">Bs: 541</p>
            <label>
              <input type="radio" name="opcion" value="1" />
              Retito personal
            </label>
            <label>
              <input type="radio" name="opcion" value="2" />
              Envio a domicilio
            </label>

            <button type="button" className="btn btn-warning mt-3">
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
