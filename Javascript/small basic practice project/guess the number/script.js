let randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(randomNumber);


const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const Remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement('p')
console.log(p);


let previousGuess = []
let numGuess = 1
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        console.log(guess);
        ValidateGuess(guess)
    })
}

function ValidateGuess(guess) {
    if (isNaN(guess) ) {
        alert('Please enter the valid number form 1 to 100.')
    }
    else if ( guess < 1 ) {
        alert('Please enter the valid number form 1 to 100.')
    }
    else if (  guess > 100) {
        alert('Please enter the valid number form 1 to 100.')
    }
    else {
        previousGuess.push(guess)
        if (numGuess === 11) {
            DisplayGuess(guess)
            DisplayMessage(`Game over. Random Number is ${randomNumber}`)
            endGame()
        }
        else{
            DisplayGuess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess) {
    if (guess === randomNumber) {
        DisplayMessage(`You Guessed it right which is ${randomNumber}`)
        endGame()
    }
    else if (guess > randomNumber) {
        DisplayMessage(`You Guessed it big provide me the smaller one`)

    }
    else if (guess < randomNumber) {
        DisplayMessage(`You Guessed it small provide me the Bigger one`)
       
    }
}

function DisplayGuess(guess) {
   UserInput.value = ''
   guessSlot.innerHTML +=`${guess}, `
   numGuess++;
   Remaning.innerHTML = `${11-numGuess }`
}


function DisplayMessage(Message) {
    lowOrHi.innerHTML= `<h2>${Message}</h2>`;
}

function endGame() {
    UserInput.value = '';
    UserInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    StartOver.appendChild(p);
    playGame = false;

    // Call NewGame AFTER the button is added to the DOM
    NewGame();
}

function NewGame() {
    const newGameButton = document.querySelector('#newGame');

    console.log(newGameButton.innerHTML);
    
    newGameButton.addEventListener('click', function (e) {
        // Reset the game
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        Remaning.innerHTML = `${11 - numGuess}`;
        UserInput.removeAttribute('disabled');
        StartOver.removeChild(p);
        playgame = true;
    });
    
}


