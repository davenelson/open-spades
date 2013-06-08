

configTest = TestCase("configTest");

configTest.prototype.testSuits = function() {
    assertTrue("Suits is greater than 0", (config.suits.length > 0));
};
configTest.prototype.testProperName = function() {
    assertTrue("Proper Name is greater than 0", (config.properName.length > 0));
};
configTest.prototype.testValues = function() {
    assertTrue("Values is greater than 0", (config.values.length > 0));
};
