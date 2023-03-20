export default function Cart() {
  return (
    <div className="container mt-3  row mx-auto">
      <div className="col-md-9 bg-white mb-2 px-1">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Carrito</h2>
          
        </div>
        <hr className="border border-danger border-2 opacity-50 my-0"></hr>

        <div className="mt-2">
          <div className="card cart-item">
            <div className="row no-gutters">
              <div className="col-6 col-md-3 cart-item">
                <img
                  src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985688/Regalarte/IMG-20200917-WA0046-01_gr04zc.jpg"
                  className="cart-item cart-img-item"
                  alt="Imagen del producto "
                />
              </div>
              <div className="col-4 col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Nombre del producto</h5>
                  <p className="card-text">Descripción del producto</p>
                  <p className="card-text">
                    <small className="text-muted">Precio del producto</small>
                  </p>
                </div>
              </div>
              <div className="col-2 col-md-2">
                <p>$25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 px-1">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Subtotal</h5>
            <h4 className="card-subtitle mb-2">$29</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam officiis ipsam quis officia rem. Illum veritatis nostrum
            </p>
            <button type="button" className="btn btn-warning">Proceder al pago</button>
          </div>
        </div>
      </div>
    </div>
  );
}
