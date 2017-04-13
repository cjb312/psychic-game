
//Options for computer to guess as well as an empty array to store user guesses

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var yourGuessesSoFar = []; 

    var computerGuess = options[Math.floor(Math.random() * options.length)]; 
    document.onkeyup = function(event) { 
        var userGuess = event.key; 

        //correct guess results in +1 wins, game is reset to 9 guesses left and computer chooses new number from var options

        if (userGuess === computerGuess) {
            wins++; 
            guessesLeft = 9;
            yourGuessesSoFar = [];
            computerGuess = options[Math.floor(Math.random() * options.length)];


        //Subtract guesses after each incorrect response
        } else { 	
            guessesLeft--; 
            yourGuessesSoFar.push(userGuess); 


            //Guesses hit 0 a loss is added, game resets, computer chooses new letter
            if (guessesLeft === 0) { 
                losses++;
                guessesLeft = 9;
                yourGuessesSoFar = [];
                computerGuess = options[Math.floor(Math.random() * options.length)];
            }
        }
        
        //new html for when a game is started  
        var html = "<h1>The Psychic Game</h1>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses So Far: " + yourGuessesSoFar.join(' ') + "</p>"; 
              
        document.querySelector("#game").innerHTML = html; 
        //changes innerHTML to the var HTML above
    }
    