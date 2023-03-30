
let submit = document.querySelector(".submit-button")



submit.addEventListener("click", event =>{
    event.preventDefault()
    let data = {'username': "" + document.querySelector(".user-text").value + "" , 'password' : ""+ document.querySelector(".password-text").value + ""}
    doRequest(data, "login")
})

async function doRequest(data, type){
    await fetch("/" + type + "/data", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response =>{
        return response.json();
    }).then(res =>{
        let logged = res.logged

        if(logged == false){
            accessDenied(0)
        }else if(logged == true){
            localStorage.setItem("logged", true)
            localStorage.setItem("username", data.username)
            document.location = "/"
        }else{
            accessDenied(1)
        }
    })
}


function accessDenied(id){
    document.querySelector(".password-text").value = ""
    if(id === 0){
        //show "wrong username or password"
    }else if(id === 1) {
        //show "internal server error or stuff like that"
    }
}

function test(){
    fetch("/user/data/test1").then(response =>{
        return response.json()
    }).then(response =>{
        console.log(response)
    })
}
