ShuffleTest = TestCase("ShuffleTest");

ShuffleTest.prototype.testShuffleCards = function() {
    var deck = createDeck();

    shuffle(deck);

    assertEquals("52 Cards in the Deck", deck.length + " Cards in the Deck");
};

ShuffleTest.prototype.testArray = function() {
    var deckTwo = createDeck();

    shuffle(deckTwo);

    assertArray("The shuffled deck is not an array", deckTwo);
};

ShuffleTest.prototype.testValue = function() {
    var deckTwo = createDeck(),
        i,
        value;

    shuffle(deckTwo);

    i = 51;
    value = deckTwo[i].value;

    assertNumber("The last card has a value that is not a number", value);
};

ShuffleTest.prototype.testProperName = function() {
    var deckTwo = createDeck(),
        i,
        properName;

    shuffle(deckTwo);

    i = 51;
    properName = deckTwo[i].properName;

    assertString("The last card's properName is not a string", properName);
};

ShuffleTest.prototype.testSuit = function() {
    var deckTwo = createDeck(),
        i,
        suit;

    shuffle(deckTwo);

    i = 51;
    suit = deckTwo[i].suit;

    assertString("The last card's suit is not a string", suit);
};

ShuffleTest.prototype.testFaceUp = function() {
    var deckTwo = createDeck(),
        i,
        faceUp;

    shuffle(deckTwo);

    i = 51;
    faceUp = deckTwo[i].faceUp;

    assertBoolean("The last card's faceUp value is not a boolean", faceUp);
};
