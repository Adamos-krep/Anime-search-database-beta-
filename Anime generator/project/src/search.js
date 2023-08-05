const Animetitle = document.querySelectorAll("#animename");
const Search = document.getElementById("search");
const Animebox = document.querySelectorAll("#anime1");
const ConfirmSearch = document.getElementById("submitSearch");

const AllNames = [];
Animetitle.forEach((name) =>{
    AllNames.push(name.textContent);
})

const AllNamesLower = AllNames.map(element => element.toLowerCase());

ConfirmSearch.addEventListener("click", ()=>{
    const searchValueLower = Search.value.toLowerCase();
    const Splited_Search_Value = String(searchValueLower).split(" ");
    let animefound = false;

    
    for(x = 0; x < AllNamesLower.length; x++){
        if(AllNamesLower[x].includes(Splited_Search_Value)){
            animefound = true;
            break;
        }
    }

    if(animefound){
        console.log("Anime was found!");
    }else{
        console.log("Anime was not found :(");
    }
});