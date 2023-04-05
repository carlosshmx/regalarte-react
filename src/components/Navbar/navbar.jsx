import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-white">
   <div className="container mt-3 mb-0 mb-md-2 px-2 my-lg-3">
      <div className="position-relative row bg-white">
            <Link to={"/"} className="col-6 col-md-2">
            <img className="regalarte-nav-logo" src="https://res.cloudinary.com/carlosshmc/image/upload/v1677018362/regalarte_letras_nml55d.png" alt="" />
            </Link>
            
            
            <div className="col-6 col-md-2 d-flex justify-content-end order-sm-2">
              <NavLink to="/cart" className="bg-pink-regalarte icon-shadow btn  position-relative me-3 me-md-2 me-lg-0">
                  <i className=" text-white fa-solid fa-cart-shopping pt-2"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span className="visually-hidden">unread messages</span></span></i>
              </NavLink>
            </div>
          
            <form className="d-flex justify-content-end col-12 col-md-8 px-md-5 order-sm-1 my-2 my-md-0" role="search">
              <input className="form-control me-2" type="search" autoComplete="off" id="searchInput" placeholder="Search" aria-label="Search"/>
              {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
            </form>
            {/* <!-- resultado busqueda --> */}
            <div className="card position-absolute mt-1 overflow-scroll d-none" id="suggests">
              
            </div>
            
            
        </div>

   </div>
    
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-pink-regalarte py-2">

    <div className="container-fluid">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100 justify-content-around fw-bold">
          <li className="nav-item">
            <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active':'')} to="/">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active':'')} to="/cakes">Cakes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active':'')} to="/donutscupcakes">Donuts & Cupcakes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active':'')} to="/pasapalos">Pasapalos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active':'')} to="/combos">Combos</NavLink>
          </li>
        </ul>

      </div>
    </div>
  </nav>

    </div>
  );
}

export default NavBar;
