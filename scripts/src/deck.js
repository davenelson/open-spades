/*
 *
 *  A deck has the following properties
 *
 */

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
        // console.log((cardCount + 1) + " " + cards[cardCount].value + " / " + cards[cardCount].properName + " of " + cards[cardCount].suit);
        cardCount++;
    }
}

shuffle(cards);

for (i = 0; i < cards.length; i++) {
    console.log((i + 1) + " " + cards[i].value + " / " + cards[i].properName + " of " + cards[i].suit);
}
