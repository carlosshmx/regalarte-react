export default function Cart(){
    return(
    <form className="container needs-validation" id="generalForm" noValidate >

        <h2 className="d-flex justify-content-center mt-4">Carrito de compras</h2>
        <h4>Articulos a comprar</h4>

        <table className="table">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Detalle</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody id="cart_sumary">

        <tr>
    <td className="align-middle"> <img src="" alt=""/> </td>
    <td className="align-middle">Torta</td>
    <td className="align-middle">$20</td>
    <td className="align-middle"><input type="number" id="" className="form-control" value=""  min="1" required/></td>
    <td className="align-middle"> <b className="d-flex"><p>$20</p></b> </td>
    <td className="align-middle cursor-active" onClick={()=>console.log("Eliminado")}><i className="fa-solid fa-trash text-secondary"></i></td>
        </tr>



            
        </tbody>

        </table>
    </form>
)
}