import { useState } from "react";
import { Link } from "react-router-dom";


export default function User(){

    const userlogin = [{
        user:'carlos@gmail.com',
        pass:'1234'
    }
    ]

    const [inputUser, setInputUser] = useState("");
    const [inputPass, setInputPass] = useState("");

    const login = <>
                <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail2" className="form-label" >Email address</label>
                <input type="email" className="form-control" id="inputUser" placeholder="email@example.com"  onChange={(e) => setInputUser(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPass" placeholder="Password" onChange={(e) => setInputPass(e.target.value)}/>
                </div>  
                <div className="mb-3">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                    <label className="form-check-label" htmlFor="dropdownCheck2">
                    Remember me
                    </label>
                </div>
                </div>
                <button type="submit" className="btn btn-primary bg-pink-regalarte border-0">Sign in</button>  
            </>

    const[content, setContent] = useState(login)

    const handleSubmit = async(event) => {
        event.preventDefault(); 

        // let passwordCrypt = await bcrypt.hash(inputPass, 8, function(err, hash) {
        //     console.log(hash)
        // });

        if(inputUser == userlogin[0].user && inputPass == userlogin[0].pass){
            setContent(
                <>
                        <div className="d-flex justify-content-end">
                            <Link to="/" type="button" className="btn bg-pink-regalarte icon-shadow me-1" onClick={()=>setContent(login)}>Cerrar sesión</Link>
                        </div>
                        
                        <h5>Nombre de usuario</h5>
                        <button type="button" className="btn bg-pink-regalarte icon-shadow me-1">Mis pedidos</button>
                        <button type="button" className="btn bg-pink-regalarte icon-shadow me-1">Administrar</button>
                        
                </>
            )
        }
    
      };


    

    return(

    <div className="dropdown me-2 h-100" id="login-form" >
        <button type="button" className="btn btn-primary dropdown-toggle bg-pink-regalarte icon-shadow border-0 h-100" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-offset="50,20">
        <i className="fa-solid fa-user p-2"></i>
        </button>
        <form className="dropdown-menu p-3 user-dropdown" onSubmit={handleSubmit}>
           {content}
        </form>
    </div>
    )
}