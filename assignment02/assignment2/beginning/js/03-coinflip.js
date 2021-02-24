let coinFlip = (Math.round(Math.random() * 2));

let choice = prompt('Select heads or tails');

if (coinFlip > 0) {
    if (choice === 'heads') {
        alert('The flip was heads and you chose heads...you win!');
    } else if (choice === 'tails') {
        alert('The flip was heads and you chose tails...you lose!');
    }
}

else if (coinFlip < 1) {
    if (choice === 'heads') {
        alert('The flip was tails and you chose heads...you win!');
    } else if (choice === 'tails'){
        alert('The flip was tails and you chose tails...you win!');
    }
}