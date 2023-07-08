
let userscore = 0;
let computerscore = 0;
let select = document.querySelector("#select");
let whowins = document.querySelector("#whowins");
let score = document.querySelector("#score");

function compare(choice1, choice2){
    if (choice1 === choice2) {
        return 'its a tie';
    }     

    else if (choice1 === 'rock') {
        if (choice2 === 'scissors') {
            userscore++; return 'You';            
        }        
        else if (choice2 === 'paper') {
            computerscore++; return 'computer';            
        }
    }
    else if (choice1 === 'paper') {
        if (choice2 === 'scissors') {
            computerscore++; return 'computer';            
        }        
        else if (choice2 === 'rock') {
            userscore++; return 'You' ;           
        }
    }

    else if (choice1 === 'scissors') {
        if (choice2 === 'paper') {
            userscore++; return 'You';            
        }        
        else if (choice2 === 'rock') {
            computerscore++; return 'computer';
            
        }
    }
}

function startGame(e) {
    let userChoice = e;
    let computerChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    select.innerHTML = 'You : '+ userChoice && 'computer picks : '+ computerChoice;
    let winner = compare(userChoice, computerChoice);
    whowins.classList = '';

    if (winner == 'You') {
        whowins.innerHTML = winner + ' win';
        whowins.classList.add('lose');        
    }
    else if (winner == 'computer') {
        whowins.innerHTML = winner + ' wins';        
        whowins.classList.add('lose');
    }
    else {
        whowins.innerHTML = winner;
        whowins.classList.add(' tie');
    }
    score.innerHTML = userscore +':'+ computerscore;
}
