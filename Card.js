export class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.removed = false; // if removed = the card is in play and can't be drawn again from the deck
    }
}