
let submit = document.querySelector(".submit-button")

//localStorage.setItem("username", "")
//console.log(localStorage.getItem("username"))

submit.addEventListener("click", event =>{
    event.preventDefault()

    let data = {'username': "" + document.querySelector(".user-text").value + "" , 'password' : ""+ document.querySelector(".password-text").value + ""}
    //console.log(data)
    doRequest(data, "login")
    //test()
        /*if(response != null){
            if(response.username === "true"){
                document.location = "/"
            }else{
                accessDenied("Wrong username or password", 1)
            }
        }else{
            accessDenied("can't connect to the server, check your connection or the server status", 2)
        }*/
        //console.log(response)
    //})
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

        //onsole.log(response)
        return response.json();
    }).then(res =>{
        
        console.log(res)
        let logged = res.logged

        if(logged == false){
            //accessDenied()
        }else if(logged == true){
            localStorage.setItem("logged", true)
            document.location = "/"
        }else{
            //accessDenied()
        }
    })
}


function accessDenied(reason, id){

    

}

function test(){
    fetch("/user/data/test1").then(response =>{
        return response.json()
    }).then(response =>{
        console.log(response)
    })
}
