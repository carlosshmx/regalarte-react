export default function Cart(){
    return(

        <div className="container mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Carrito</h2>
                <p className="my-auto">Precio</p>
            </div>
            <hr className="border border-danger border-2 opacity-50 my-0"></hr>

            <div className="container">
                <div className="row border rounded">
                    <div className="col-3 border item-col">
                        <img src="https://res.cloudinary.com/carlosshmc/image/upload/v1626985688/Regalarte/IMG-20200917-WA0046-01_gr04zc.jpg" alt="" className="img-cart-item"/>
                    </div>
                    <div className="col-8 border">
                        <h3>Detalle del producto</h3>
                        <p><b>Variedad:</b> Vainilla</p>
                        <p><b>Tamaño:</b> 1/2 kilo</p>
                        <div className="d-flex">
                            <input type="number" min="1" required/>
                            <a href=""><i className="fa-solid fa-trash text-secondary"></i></a>
                        </div>
                    </div>
                    <div className="col-1 border">
                        <h3>$25</h3>
                    </div>
                </div>
                </div>
        
        </div>
    // <form className="container needs-validation" id="generalForm" noValidate >

    //     <h2 className="d-flex justify-content-center mt-4">Carrito de compras</h2>
    //     <h4>Articulos a comprar</h4>

    //     <table className="table">
    //     <thead>
    //         <tr>
    //         <th scope="col"></th>
    //         <th scope="col">Detalle</th>
    //         <th scope="col">Precio</th>
    //         <th scope="col">Cantidad</th>
    //         <th scope="col">Subtotal</th>
    //         <th scope="col"></th>
    //         </tr>
    //     </thead>
    //     <tbody id="cart_sumary">

    //     <tr>
    // <td className="align-middle"> <img src="" alt=""/> </td>
    // <td className="align-middle">Torta</td>
    // <td className="align-middle">$20</td>
    // <td className="align-middle"><input type="number" id="" className="form-control" value=""  min="1" required/></td>
    // <td className="align-middle"> <b className="d-flex"><p>$20</p></b> </td>
    // <td className="align-middle cursor-active" onClick={()=>console.log("Eliminado")}><i className="fa-solid fa-trash text-secondary"></i></td>
    //     </tr>



            
    //     </tbody>

    //     </table>
    // </form>
)
}