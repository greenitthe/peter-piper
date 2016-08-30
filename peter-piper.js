/**
 * peter-piper.js
 * ==============
 *
 * Count the number of times a capital `P` or lowercase `p` shows up in the
 * Peter Piper tongue twister.
 *
 * Hint
 * ----
 * Read the 'References' section in the README, which contains links to some
 * JavaScript methods and language features that might be helpful.
 */

var peterpiper = '';
peterpiper += "Peter Piper picked a peck of pickled peppers.";
peterpiper += "A peck of pickled peppers Peter Piper picked.";
peterpiper += "If Peter Piper picked a peck of pickled peppers,";
peterpiper += "Where's the peck of pickled peppers Peter Piper picked?";

/** To switch between testing extra credit and the regular assignment, just comment out the old and uncomment the new counter **/

//Regular Counter
var counter = countPOccurrences(peterpiper);
//Counter for v.justCharAndNoFor
//var counter = countCharOccurrences(peterpiper, 'p');
//Counter for v.wordsNow
//var counter = countWordOccurrences(peterpiper, 'peck');

// TODO: Count the number of times an uppercase P or lowercase p character
//       occurs in the `peterpiper` string.


/**/
//The extra credit way to do this (v.justCharAndNoFor):
function countCharOccurrences(str, char) {
  return str.toLowerCase().split(char.toLowerCase()).length - 1;
}
/**/

/**/
//The extra credit way to do this (v.wordsNow):
function countWordOccurrences(str, word) {
  return str.toLowerCase().split(word.toLowerCase()).length - 1;
}
/**/


/**/
//The easy way to do this, with a for loop that stops at the end of the string
function countPOccurrences(str) {
  var localCounter = 0;
  for (var i = 0; i < str.length; i++) {
    //Make everything lowercase and then check if the letter is p
    if (str.toLowerCase().charAt(i) == 'p') {
      //+1
      localCounter++;
    }
  }
  return localCounter;
}
/**/

console.log("There are " + counter + " P's in Peter Piper.");
