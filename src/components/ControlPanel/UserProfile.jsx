export default function UserProfile(){
    return(
        <div className="container flex-grow-1  mt-2 row mx-auto ">
            <div className="col-12 col-md-8 mx-auto">
                <div className="row">
                    <div className="col-md-4 col-12 ">
                        <img src="https://dummyimage.com/200x200" className="img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-md-8 col-12">
                        <h3>Nombre Usuario</h3>
                        <p>Email:</p>
                        <p>Telefono:</p>
                    </div>
                </div>
                
                <button type="button" class="btn bg-pink-regalarte icon-shadow">Administrar Productos</button>
                
            </div>
        </div>
    )
}