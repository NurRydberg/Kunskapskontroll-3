const apiUrlRandom = "https://api.quotable.io/random";
const apiUrlLove = "https://api.quotable.io/random?tags=love";
const apiUrlWar = "https://api.quotable.io/random?tags=war";
// const apiUrlFun = "https://api.quotable.io/random?tags=humorous" Lägga till fler knappar? Fixa griden

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getRandomQuote(url){
    const response = await fetch(url);
    var randomData = await response.json();

    quote.innerHTML = randomData.content;
    author.innerHTML = randomData.author;
}

async function getLoveQuote(url){
    const response = await fetch(url);
    var loveData = await response.json();

    quote.innerHTML = loveData.content;
    author.innerHTML = loveData.author;
}

async function getWarQuote(url){
    const response = await fetch(url);
    var warData = await response.json();

    quote.innerHTML = warData.content;
    author.innerHTML = warData.author;
}


getRandomQuote(apiUrlRandom);
getLoveQuote(apiUrlLove);
getLoveQuote(apiUrlWar);