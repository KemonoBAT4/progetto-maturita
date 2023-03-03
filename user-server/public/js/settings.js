checkLogin()

function checkLogin(){
    if("true" === "true"){
        loadSettings()
    }else{
        document.location = "/login"
    }
}

function getData(username){

    let data
    fetch("/user/data/"+ username + "").then(response =>{

        return response.json()
    }).then(response =>{

        console.log(response)
        data = response
    })
    //return data
}

function loadSettings(){

    let usernameStored = localStorage.getItem("username")

    let data = getData(usernameStored)
    /*
    document.querySelector(".user-text").value = data.username
    document.querySelector(".password-text").value = data.password
    document.querySelector(".email-text").value = data.email
    */

    
    

    //username.set
    let apply = document.querySelector(".apply-button")
    let cancel = document.querySelector(".cancel-button")

    apply.addEventListener("click", event =>{
        event.preventDefault()



    })

    cancel.addEventListener("click", event =>{
        event.preventDefault()

        
    })


    

}