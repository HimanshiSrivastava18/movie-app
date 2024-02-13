let inputBox=document.getElementById("inputBox")
let main=document.querySelector(".main")
// let url="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

 async function movie(){
    try{
        let response=await fetch(`http://www.omdbapi.com/?t=${inputBox.value}&apikey=c37526bb`)
        let data= await response.json();
        console.log(data); 
        main.innerHTML=`
        <h1>Title:${data.Title}</h1>
        <h3>Released:${data.Released}</h3>
        <h3>Runtime:${data.Runtime}</h3>
        <h3>Runtime:${data.Year}</h3>
        `
        let div=document.createElement("div")
        div.classList.add("image")
        div.innerHTML=`<img src=${data.Poster}>`  
        main.appendChild(div)
    }catch(error){
        console.error(error);
    }
    
    
    
}