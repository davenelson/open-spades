/**
 * Shuffles the properties of an array using the Fisher-Yates algorithm.
 * http://sedition.com/perl/javascript-fy.html
 * The Fisher–Yates shuffle (named after Ronald Fisher and Frank Yates), also
 * known as the Knuth shuffle (after Donald Knuth), is an algorithm for
 * generating a random permutation of a finite set—in plain terms, for randomly
 * shuffling the set.
 * @param myArray
 * @returns {boolean}
 */
function shuffle(myArray) {
    "use strict";
    var i = myArray.length, j, temp;
    if (i === 0) {
        return false;
    }
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = temp;
    }
    return true;
}
