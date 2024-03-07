import { Card } from "./Card.js"

const suits = ['Hearts','Diamonds','Clubs','Spades']
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

export class Deck {
    #cards; // default to private var's until otherwise needed
    // the goal is to abstract away as much as possible
    
    constructor() {
        this.#cards = [];
        for (const suit of suits) {
            for (const value of values) {
                this.#cards.push(new Card(suit, value))
            }
        }
    }

    // Fisher-Yates shuffle algo
    // Start from end of array, pick a random index to switch with that is not zero
    // Switch the indexes, decrement by 1 (after starting from end of array), and repeat
    // this random index switch until you get to the beginning of the array.
    shuffle() {
        // Shuffle - should only happen at the beginning of a round
        for (let i = this.#cards.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));

            // Array Destructuring - ES6 2015 - Don't have to use temp variables anymore
            [this.#cards[i], this.#cards[randomIndex]] = [this.#cards[randomIndex], this.#cards[i]];
        }
        return this.#cards
    }

    drawCard() {
        // pick a random card then mark the picked card as removed=true

    }

    resetDeck() {
        // reset everything to removed = false

        // Display all card objects
        for (let i = 0; i < this.#cards.length; i++) {
            console.log(this.#cards[i]);
        }
    }
}