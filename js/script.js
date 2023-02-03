/************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Student: Ryan Agatep
************************************/

/**
 * Array of objects
 */
let quotes = [
  {
    quote: `I know.`,
    source: `Han Solo to Princess Leia`,
    citation: `The Empire Strikes Back`,
    year: `1980`
  },
  {
    quote: `It’d be a lot cooler if you did.`,
    source: `Wooderson to Mitch Kramer`,
    citation: `Dazed and Confused`,
    year: `1993`
  },
  {
    quote: `I have nipples, Greg. Could you milk me?`,
    source: `Jack Byrnes to Greg Focker`,
    citation: `Meet the Parents`,
    year: `2000`
  },
  {
    quote: `So, you’re telling me there’s a chance!`,
    source: `Lloyd Christmas to Mary Swanson`,
    citation: `Dumb and Dumber`,
    //year: `Year No.3`
  },
  {
    quote: `Napoleon, don’t be jealous that I’ve been chatting online with babes all day.`,
    source: `Kip to Napoleon Dynamite`,
    //citation: `Citation No.4`,
    //year: `Year No.4`
  },
];
/**
 *  The getRandomQuote function generates a random number from 0 to the length of the quotes array, 
 *  using the Math.floor() and Math.random() functions, assigns it to a variable, 
 *  and returns it. The console.log method shows the quote number in the console.
 */
const generateRandomNumber = upper => Math.floor(Math.random() * upper);

function getRandomQuote() {
  const randomNumber = generateRandomNumber(quotes.length);
  let randomQuoteObject = quotes[randomNumber];
  return randomQuoteObject;
}
/**
 * The getRandomColor function generates a random color for the page's background
 */
function getRandomColor() {
  const rgbValue = () => { return Math.floor(Math.random() * 255); }
  return `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
}
/**
 * showTimer function
 * Prints a new quote at a fixed interval.
 */
const showTimer = () => {
  printQuote();
}; 
// Changes quote every 15 seconds
const startTimer = () => {
  setInterval(showTimer, 15000);
}; 
startTimer();
/**
 *  The printQuote function, calls the getRandomQuote() function generates
 *    and assigns it to the randomQuote variable.
 *  The variable html is initiated with the first two elements, 
 *    their classNames, and the quote and source properties.
 */
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
              <p class="source">${randomQuote.source}`;
  /**
   *  The if statements check if there are citation and sources properties per object,
   and added to the html string.
  */
  if(randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span>`;
  } 
  if(randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span>`;
  } 
  // Closes the html string and set the quote-box div to the complete HTML string.
  html += `</p>`
  //console.log(html);
  document.querySelector('#quote-box').innerHTML = html;
  document.querySelector('body').style = `background-color: ${getRandomColor()} `;
}
/**
 * click event listener for the print quote button
 */
document.getElementById('load-quote').addEventListener("click", printQuote, false);
