DeckTest = TestCase("DeckTest");

DeckTest.prototype.testNumberOfCards = function() {
    var deckOne = createDeck();
    assertEquals("52 Cards in the Deck", deckOne.length + " Cards in the Deck");
};

DeckTest.prototype.testAceOfSpades = function() {
    var deckTwo = createDeck(),
        i = 51,
        value = deckTwo[i].value,
        properName = deckTwo[i].properName,
        suit = deckTwo[i].suit;

    assertEquals("Card 51 has a value of 14 and is the Ace of Spades", "Card " + i + " has a value of " + value + " and is the " + properName + " of " + suit);
};

DeckTest.prototype.testAceOfDiamonds = function() {
    var deckTwo = createDeck(),
        i = 38,
        value = deckTwo[i].value,
        properName = deckTwo[i].properName,
        suit = deckTwo[i].suit;

    assertEquals("Card 38 has a value of 14 and is the Ace of Diamonds", "Card " + i + " has a value of " + value + " and is the " + properName + " of " + suit);
};

DeckTest.prototype.testAceOfClubs = function() {
    var deckTwo = createDeck(),
        i = 25,
        value = deckTwo[i].value,
        properName = deckTwo[i].properName,
        suit = deckTwo[i].suit;

    assertEquals("Card 25 has a value of 14 and is the Ace of Clubs", "Card " + i + " has a value of " + value + " and is the " + properName + " of " + suit);
};

DeckTest.prototype.testAceOfHearts = function() {
    var deckTwo = createDeck(),
        i = 12,
        value = deckTwo[i].value,
        properName = deckTwo[i].properName,
        suit = deckTwo[i].suit;

    assertEquals("Card 12 has a value of 14 and is the Ace of Hearts", "Card " + i + " has a value of " + value + " and is the " + properName + " of " + suit);
};
