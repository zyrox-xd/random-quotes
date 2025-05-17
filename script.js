const quotes = [
  "Believe in yourself and all that you are.",
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done."
];
const quoteElement = document.getElementById("quotes");
const button = document.getElementById("gen");

button.addEventListener ("click",() => {
    const randomindex = Math.floor(Math.random()*quotes.length);
    quoteElement.innerText = quotes[randomindex];

});