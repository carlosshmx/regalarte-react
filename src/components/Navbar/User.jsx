import { useState } from "react";
export default function User(){

    const userlogin = [{
        user:'carlos@gmail.com',
        pass:'1234'
    }
    ]

    const [inputUser, setInputUser] = useState("");
    const [inputPass, setInputPass] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log(inputUser == userlogin[0].user && inputPass == userlogin[0].pass)
    
      };

    return(
    <div className="dropdown me-2 h-100" id="login-form" >
        <button type="button" className="btn btn-primary dropdown-toggle bg-pink-regalarte icon-shadow border-0 h-100" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-offset="50,20">
        <i className="fa-solid fa-user p-2"></i>
        </button>
        <form className="dropdown-menu p-3 user-dropdown" onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail2" className="form-label" >Email address</label>
            <input type="email" className="form-control" id="inputUser" placeholder="email@example.com" value={inputUser} onChange={(e) => setInputUser(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPass" placeholder="Password" value={inputPass} onChange={(e) => setInputPass(e.target.value)}/>
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
        </form>
    </div>
    )
}