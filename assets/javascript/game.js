//hangmanGame is an object with all the properties and methods necessary to play the hangman game 
var hangmanGame = {
    //wordVault contains objects of all the pokemon in the game
    wordVault: [{
        name: "squirtle",
        picture: "assets/images/Squirtle.png"
    },
    {
        name: "wartortle",
        picture: "assets/images/Wartortle.png"
    },
    {
        name: "blastoise",
        picture: "assets/images/Blastoise.png"
    },
    {
        name: "bulbasaur",
        picture: "assets/images/Bulbasaur.png"
    },
    {
        name: "ivysaur",
        picture: "assets/images/Ivysaur.png"
    },
    {
        name: "venusaur",
        picture: "assets/images/Venusaur.png"
    },
    {
        name: "charmander",
        picture: "assets/images/Charmander.png"
    },
    {
        name: "charmeleon",
        picture: "assets/images/Charmeleon.png"
    },
    {
        name: "charizard",
        picture: "assets/images/Charizard.png"
    },
    {
        name: "pikachu",
        picture: "assets/images/Pikachu.png"
    }
    ],
    picture: "",
    guesses: 12,
    characters: [],
    unpopulated: [],
    guessedLetters: [],
    selectWord: function () {
        var j = Math.floor(Math.random() * this.wordVault.length);
        this.characters = this.wordVault[j].name.split("");
        this.unpopulated.length = this.characters.length;
        this.guessedLetters = [];
        this.guesses = 12;
        this.picture = this.wordVault[j].picture;
        for (let i = 0; i < this.unpopulated.length; i++) {
            this.unpopulated[i] = "_";
        }
        return this.wordVault[j].name;
    },
    guessLetter: function (letter) {
        var inWord = false, inTrash = false;
        for (let i = 0; i < this.characters.length; i++) {
            if (letter == this.characters[i]) {
                this.unpopulated[i] = letter;
                inWord = true;
            }
        }
        for (let i = 0; i < this.guessedLetters.length; i++) {
            if (letter == this.guessedLetters[i]) {
                inTrash = true;
            }
        }
        if (!inWord && !inTrash) {
            this.guessedLetters.push(letter);
            this.guesses--;
        }
    },
    showBoard: function () {

    },
    gameWon: function () {
        for (let i = 0; i < this.characters.length; i++) {
            if (this.characters[i] !== this.unpopulated[i]) {
                return false;
            }
        }
        return true;
    },
    gameLost: function () {
        if (this.guesses == 0) {
            return true;
        }
        return false;
    }

}
document.onkeyup = function (event) {
    var action = event.key, audio;
    console.log(action);
    switch (action) {

        case "Enter": audio = new Audio("assets/sounds/whos_that_pokemon.mp3");
            audio.play();
            //when user presses Enter, a new game is started and a new word is selected
            hangmanGame.selectWord();
            console.log(hangmanGame.characters);
            //displays the new attributes of the game
            document.getElementById("unpopulated").innerHTML = "<h2>" + hangmanGame.unpopulated.join(" ") + "</h2>";
            document.getElementById("guesses").innerHTML = "<p>" + hangmanGame.guesses + "</p>";
            document.getElementById("guessedLetters").innerHTML = "<p>" + hangmanGame.guessedLetters.join(" ") + "</p>";
            //resets all other html attributes
            document.getElementById("won-or-lost").innerHTML = "<p></p>";
            document.getElementById("picture").innerHTML = "";
            document.getElementById("unpopulated").setAttribute("class", "")
            break;

        //when user presses a-z, the we want to find if that character is in the word
        case String(action.match(/[a-z]+/g)):
        //first we check if the game is over (won or lost). if it is, we proceed no further and display a message for the user to continue to a new game
            if (hangmanGame.gameWon()) {
                document.getElementById("won-or-lost").innerHTML = '<h4 class="text-danger"> you won, press "enter" to start a new game </h4>';
                break;
            }
            if (hangmanGame.gameLost()) {
                document.getElementById("won-or-lost").innerHTML = '<h4 class="text-danger"> you lost, press "enter" to start a new game </h4>';
                break;
            }
            //then we execute the method guessLetter to initialize procedures to fill in that letter if it exists in the word
            hangmanGame.guessLetter(action);
            //displays updated attributes of the game
            document.getElementById("unpopulated").innerHTML = "<h2>" + hangmanGame.unpopulated.join(" ") + "</h2>";
            document.getElementById("guesses").innerHTML = "<p>" + hangmanGame.guesses + "</p>";
            document.getElementById("guessedLetters").innerHTML = "<p>" + hangmanGame.guessedLetters.join(" ") + "</p>";
            console.log(hangmanGame.unpopulated, hangmanGame.characters, hangmanGame.gameWon());
            //after guessing the letter, we want to check if the user has won, if so, we need to display relevant messages and change relevant attributes
            if (hangmanGame.gameWon()) {
                document.getElementById("won-or-lost").innerHTML = "<p> YOU WON!! </p>";
                audio = new Audio("assets/sounds/victory.wav");
                audio.play();
                document.getElementById("picture").innerHTML = "<img src=" + hangmanGame.picture + ">";
                document.getElementById("unpopulated").setAttribute("class", "text-success text-uppercase")
            }
            //next we check if user has lost and run out of guesses. if so, we display relevant message and change relevant attributes
            if (hangmanGame.gameLost()) {
                document.getElementById("won-or-lost").innerHTML = "<p> You Lost. </p>";
            }
            break;
    }
}