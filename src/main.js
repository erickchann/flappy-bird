const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const w = canvas.width;
const h = canvas.height;

let game;

window.onload = init();
function init() {
    game = new Game();

    main();
}

function main() {
    let gameInterval = setInterval(() => {
        if (!game.gameover) {
            game.update();
        } else {
            clearInterval(gameInterval);

            alert('Game Over!');

            location.reload();
        }
    }, 20);
}