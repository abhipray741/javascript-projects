const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshButton = document.querySelector(".refresh-button");
const loader = document.querySelector(".loader");
function fetchRandomQuote() {
    showLoader();
  fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then((result) => {
        if(result)
        {
            removeLoader();
            displayQuote(result[0])
        }
    })
    .catch((e) => console.log(e));
}

fetchRandomQuote();

function displayQuote(getQuote) {
  console.log(getQuote);
  quoteWrapper.innerHTML = `
    <div class="quote-item">
    <p>${getQuote.author}</p>
    <p>${getQuote.content}</p>
    <p>${getQuote.dateAdded}</p>
    <p>${getQuote.tags[0]}</p>
    </div>`;
}

refreshButton.addEventListener('click',()=>{
    fetchRandomQuote()
})

function showLoader(){
    loader.classList.add('show');
    quoteWrapper.classList.add('hide')
}

function removeLoader(){
    loader.classList.remove('show');
    quoteWrapper.classList.remove('hide')
}