game = () => {
    const gameChoices = Array.from(document.getElementsByClassName('choice'));
    const result = document.querySelector('.result');

    gameChoices.forEach((choice, index) => choice.addEventListener('click', function() {
        gameChoices.forEach(btn => btn.disabled = true)
        computerChoice = gameChoices[Math.floor(Math.random() * 3)];
        gameChoices.forEach(element => {
            if (element !== this) {
                element.classList.add('animate-out');
            }
            setTimeout(() => {
                if (computerChoice === this) {
                    gameChoices.find(element => element !== this).firstElementChild.src = `${this.classList[1]}.svg`;
                    gameChoices.find(element => element !== this).add('animate-in')
                    console.log(gameChoices[2].firstElementChild.src);
                }
                if (element === computerChoice) {
                    element.classList.add('animate-in');
                }
            }, 500)
        })
        setTimeout(() => makeSelection(this.classList[1]), 900);
    }));

    const restart = document.querySelector('.restart');

    restart.addEventListener('click', function() {
        gameChoices.forEach(btn => {
            btn.classList.remove('animate-out', 'animate-in');
            btn.disabled = false;
            btn.firstElementChild.src = `${btn.classList[1]}.svg`
            result.innerHTML = "";
        })
    })

    const makeSelection = choice => {
        if (choice === 'rock') {
            switch(computerChoice.classList[1]) {
                case 'paper': {
                    result.innerHTML = "You lose.";
                    break;
                }
                case 'scissors': {
                    result.innerHTML = "You win!"
                    break;
                }
                default: result.innerHTML = "You tied."
            }
        }
        if (choice === 'scissors') {
            switch(computerChoice.classList[1]) {
                case 'rock': {
                    result.innerHTML = "You lose.";
                    break;
                }
                case 'paper': {
                    result.innerHTML = "You win!"
                    break;
                }
                default: result.innerHTML = "You tied."
            }
        }
        if (choice === 'paper') {
            switch(computerChoice.classList[1]) {
                case 'scissors': {
                    result.innerHTML = "You lose.";
                    break;
                }
                case 'rock': {
                    result.innerHTML = "You win!";
                    break;
                }
                default: result.innerHTML = "You tied."
            }
        }
    }
};

game();