const apiUrlRandom = "https://api.quotable.io/random";
const apiUrlLove = "https://api.quotable.io/random?tags=love";
const apiUrlWar = "https://api.quotable.io/random?tags=war";


const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getRandomQuote(url){
    try {
    const response = await fetch(url);

    if (response.ok === false) {
        throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
    }
    var randomData = await response.json();
    quote.innerHTML = randomData.content;
    author.innerHTML = randomData.author;
 
    } catch (error) {
        console.log(error)
        document.getElementById('quote').innerHTML = "I have a dream... that I one day will fetch you quotes withour errors &#128148";
        document.getElementById('author').innerHTML = "I'm sorry";
    }
}

async function getLoveQuote(url){
    try {
    const response = await fetch(url);

    if (response.ok === false) {
        throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
    }
    var loveData = await response.json();
    quote.innerHTML = loveData.content;
    author.innerHTML = loveData.author;

    } catch (error) {
        console.log(error)
        document.getElementById('quote').innerHTML = "I have a dream... that I one day will fetch you quotes withour errors &#128148";
        document.getElementById('author').innerHTML = "I'm sorry";
    }
}

async function getWarQuote(url){
    try {
    const response = await fetch(url);

    if (response.ok === false) {
        throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
    }
    var warData = await response.json();
    quote.innerHTML = warData.content;
    author.innerHTML = warData.author;
    } catch (error) {
        console.log(error)
        document.getElementById('quote').innerHTML = "I have a dream... that I one day will fetch you quotes withour errors &#128148";
        document.getElementById('author').innerHTML = "I'm sorry";
    }
}


getRandomQuote(apiUrlRandom);
getLoveQuote(apiUrlLove);
getLoveQuote(apiUrlWar);
