/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotesList = [
  ['Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.', 'Steve Jobs', '2001'],
  ['If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.', 'James Cameron', '2005'],
  ['What are you going to do, stab me?','Unknown','Date Unknown'],
  ['Page Not Found', '404', '1989']
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote () {
  var randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;

};



/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  var quoteIndex = getRandomQuote();
  var htmlString = '';

  htmlString += '<p class="quote">';

  htmlString += quotesList[quoteIndex][0] + '</p> ';
  if( htmlString.length = 2 )
    htmlString += '<p class="source">' + quotesList[quoteIndex][1] +'</p>'

  if( htmlString.length = 3 )
    htmlString += '<p class="source">' + quotesList[quoteIndex][2] + '</p>'

  var outPutDiv = document.getElementById('quote-box');

  outPutDiv.innerHTML = htmlString;
};

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
