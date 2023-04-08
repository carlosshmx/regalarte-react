export default function Loading(){
    return(
            <div className="position-absolute loading-spiner-bg w-100 h-100">
                <div className="loading-spiner-container">
                    <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1677017782/regalarte_logo_png_tl8jqr.png" alt="" className="img-fluid loading-image"/>
                </div> 
                <div className="loading-spiner-container d-flex justify-content-center align-items-center flex-column">
                    <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1680926407/Spinner-0.7s-204px_1_fex32j.svg" alt="" className="loading-spiner"/> 
                </div>
            </div>
    )
}