/*
    No-Limit Hold-Em Game

    Created: 3/4/2024
    Brian Rowell
*/
// Consts
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const gameWindowWidth = canvas.width;
const gameWindowHeight = canvas.height;

const chipStartAmount = 200; // each player

let playerChips = chipStartAmount;
let enemyChips = chipStartAmount;

// I'm thinking we could have a CONSTANTS file to store all these things like chipStartAmount, suits, values, etc.
const suits = ['Hearts','Diamonds','Clubs','Spades']
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

// Separate these at some point, just getting code on screen
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.removed = false; // if removed = the card is in play and can't be drawn again from the deck
    }
}

class Deck {
    constructor() {
        this.cards = [];
        for (const suit of suits) {
            for (const value of values) {
                this.cards.push(new Card(suit, value))
            }
        }
    }

    shuffle() {
        // Shuffle
    }

    drawCard() {
        // pick a random card then mark the picked card as removed=true
    }

    resetDeck() {
        // reset everything to removed = false
    }
}

const deck = new Deck();
for (let i = 0; i < deck.cards.length; ++i) {
    console.log(deck.cards[i].value + " of " + deck.cards[i].suit);
}

// Next Steps
/*
    Set up a 1v1, where AI just picks a random move to make
*/


// Update Stuff
// function update() {
//     // Update Logic



//     // Call Render
//     render();
    
//     // Recursively called every frame
//     requestAnimationFrame(update);
// }

// Draw Stuff
// function render() {
//     // ctx.clearRect(0, 0, gameWindowWidth, gameWindowHeight);

//     // ctx.stroke();
// }

// public static main void args blah blah 
// requestAnimationFrame(update);


