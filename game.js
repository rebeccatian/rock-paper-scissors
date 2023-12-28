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
        setTimeout(() => document.querySelector('.restart').classList.remove('hidden'), 1000);
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

    const selections = {
        'rock': {
            'paper': 'You lose.',
            'scissors': 'You win!',
            'rock': 'You tied.'
        },
        'paper': {
            'paper': 'You tied.',
            'scissors': 'You lose.',
            'rock': 'You win!'
        },
        'scissors': {
            'paper': 'You win!',
            'scissors': 'You tied.',
            'rock': 'You lose.'
        },
    }

    const makeSelection = choice => {
        result.innerHTML = selections[choice][computerChoice.classList[1]];
    }
};

game();