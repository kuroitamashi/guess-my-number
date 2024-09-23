'use strict';

/*
// Changing the HTML element content with JS
document.querySelector( '.message' ).textContent = 'Correct number 🎉`';

//! For input fields, we use value　
//! document.querySelector( '.guess' ).value = 98;
*/

// Generating a random number　
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let newHighscore = 0;

const displayMessage = function(message) {
    document.querySelector( '.message' ).textContent = message;
};
const displayNumber = function(number) {
    document.querySelector( '.number' ).textContent = number;
};
const displayScore = function(score) {
    document.querySelector( '.score' ).textContent = score;
};

//? An Event Listener takes 2 parameters: The nature of the event, and the function to execute when that event happens　
//? We dont need to call the function. Javascript's engine will do it when the event is triggered　

document.querySelector( '.check' ).addEventListener( 'click', function() {
    // When click on check, stores the guessed nbr in a variable　
    const guess = Number( document.querySelector( '.guess' ).value );
    // When there is no number guessed
    if ( !guess ) {
        displayMessage( 'Please enter your number' );
    }
    // When guess is correct
    else if ( guess === secretNumber ) {
        displayMessage( 'YAY! Correct number!' );
        displayNumber( secretNumber );
        document.querySelector( 'body' ).style.backgroundColor = 'limegreen';
        document.querySelector( '.number' ).style.width = '30rem';
        // Setting up the highscore
        if ( score > newHighscore ) {
            newHighscore = score;
            document.querySelector( '.highscore' ).textContent = newHighscore
        }
    }
    // When guess is wrong
    else {
        if ( score > 1 ) {
            displayMessage( guess > secretNumber ? 'Too hight!' : 'Too low!' );
            score--;
            displayScore( score );
        }
        // User loses the Gamepad. He sucks
        else {
            displayMessage('You lose, sucker!')
            displayScore( '0' );
        }
    }
});
// Reset the game when user clicks on again
document.querySelector( '.again' ).addEventListener( 'click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage( 'Please enter your number!' );
    displayNumber( '?' );
    displayScore( score );
    document.querySelector( '.guess' ).value = '';

    document.querySelector( 'body' ).style.backgroundColor = '#222';
    document.querySelector( '.number' ).style.width = '15rem';
});

// Add fixme, note, review to better comments
