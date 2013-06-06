/**
 * Creates a deck of 52 playing cards
 * @returns {Array} - An array of card objects
 */
function createDeck() {
    "use strict";
    var suit = null,
        value = null,
        properName = null,
        cardCount = 0,
        cards = [],
        i = null,
        x = null;
    for (i = 0; i <= 3; i++) { // suits
        suit = config.suits[i];
        for (x = 0; x <= 12; x++) { // values
            value = config.values[x];
            properName = config.properName[x];
            cards[cardCount] = new Card(value, properName, suit);
            // console.log((cardCount + 1) + " " + cards[cardCount].value +
            // " / " + cards[cardCount].properName + " of " +
            // cards[cardCount].suit);
            cardCount++;
        }
    }
    return cards;
}
