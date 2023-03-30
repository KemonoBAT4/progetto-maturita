
let logged = localStorage.getItem("logged")

checkLogin()
console.log(logged)
//loadHome()

function checkLogin(){
    if(logged != null){
        if( logged === "true"){
            showFilms()
        }else{
            document.location = "/login"
        }
    }else{
        document.location = "/login"
    }
}



let userStored = localStorage.getItem("username")
let button = document.querySelector("#searchButton")
let settingsHome = document.querySelector(".settings-home")

button.addEventListener("click", event =>{

    event.preventDefault()
    let search = document.querySelector("#searchInput").value
    document.querySelector("#searchInput").value = ""

    if(search.slice(0,1) == "/"){
        //doStuff()
    }else{
        showFilms()
    }
})  

settingsHome.addEventListener("click", event=>{

    event.preventDefault()

    document.location = "/settings"
})

//AUTHORS FUNCTIONS
function removeAuthor(name){

}

function addAuthor(name){

}

function updateAuthor(name){

}

function getAuthor(name){

}

function getAuthors(){

}

//GET USER INFORMATIONS
function getUser(username){

    /*fetch("localhost:5000/users/username").then(res =>{

        return res.json();
    }).then(response=>{

        console.log(response)
    })*/
}

//FILMS FUNCTIONS
async function getFilms(){
    return await fetch("/films").then(res =>{return res.json()})
}

function getFilm(filmName){

}

function updateFilm(){

}

function newFilm(){

}

//OTHER
async function showFilms(){

    let films = await getFilms()
    let main = document.querySelector(".main-home")

    
    /*
    for(let film of films){
        console.log(film.name)
    }
    */
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