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
        name: "caterpie",
        picture: "assets/images/Caterpie.png"
    },
    {
        name: "metapod",
        picture: "assets/images/Metapod.png"
    },
    {
        name: "butterfree",
        picture: "assets/images/Butterfree.png"
    },
    {
        name: "weedle",
        picture: "assets/images/Weedle.png"
    },
    {
        name: "kakuna",
        picture: "assets/images/Kakuna.png"
    },
    {
        name: "beedrill",
        picture: "assets/images/Beedrill.png"
    },
    {
        name: "pidgey",
        picture: "assets/images/pidgey.png"
    },
    {
        name: "pidgeotto",
        picture: "assets/images/Pidgeotto.png"
    },
    {
        name: "pidgeot",
        picture: "assets/images/Pidgeot.png"
    },
    {
        name: "rattata",
        picture: "assets/images/Rattata.png"
    },
    {
        name: "raticate",
        picture: "assets/images/Raticate.png"
    },
    {
        name: "spearow",
        picture: "assets/images/Spearow.png"
    },
    {
        name: "fearow",
        picture: "assets/images/Fearow.png"
    },
    {
        name: "ekans",
        picture: "assets/images/Ekans.png"
    },
    {
        name: "arbok",
        picture: "assets/images/Arbok.png"
    },
    {
        name: "pikachu",
        picture: "assets/images/Pikachu.png"
    },
    {
        name: "raichu",
        picture: "assets/images/Raichu.png"
    },
    {
        name: "sandshrew",
        picture: "assets/images/Sandshrew.png"
    },
    {
        name: "sandslash",
        picture: "assets/images/Sandslash.png"
    },
    {
        name: "nidoran",
        picture: "assets/images/Nidoran.png"
    },
    {
        name: "nidorina",
        picture: "assets/images/Nidorina.png"
    },
    {
        name: "nidoqueen",
        picture: "assets/images/Nidoqueen.png"
    },
    {
        name: "nidorino",
        picture: "assets/images/Nidorino.png"
    },
    {
        name: "nidoking",
        picture: "assets/images/Nidoking.png"
    },
    {
        name: "clefairy",
        picture: "assets/images/Clefairy.png"
    },
    {
        name: "clefable",
        picture: "assets/images/Clefable.png"
    },
    {
        name: "vulpix",
        picture: "assets/images/Vulpix.png"
    },
    {
        name: "ninetails",
        picture: "assets/images/Ninetails.png"
    },
    {
        name: "jigglypuff",
        picture: "assets/images/Jigglypuff.png"
    },
    {
        name: "wigglytuff",
        picture: "assets/images/Wigglytuff.png"
    },
    {
        name: "zubat",
        picture: "assets/images/Zubat.png"
    },
    {
        name: "golbat",
        picture: "assets/images/Golbat.png"
    },
    {
        name: "oddish",
        picture: "assets/images/Oddish.png"
    },
    {
        name: "gloom",
        picture: "assets/images/Gloom.png"
    },
    {
        name: "vileplume",
        picture: "assets/images/Vileplume.png"
    },
    {
        name: "paras",
        picture: "assets/images/Paras.png"
    },
    {
        name: "parasect",
        picture: "assets/images/Parasect.png"
    },
    {
        name: "venonat",
        picture: "assets/images/Venonat.png"
    },
    {
        name: "venomoth",
        picture: "assets/images/Venomoth.png"
    },
    {
        name: "diglett",
        picture: "assets/images/Diglett.png"
    },
    {
        name: "dugtrio",
        picture: "assets/images/Dugtrio.png"
    },
    {
        name: "meowth",
        picture: "assets/images/Meowth.png"
    },
    {
        name: "persian",
        picture: "assets/images/Persian.png"
    },
    {
        name: "psyduck",
        picture: "assets/images/Psyduck.png"
    },
    {
        name: "golduck",
        picture: "assets/images/Golduck.png"
    },
    {
        name: "mankey",
        picture: "assets/images/Mankey.png"
    },
    {
        name: "primeape",
        picture: "assets/images/Primeape.png"
    },
    {
        name: "growlithe",
        picture: "assets/images/Growlithe.png"
    },
    {
        name: "arcanine",
        picture: "assets/images/Arcanine.png"
    },
    {
        name: "poliwag",
        picture: "assets/images/Poliwag.png"
    },
    {
        name: "poliwhirl",
        picture: "assets/images/Poliwhirl.png"
    },
    {
        name: "poliwrath",
        picture: "assets/images/Poliwrath.png"
    },
    {
        name: "abra",
        picture: "assets/images/Abra.png"
    },
    {
        name: "kadabra",
        picture: "assets/images/Kadabra.png"
    },
    {
        name: "alakazam",
        picture: "assets/images/Alakazam.png"
    },
    {
        name: "machop",
        picture: "assets/images/Machop.png"
    },
    {
        name: "machamp",
        picture: "assets/images/Machamp.png"
    },
    {
        name: "bellsprout",
        picture: "assets/images/Bellsprout.png"
    },
    {
        name: "weepinbell",
        picture: "assets/images/Weepinbell.png"
    },
    {
        name: "victreebel",
        picture: "assets/images/Victreebel.png"
    },
    {
        name: "tentacool",
        picture: "assets/images/Tentacool.png"
    },
    {
        name: "tentacruel",
        picture: "assets/images/Tentacruel.png"
    },
    {
        name: "geodude",
        picture: "assets/images/Geodude.png"
    },
    {
        name: "graveler",
        picture: "assets/images/Graveler.png"
    },
    {
        name: "golem",
        picture: "assets/images/Golem.png"
    },
    {
        name: "ponyta",
        picture: "assets/images/Ponyta.png"
    },
    {
        name: "rapidash",
        picture: "assets/images/Rapidash.png"
    },
    {
        name: "slowpoke",
        picture: "assets/images/Slowpoke.png"
    },
    {
        name: "slowbro",
        picture: "assets/images/Slowbro.png"
    },
    {
        name: "magnemite",
        picture: "assets/images/Magnemite.png"
    },
    {
        name: "magneton",
        picture: "assets/images/Magneton.png"
    },
    {
        name: "farfetchd",
        picture: "assets/images/Farfetchd.png"
    },
    {
        name: "doduo",
        picture: "assets/images/Doduo.png"
    },
    {
        name: "dodrio",
        picture: "assets/images/Dodrio.png"
    },
    {
        name: "seel",
        picture: "assets/images/Seel.png"
    },
    {
        name: "dewgong",
        picture: "assets/images/Dewgong.png"
    },
    {
        name: "grimer",
        picture: "assets/images/Grimer.png"
    },
    {
        name: "muk",
        picture: "assets/images/Muk.png"
    },
    {
        name: "shellder",
        picture: "assets/images/Shellder.png"
    },
    {
        name: "cloyster",
        picture: "assets/images/Cloyster.png"
    },
    {
        name: "gastly",
        picture: "assets/images/Gastly.png"
    },
    {
        name: "haunter",
        picture: "assets/images/Haunter.png"
    },
    {
        name: "gengar",
        picture: "assets/images/Gengar.png"
    },
    {
        name: "onix",
        picture: "assets/images/Onix.png"
    },
    {
        name: "drowzee",
        picture: "assets/images/Drowzee.png"
    },
    {
        name: "hypno",
        picture: "assets/images/Hypno.png"
    },
    {
        name: "krabby",
        picture: "assets/images/Krabby.png"
    },
    {
        name: "kingler",
        picture: "assets/images/Kingler.png"
    },
    {
        name: "voltorb",
        picture: "assets/images/Voltorb.png"
    },
    {
        name: "electrode",
        picture: "assets/images/Electrode.png"
    },
    {
        name: "exeggcute",
        picture: "assets/images/Exeggcute.png"
    },
    {
        name: "exeggutor",
        picture: "assets/images/Exeggutor.png"
    },
    {
        name: "cubone",
        picture: "assets/images/Cubone.png"
    },
    {
        name: "marowak",
        picture: "assets/images/Marowak.png"
    },
    {
        name: "hitmonlee",
        picture: "assets/images/Hitmonlee.png"
    },
    {
        name: "hitmonchan",
        picture: "assets/images/Hitmonchan.png"
    },
    {
        name: "lickitung",
        picture: "assets/images/Lickitung.png"
    },
    {
        name: "koffing",
        picture: "assets/images/Koffing.png"
    },
    {
        name: "weezing",
        picture: "assets/images/Weezing.png"
    },
    {
        name: "rhyhorn",
        picture: "assets/images/Rhyhorn.png"
    },
    {
        name: "rhydon",
        picture: "assets/images/Rhydon.png"
    },
    {
        name: "chansey",
        picture: "assets/images/Chansey.png"
    },
    {
        name: "tangela",
        picture: "assets/images/Tangela.png"
    },
    {
        name: "kangaskhan",
        picture: "assets/images/Kangaskhan.png"
    },
    {
        name: "horsea",
        picture: "assets/images/Horsea.png"
    },
    {
        name: "seadra",
        picture: "assets/images/Seadra.png"
    },
    {
        name: "goldeen",
        picture: "assets/images/Goldeen.png"
    },
    {
        name: "seaking",
        picture: "assets/images/Seaking.png"
    },
    {
        name: "staryu",
        picture: "assets/images/Staryu.png"
    },
    {
        name: "starmie",
        picture: "assets/images/Starmie.png"
    },
    {
        name: "mrmime",
        picture: "assets/images/MrMime.png"
    },
    {
        name: "scyther",
        picture: "assets/images/Scyther.png"
    },
    {
        name: "jynx",
        picture: "assets/images/Jynx.png"
    },
    {
        name: "electrabuzz",
        picture: "assets/images/Electrabuzz.png"
    },
    {
        name: "magmar",
        picture: "assets/images/Magmar.png"
    },
    {
        name: "pinsir",
        picture: "assets/images/Pinsir.png"
    },
    {
        name: "tauros",
        picture: "assets/images/Tauros.png"
    },
    {
        name: "magikarp",
        picture: "assets/images/Magikarp.png"
    },
    {
        name: "gyarados",
        picture: "assets/images/Gyarados.png"
    },
    {
        name: "lapras",
        picture: "assets/images/Lapras.png"
    },
    {
        name: "ditto",
        picture: "assets/images/Ditto.png"
    },
    {
        name: "eevee",
        picture: "assets/images/Eevee.png"
    },
    {
        name: "vaporeon",
        picture: "assets/images/Vaporeon.png"
    },
    {
        name: "jolteon",
        picture: "assets/images/Jolteon.png"
    },
    {
        name: "flareon",
        picture: "assets/images/Flareon.png"
    },
    {
        name: "porygon",
        picture: "assets/images/Porygon.png"
    },
    {
        name: "omanyte",
        picture: "assets/images/Omanyte.png"
    },
    {
        name: "omastar",
        picture: "assets/images/Omastar.png"
    },
    {
        name: "kabuto",
        picture: "assets/images/Kabuto.png"
    },
    {
        name: "kabutops",
        picture: "assets/images/Kabutops.png"
    },
    {
        name: "aerodactyl",
        picture: "assets/images/Aerodactyl.png"
    },
    {
        name: "snorlax",
        picture: "assets/images/Snorlax.png"
    },
    {
        name: "articuno",
        picture: "assets/images/Articuno.png"
    },
    {
        name: "zapdos",
        picture: "assets/images/Zapdos.png"
    },
    {
        name: "moltres",
        picture: "assets/images/Moltres.png"
    },
    {
        name: "dratini",
        picture: "assets/images/Dratini.png"
    },
    {
        name: "dragonair",
        picture: "assets/images/Dragonair.png"
    },
    {
        name: "dragonite",
        picture: "assets/images/Dragonite.png"
    },
    {
        name: "mewtwo",
        picture: "assets/images/Mewtwo.png"
    },
    {
        name: "mew",
        picture: "assets/images/Mew.png"
    },
    ],
    initialized: false,
    picture: "",
    guesses: 12,
    difficulty: "easy",
    characters: [],
    unpopulated: [],
    guessedLetters: [],

    //selects a new word to be played
    selectWord: function () {
        var j = Math.floor(Math.random() * this.wordVault.length);
        this.characters = this.wordVault[j].name.split("");
        this.unpopulated.length = this.characters.length;
        this.guessedLetters = [];
        switch (this.difficulty) {
            case "easy": this.guesses = 12; break;
            case "medium": this.guesses = 9; break;
            case "hard": this.guesses = 5; break;
        }
        console.log(this.guesses);
        console.log(this.difficulty);
        this.picture = this.wordVault[j].picture;
        for (let i = 0; i < this.unpopulated.length; i++) {
            this.unpopulated[i] = "_";
        }
    },

    //runs a guessed letter through the game and changes all necessary parameters
    guessLetter: function (letter) {
        var audio, inWord = false, inTrash = false, repeat=false;
        for (let i = 0; i < this.characters.length; i++) {
            if(letter==this.unpopulated[i]&&letter==this.characters[i]){
                repeat=true;
            }
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
        if(!repeat && inWord && this.unpopulated.includes("_")){
            audio = new Audio("assets/sounds/Ding.mp3");
            audio.play();
        }
        if (!inWord && !inTrash) {
            audio = new Audio("assets/sounds/Buzzer.mp3");
            audio.play();
            this.guessedLetters.push(letter);
            this.guesses--;
        }
    },

    //changes the number of guesses user starts with depending on difficulty selection
    changeDifficulty: function () {
        var easy = document.getElementById("easy"), medium = document.getElementById("medium"), hard = document.getElementById("hard");

        easy.onclick = function () {
            hangmanGame.difficulty = "easy";
            console.log(hangmanGame.difficulty);
        }

        medium.onclick = function () {
            hangmanGame.difficulty = "medium";
            console.log(hangmanGame.difficulty);
        }

        hard.onclick = function () {
            hangmanGame.difficulty = "hard";
            console.log(hangmanGame.difficulty);
        }

    },

    //checks to see if user has won
    gameWon: function () {
        for (let i = 0; i < this.characters.length; i++) {
            if (this.characters[i] !== this.unpopulated[i]) {
                return false;
            }
        }
        return true;
    },

    //checks to see if user has lost
    gameLost: function () {
        if (this.guesses == 0) {
            return true;
        }
        return false;
    },

    //runs the game
    runGame: function (action) {
        hangmanGame.changeDifficulty();
        var audio;
        console.log(action);
        switch (action) {

            case "Enter": audio = new Audio("assets/sounds/whos_that_pokemon.mp3");
                hangmanGame.initialized=true;
                audio.play();
                //when user presses Enter, a new game is started and a new word is selected
                hangmanGame.selectWord();
                document.getElementById("game-instructions").textContent = 'Press letters "a-z" to guess a letter. Press "enter" to start a new game.';
                console.log(hangmanGame.characters);
                //displays the new attributes of the game
                document.getElementById("unpopulated").innerHTML = "<h2>" + hangmanGame.unpopulated.join(" ") + "</h2>";
                document.getElementById("guesses").innerHTML = "<p>" + hangmanGame.guesses + "</p>";
                document.getElementById("guessedLetters").innerHTML = "<p class='spaceholder'>none</p>";
                //resets all other html elements
                document.getElementById("won-or-lost").innerHTML = "<h1 class='spaceholder'>none</h1>";
                document.getElementById("picture").innerHTML = "";
                document.getElementById("unpopulated").setAttribute("class", "")
                break;

            //when user presses a-z, the we want to find if that character is in the word
            case String(action.match(/[a-z]+/g)):
                if (hangmanGame.initialized) {
                    //first we check if the game is over (won or lost). if it is, we proceed no further and display a message for the user to continue to a new game
                    if (hangmanGame.gameWon()) {
                        document.getElementById("won-or-lost").innerHTML = '<h3 class="text-danger"> You won, press "enter" to start a new game. </h3>';
                        break;
                    }
                    if (hangmanGame.gameLost()) {
                        document.getElementById("won-or-lost").innerHTML = '<h3 class="text-danger"> You lost, press "enter" to start a new game. </h3>';
                        break;
                    }
                    //then we execute the method guessLetter to initialize procedures to fill in that letter if it exists in the word
                    hangmanGame.guessLetter(action);
                    //displays updated attributes of the game
                    document.getElementById("unpopulated").innerHTML = "<h2>" + hangmanGame.unpopulated.join(" ") + "</h2>";
                    document.getElementById("guesses").innerHTML = "<p>" + hangmanGame.guesses + "</p>";
                    if (hangmanGame.guessedLetters.length >= 1) {
                        document.getElementById("guessedLetters").innerHTML = "<p id='guessedLetters'>" + hangmanGame.guessedLetters.join(" ") + "</p>";
                    }
                    console.log(hangmanGame.unpopulated, hangmanGame.characters, hangmanGame.gameWon());
                    //after guessing the letter, we want to check if the user has won, if so, we need to display relevant messages and change relevant attributes
                    if (hangmanGame.gameWon()) {
                        document.getElementById("won-or-lost").innerHTML = "<h1> YOU WON!! </h1>";
                        audio = new Audio("assets/sounds/victory.wav");
                        audio.play();
                        document.getElementById("picture").innerHTML = "<img class='img-fluid pokemon-image' src=" + hangmanGame.picture + ">";
                        document.getElementById("unpopulated").setAttribute("class", "text-success text-uppercase")
                    }
                    //next we check if user has lost and run out of guesses. if so, we display relevant message and change relevant attributes
                    if (hangmanGame.gameLost()) {
                        document.getElementById("won-or-lost").innerHTML = "<h3 id='loss-text'> You Lost, the answer was " + hangmanGame.characters.join("").toUpperCase() + "</h3>";
                    }
                    break;
                }
        }
    }

}

document.onkeyup = function (event) {
    hangmanGame.runGame(event.key);
}