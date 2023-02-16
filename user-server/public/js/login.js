let form = document.querySelector(".login-form")
let submit = document.querySelector(".submit-button")

localStorage.setItem("username", "test")
console.log(localStorage.getItem("username"))

submit.addEventListener("click", event =>{
    event.preventDefault()

    let username = "this is a username"
    let password = "this is a password"

    fetch("/test", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "username": + ""+username, "password": + ""+password})
    })
    .then(response => {
        return response.json()
    }).then(response => {
        if(response != null){
            if(response.username === "true"){
                document.location = "/"
            }else{
                accessDenied("Wrong username or password", 1)
            }
        }else{
            accessDenied("can't connect to the server, check your connection or the server status", 2)
        }
        console.log(response)
    })
})

function accessDenied(reason, id){


}
