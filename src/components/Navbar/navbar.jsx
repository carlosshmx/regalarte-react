
function NavBar() {
  return (
    <>
   <div className="container mt-3 mb-0 mb-md-2 px-2 my-lg-3">
      <div className="position-relative row">
            <div className="col-6 col-md-2">
            <img className="regalarte-nav-logo" src="https://res.cloudinary.com/carlosshmc/image/upload/v1677018362/regalarte_letras_nml55d.png" alt="" />
            </div>
            
            
            <div className="col-6 col-md-2 d-flex justify-content-end order-sm-2">
              <button type="button" className="bg-pink-regalarte icon-shadow btn position-relative me-3 me-md-2 me-lg-0">
              <i className=" text-white fa-solid fa-cart-shopping " ><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span className="visually-hidden">unread messages</span></span></i>
            </button>
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
        <ul className="navbar-nav w-100 lower-bar justify-content-between">
          <li className="nav-item">
            <a className="nav-link active" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorías</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Vender</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Usuario</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

    </>
  );
}

export default NavBar;

{/* 
codigo de tailwind
      <nav classNameName=" border-gray-200 px-2 sm:px-4 py-2.5 bg-pink-800">
        <div classNameName="dark container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" classNameName="flex items-center">
            <img
              src="https://res.cloudinary.com/carlosshmc/image/upload/v1677017998/regalarte_logo_sin_letras_gcfnsk.png"
              classNameName=" h-20 sm:h-14"
              alt="Regalarte small logo"
            />
            <img
              src="https://res.cloudinary.com/carlosshmc/image/upload/v1677018362/regalarte_letras_nml55d.png"
              classNameName="mt-2 h-12 sm:h-11"
              alt="Regalarte font"
            />
            {----}
          </a>
          <div classNameName="flex md:order-2">

            <div classNameName="relative dark hidden md:block">
              <div classNameName="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  classNameName="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span classNameName="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                classNameName="block w-full p-2 pl-10 text-sm text-gray-900 border border-pink-600 rounded-lg bg-gray-50 focus:ring-zinc-800 focus:border-zinc-800 dark:bg-gray-100 dark:border-zinc-800 dark:placeholder-gray-400 dark:text-zinc-800 dark:focus:ring-zinc-800 dark:focus:border-zinc-800"
                placeholder="Search..."
              />
            </div>


            <button
              data-collapse-toggle="navbar-search"
              type="button"
              classNameName="mr-4 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span classNameName="sr-only">Open menu</span>
              <svg
                classNameName="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

        
            <div classNameName="mt-1 mr-4 lg:mt-0 lg:ml-6  text-zinc-100 hover:text-white">
              <a href="#" role="button" classNameName="relative flex ">
                <svg classNameName="mt-2 flex-1 w-8 h-8 fill-current text-3xl" viewBox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span classNameName="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  6
                </span>
              </a>
            </div>

            
          </div>
          <div
            classNameName="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div classNameName="relative mt-3 md:hidden">
              <div classNameName="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  classNameName="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbarl"
                classNameName="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-zinc-800 focus:border-zinc-800 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:dark:border-zinc-800 dark:focus:border-zinc-800"
                placeholder="Search.."
              />
            </div>
            <ul classNameName="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-800 dark:border-gray-700">
              {links.map((link) => (
                <NavLinks key={link.id} link={link} />
              ))}
            </ul>
          </div>
        </div>
      </nav> */}