
let game = prompt('Are you ready to play the game ?');
if (game === "yes") {
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. Your are disoriented, lost, hungry and extemely thrirsty.  You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left.  Your back is against the wall.');
} else {
    alert('Thanks, feel free to play again sometime');
}

let game2 = prompt('Which direction would you like to head (please enter forward, left, or right');
switch (game2) {
    case 'forward':
        alert('You walk 100 yards and safely make your way out of the cave');
        break;
    case 'left':
        alert('Your thrist has gotten the better of you.  You trip on a rock, hit your head, and fall into a pool or water and drown!');
        break;
    case 'right':
        alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams dwn and traps you in the room forever!');
        break;
    default:
        alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for ligeless lowlifes for not choosing the correct option');
        break;
}

let rate = prompt('Rate the game between 1 -10');
if (rate >= 6 && rate <= 10) {
    alert('Thanks, please play again');
} else if (rate >= 1 && rate <= 5) {
    alert('Thanks, we are working hard to improve the game');
} else {
    alert('Thanks for playing. Game has ended');
}





