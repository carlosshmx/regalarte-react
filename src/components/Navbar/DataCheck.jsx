const userlogin = [{
    user:'carlos',
    pass:'1234'
}
]

const loginForm = document.getElementById("login-form")

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputUser= document.getElementById('inputUser').value;
    const inputPass= document.getElementById('inputPass').value;

    console.log(inputUser)
})
