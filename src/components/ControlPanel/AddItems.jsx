export default function AddItems(){
    return(
        <div className="container flex-grow-1 row mx-auto">
            <div className="col-12 col-md-8 mx-auto mt-2">
                <h3>Crear nuevo producto</h3>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Titulo</span>
                    <input type="text" class="form-control" placeholder="Titulo" aria-label="Titulo" aria-describedby="basic-addon1"/>
                </div>

                <div className="row">   
                    <div class="form-floating mb-3 col-12 col-md-6">
                        <textarea class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea" className="ms-2">Descripción</label>
                    </div>

                    <div className="col-12 col-md-6 row pe-0">
                        <div class="input-group mb-3 col-12  pe-0">
                            <span class="input-group-text" id="basic-addon1">U$D</span>
                            <input type="text" class="form-control" placeholder="Precio" aria-label="Precio" aria-describedby="basic-addon1"/>
                        </div>

                        <div className='mb-3 col-12  pe-0'>
                            <select className="form-select" aria-label="Default select example">
                            <option disabled selected value="0">Categoria</option>
                            <option value="1">Cake</option>
                            <option value="2">Dulces</option>
                            <option value="3">Pasapalos</option>
                            <option value="4">Combos</option>
                            </select>
                        </div>
        
                    </div>
                    
                </div>

                <h5>Imágenes</h5>

                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile01"/>
                </div>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02"/>
                </div>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile03"/>
                </div>
                

                <button type="button" class="btn bg-pink-regalarte icon-shadow">Crear</button>
            </div>
        </div>
    )
}