let userScore = 0;
let computerScore = 0;
let gameOrder = 0;
let userWinGame = 0;
let computerWinGame = 0;
let user_first_game = document.getElementById("user-first-game");
let computer_first_game = document.getElementById("computer-first-game");
let user_second_game = document.getElementById("user-second-game");
let computer_second_game = document.getElementById("computer-second-game");
let user_third_game = document.getElementById("user-third-game");
let computer_third_game = document.getElementById("computer-third-game");
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let final_result = document.getElementById("final-result");

//the function retruns computer choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function which converts letters into words
function convertToWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWords(user)}${smallUserWord} beats ${convertToWords(computer)}${smallComputerWord} . You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 1000);
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWords(computer)}${smallComputerWord} beats ${convertToWords(user)}${smallUserWord} . You lose!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 1000);
}


function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWords(computer)}${smallComputerWord} equals ${convertToWords(user)}${smallUserWord} . It's draw!`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 1000);
}

//alert user after win or lose round
function alertUser() {
    gameOrder++;
    if (computerScore > userScore) {
        if (gameOrder < 3) {
            createCustomAlert("Sorry!. The computer has won this round.");
        }
        computerWinGame++;
    } else {
        if (gameOrder < 3) {
            createCustomAlert("Congratulatons! You have won this round.");
        }
        userWinGame++;
    }
    computerScore_span.innerHTML = 0;
    userScore_span.innerHTML = 0;
    if (gameOrder == 1) {
        user_first_game.innerHTML = userScore;
        computer_first_game.innerHTML = computerScore;
    } else {
        if (gameOrder == 2) {
            user_second_game.innerHTML = userScore;
            computer_second_game.innerHTML = computerScore;
        } else {
            user_third_game.innerHTML = userScore;
            computer_third_game.innerHTML = computerScore;
            if (userWinGame > computerWinGame) {
                final_result.innerHTML = "User";
                ALERT_TITLE = "The game is over!";
                createCustomAlert("Congratulatons! You have won this game.");
            } else {
                final_result.innerHTML = "Computer";
                ALERT_TITLE = "The game is over!";
                createCustomAlert("Sorry!. The computer has won this game.");
            }
            computerScore = 0;
            userScore = 0;
            gameOrder = 0;
            userWinGame = 0;
            computerWinGame = 0;
        }
    }
    computerScore = 0;
    userScore = 0;
}

//this is the main game logic function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp": win(userChoice, computerChoice); break;
        case "rp":
        case "ps":
        case "sr": lose(userChoice, computerChoice); break;
        case "rr":
        case "pp":
        case "ss": draw(userChoice, computerChoice); break;
    }
    if (computerScore === 7 || userScore === 7) {
        alertUser();
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");

    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");

    })
}
main();
