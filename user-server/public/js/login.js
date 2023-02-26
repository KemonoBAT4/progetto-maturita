
let submit = document.querySelector(".submit-button")

localStorage.setItem("username", "test")
//console.log(localStorage.getItem("username"))

submit.addEventListener("click", event =>{
    event.preventDefault()

    let username = document.querySelector(".user-text").value
    let password = document.querySelector(".password-text").value

    //let data = {'name': 'John Doe', 'occupation': 'John Doe'}
    let data = {'username': " " + username + " " , 'password' : " "+ password + " "}
    doRequest(data)

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

async function doRequest(data){
    
    
    let response = await fetch("/test", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response =>{

        return response.json();
    }).then(res =>{
        
        console.log(res)
    })
}


function accessDenied(reason, id){

    

}
