// Card(value, properName, suit, faceUp)
CardTest = TestCase("CardTest");

CardTest.prototype.testOne = function() {
    var card = new Card(2, "Two", "Spades");
    assertEquals("2", card.value);
    assertEquals("Two", card.properName);
    assertEquals("Spades", card.suit);
    assertEquals(false, card.faceUp);
};
CardTest.prototype.testTwo = function() {
    var card2 = new Card(10, "Ten", "Hearts", true);
    assertEquals(10, card2.value);
    assertEquals("Ten", card2.properName);
    assertEquals("Hearts", card2.suit);
    assertEquals(true, card2.faceUp);
};