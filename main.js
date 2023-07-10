//on déclare les variables qui vont prendre d'id des classes btn quote et author
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading..."; //afficher ce mssg dans le buton quand je clique sur le bouton
    btnEl.disabled = true;
    quoteEl.innerText = "Updating..."; 
    authorEl.innerText = "Updating...";
    //envoie une requête à une API, récupère les données JSON de la réponse, et extrait le contenu de la citation et l'auteur à partir de ces données
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    //mets a jour le contenu html et affiche la citation et author.
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
    //gère les erreurs en affichant un message d'erreur approprié et le bouton revien comme vant après une erreur
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

getQuote()

btnEl.addEventListener("click", getQuote);