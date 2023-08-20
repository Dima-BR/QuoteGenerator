const api_url = "https://api.quotable.io/random";

const quote = document.getElementById('quote')
const author = document.getElementById('author')

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url)

const windowFeatures = "left=100,top=100,width=320,height=320";

function tweet() {
    const quoteText = encodeURIComponent(quote.innerHTML);
    const authorText = encodeURIComponent(author.innerHTML);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText}___ bY${authorText}`;

    window.open(tweetUrl, "Tweet window", `popup=yes,${windowFeatures}`);
}




// link got the api https://github.com/lukePeavey/quotable