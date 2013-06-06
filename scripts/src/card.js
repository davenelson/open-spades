/**
 * Represents individual playing cards
 * @param value {number} - The numeric value of the card.
 * @param properName {string} - The name of the card.
 * @param suit {string} - The suit of the card.
 * @param faceUp {boolean} - Is the card face up?
 * @constructor
 */
function Card(value, properName, suit, faceUp) {
    "use strict";
    this.value = value;
    this.properName = properName;
    this.suit = suit;
    this.faceUp = typeof faceUp !== 'undefined' ? faceUp : false;
}


