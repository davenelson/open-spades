
/*
 * Card Object
 * A card has the following properties
 *  value: 2-13
 *  properName: two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace
 *  faceUp: true, false
 */


function Card(value, properName, suit, faceUp) {
    this.value = value;
    this.properName = properName;
    this.suit = suit;
    this.faceUp = typeof faceUp !== 'undefined' ? faceUp : false;
}


