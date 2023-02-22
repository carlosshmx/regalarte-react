

function NewTask(){

    function showModal(){
        document.getElementById("form-modal").classList.remove("invisible")
    }

    return (
        <div className="flex flex-col items-center mb-7">
            <button className='mx-auto bg-indigo-500 text-white px-2 py-1 mt-4 text-xl fon hover:bg-indigo-400' onClick= {() => showModal()} >Agregar Tarea</button>
        </div>
        
    )
   
    
}

export default NewTask;