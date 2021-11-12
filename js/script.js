/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: `Quote No.1`,
    source: `Source No.1`,
    citation: `Citation No.1`,
    //year: `Year No.1`
  },
  {
    quote: `Quote No.2`,
    source: `Source No.2`,
    citation: `Citation No.2`,
    year: `Year No.2`
  },
  {
    quote: `Quote No.3`,
    source: `Source No.3`,
    //citation: `Citation No.3`,
    year: `Year No.3`
  },
  {
    quote: `Quote No.4`,
    source: `Source No.4`,
    citation: `Citation No.4`,
    year: `Year No.4`
  },
  {
    quote: `Quote No.5`,
    source: `Source No.5`,
    citation: `Citation No.5`,
    year: `Year No.5`
  },
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomQuoteObject = quotes[randomNumber];
  // 3. Return the variable storing the random quote object
  return randomQuoteObject;
}
//console.log(getRandomQuote(quotes));
//console.log(randomNumber);

/***
 * `printQuote` function
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let randomQuote = getRandomQuote();
  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let html = ``;
  html += `<p class="quote">${randomQuote.quote}</p>`;
  html += `<p class="source">${randomQuote.source}`;
  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if(randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span>`;
  } else {
    html += `<span class="citation">No Citation</span>`;
  }
  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if(randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span>`;
  } else {
    html += `<span class="year">No Year</span>`;
  }
  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  html += `</p>`
  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.querySelector('#quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);