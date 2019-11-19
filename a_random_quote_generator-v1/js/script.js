/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
an array of quotes that are there own objects with key:value pairs
***/
var quotes=[
  {quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.', source: 'Steve Jobs', citation: 'Speech',year: '2001'},
  {quote: 'If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.',source: 'James Cameron', year: '2005'},
  {quote: "I'm going to make him an offer he can't refuse.",source: 'The Godfather',year: '1972'},
  {quote: 'Page Not Found',source: '404 warning', year: '1989'},
  {quote: 'Feed me Seymour',source: 'Audrey 2',citation: 'Song', year: '1986'}];

console.log(quotes);


/***
create the function that will select the number to index by
***/
function getRandomQuote () {
  var randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 5);
  return randomNumber;

};
console.log(getRandomQuote());


/***
  Create the `printQuote` function. This function then:

  get an index number
  concatinates our quote and source
  then checks if their is a citation and adds it if there is
  then checks if there is a year and adds it if there is
  grabs the quote bocx element
  and makes our string the inner html for it
***/

function printQuote() {
  var quoteIndex = getRandomQuote();
  var htmlString = '';
  htmlString += '<p class="quote"> ' + quotes[quoteIndex]['quote'] + '</p> ' + '<p class ="source"> ' + quotes[quoteIndex]['source'];

  if(quotes[quoteIndex]['citation'] != undefined ){
    htmlString += '<span class="citation"> ' + quotes[quoteIndex]['citation'] + '</span> ';
  }

  if(quotes[quoteIndex]['year'] != undefined ){
    htmlString += '<span class="year">' + quotes[quoteIndex]['year'] + '</span>' + '</p>';
  }
  var outPutDiv = document.getElementById('quote-box');

  outPutDiv.innerHTML = htmlString;
};

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener catches it and runs our print quote script
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
