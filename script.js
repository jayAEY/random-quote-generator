const textDisplay = document.querySelector('#text')
const authorDisplay = document.querySelector('#author')
const button = document.querySelector('#new-quote')

let quoteAndAuthor = () => {
fetch('https://type.fit/api/quotes')
 .then((response) => response.json())
 .then((data) => {
   
     let index = Math.floor(Math.random()*(data.length-1));

     let quote = `<svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" fill="white" class="bi bi-quote" viewBox="4 2 8 16">
// <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
// </svg>  ${data[index].text}`;
    let author = data[index].author;

    textDisplay.innerHTML = quote
    authorDisplay.innerHTML = author
})
}

quoteAndAuthor()

button.addEventListener('click', quoteAndAuthor)


window.quoteAndAuthor = function() {
    
}