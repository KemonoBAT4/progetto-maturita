
let logged = localStorage.getItem("logged")
let userStored = localStorage.getItem("username")
let button = document.querySelector("#searchButton")
let settingsHome = document.querySelector(".settings-home")

//checkLogin()
//console.log(logged)

buildChampSelected("gwen")
//getChampion("13.6.1", "Gwen")
//getChampionsNames("13.6.1")

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

async function getPatch(){
    return await fetch("/patch").then(response => {return response.json()})
}

async function getChampions(patch){
    return await fetch("/champions/" + patch).then(res => {return res.json()})
}

async function getChampion(patch, name){
    name = await changeName(name)
    return await fetch("/champion/"+ patch + "/" + name).then(response =>{return response.json()}).then(response =>{return response.data})

}
async function changeName(name){

    name = name.replace(" ", "")
    name = name.replace("'", "")
    name = name.replace(".", "")
    name = name.replace("Nunu& Willump", "Nunu")
    name = name.replace("LeBlanc", "Leblanc")
    name = name.replace("KhaZix", "Khazix")
    name = name.replace("ChoGath", "Chogath")
    name = name.replace("KaiSa", "Kaisa" || "Kaisa", "Kaisa")
    name = name.replace("VelKoz", "Velkoz");
    name = name.replace("RenataGlasc", "Renata");
    name = name.replace("Renata Glasc", "Renata");
    name = name.replace("Wukong", "MonkeyKing");

    return name
}

async function getChampionsNames(patch){
    
    let list = []
    let championsData = await getChampions(patch)
    
    for(let index in championsData){
        let name = championsData[index].name

        name = changeName(name)
        list.push(name)
    }
    
    return list
}



async function buildChampSelected(name){
    name = name.trim()
    name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()

    let data
    let patch = await getPatch()
    let raw = await getChampion(patch, name)
    let home = document.querySelector(".main-home")


    for(let key in raw){
        data = raw[key]
    }
    
    //DIV CONTAINERS
    let searchContainer = document.createElement("div")
    searchContainer.className = "search-champ"

    let champDataContainer = document.createElement("div")
    champDataContainer.className = "champ-data"

    let RunesBuildContainer = document.createElement("div")
    RunesBuildContainer.className = "champ-runes-build"

    let RunesContainer = document.createElement("div")
    RunesContainer.className = "champ-runes"

    let BuildContainer = document.createElement("div")
    BuildContainer.className = "champ-build"


    //CHAMPION IMGS
    let imgs = document.createElement("div")
    imgs.className = "imgs-container"
    let loadingUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + name + "_0.jpg"
    let squareUrl  = "https://ddragon.leagueoflegends.com/cdn/" + patch + "/img/champion/" + name + ".png"
    
    let defaultLoading = document.createElement("img")
    defaultLoading.setAttribute("src", loadingUrl)
    defaultLoading.setAttribute("class", "loading-img")
    imgs.append(defaultLoading)
    
    let defaultSquare = document.createElement("img")
    defaultSquare.setAttribute("src", squareUrl)
    defaultSquare.setAttribute("class","square-img")
    imgs.append(defaultSquare)

    let defaultPassive = document.createElement("img")
    defaultPassive.setAttribute("src","https://ddragon.leagueoflegends.com/cdn/"+ patch +"/img/passive/" + data.passive.image.full)
    defaultPassive.setAttribute("class", "passive-img")

    //MAGARI FARE CHE CLICCANDO LA PASSIVA CAMBIANO LE SPLASH ART DELLE IMMAGINI PER VEDERE LE ALTRE SKIN
    imgs.append(defaultPassive)
    
    //CHAMPION SPELLS
    let spells = document.createElement("div")
    spells.className = "spells-container"
    for(let spell of data.spells){
        let singleContainer = document.createElement("div")
        singleContainer.className = "single-spell-container"

        console.log(spell)
        //SPELL IMAGES
        let defaultSpellImage = document.createElement("img")
        defaultSpellImage.setAttribute("src", "https://ddragon.leagueoflegends.com/cdn/"+ patch +"/img/spell/" + spell.image.full)
        defaultSpellImage.setAttribute("class", "spells-img")
        
        //SPELL DESCRIPTION
        let defaultSpellDescription = document.createElement("div")
        defaultSpellDescription.className = "description-container"

        let spellTitle = document.createElement("h1")
        spellTitle.className = "spell-title"
        spellTitle.innerText = spell.id.slice(name.length)

        let spellDescription = document.createElement("h1")
        spellDescription.className = "spell-description"
        spellDescription.innerText = spell.description

        defaultSpellDescription.append(spellTitle)
        defaultSpellDescription.append(spellDescription)

        singleContainer.append(defaultSpellImage)
        singleContainer.append(defaultSpellDescription)

        spells.append(singleContainer)
    }
    

    /*DA FIXARE:
        gli onHit tag devono sparire, pure i br   
    */

    //spells
    //  "https://ddragon.leagueoflegends.com/cdn/"+ patch +"/img/spell/" + abilitaI.image.full + "";


    //CHAMPDATA PART



    //APPEND ALL THE CONTAINERS
    champDataContainer.append(imgs)
    champDataContainer.append(spells)

    RunesBuildContainer.append(RunesContainer)
    RunesBuildContainer.append(BuildContainer)

    searchContainer.append(champDataContainer)
    searchContainer.append(RunesBuildContainer)

    home.append(searchContainer)
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