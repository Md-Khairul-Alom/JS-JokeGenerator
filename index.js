const btnEl = document.querySelector(".btn");
const jokeEl = document.getElementById("joke");
const apiKey = "FMlhi8VrKLzGjgpTudJ55A==TktrZFB9mhCGUnPO";

const options = {
    method: "GET",
    headers: { 'X-Api-Key': apiKey},
};



const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
        jokeEl.innerText = "Updating";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..";
 const response = await fetch(apiURL, options);
 const data = await response.json();
 btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke";

 jokeEl.innerText = data[0].joke;
    } catch (error) {
      jokeEl.innerText = "An error happens, please try again later";  
      btnEl.disabled = false;
    btnEl.innerText = "Tell Me a Joke";
    }
    
}
btnEl.addEventListener("click", getJoke);