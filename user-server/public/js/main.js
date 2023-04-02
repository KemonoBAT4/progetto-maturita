
let logged = localStorage.getItem("logged")
let userStored = localStorage.getItem("username")
let button = document.querySelector("#searchButton")
let settingsHome = document.querySelector(".settings-home")

checkLogin()
console.log(logged)

getChampionsNames("13.6.1")





button.addEventListener("click", event =>{

    event.preventDefault()
    let search = document.querySelector("#searchInput").value
    document.querySelector("#searchInput").value = ""

    if(search.slice(0,1) == "/"){
        //doStuff()
    }else{
    }
})  

settingsHome.addEventListener("click", event=>{

    event.preventDefault()

    document.location = "/settings"
})


async function getChampionsNames(patch){
    let list = await fetch("/champions/" + patch).then(res => {return res.json()})
    
    console.log(list)
    
    //return list
}


//GET USER INFORMATIONS
function getUser(token){

    /*fetch("localhost:5000/users/username").then(res =>{

        return res.json();
    }).then(response=>{

        console.log(response)
    })*/
}

document.body.style.backgroundImage = localStorage.getItem("background-image");
var uploaded_image;

/*image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    `url(${uploaded_image})`;

    localStorage.setItem("background-image",`url(${uploaded_image})`);
    document.body.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});*/


//use a accedToken instead of a username
function checkLogin(){
    if(logged != null){
        if( logged === "true"){
            //showFilms()
        }else{
            document.location = "/login"
        }
    }else{
        document.location = "/login"
    }
}