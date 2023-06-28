
//Add new image
function newImage(url) {
    let image = document.createElement('img');
    image.src = url;
    document.body.append(image)
    return image;
}

//Add player to game
let playerOne = newImage('/assets/bird/big bird/4.png')
let direction = null;
let x = 100;
let y = 250;
move(playerOne).to(100, 200)

//Move player
function movePlayer() {
    if (direction === 'west') {
        x = x - 1
    }

    if (direction === 'north') {
        y = y + 1
    }

    if (direction === 'east') {
        x = x + 1
    }

    if (direction === 'south') {
        y = y - 1
    }
    playerOne.style.left = x + 'px'
    playerOne.style.bottom = y + 'px'
}

setInterval(movePlayer, 1)
direction = 'east'

//Control arrow key
document.addEventListener('keydown', function (e) {
    if (e.repeat) return;

    if (e.key === 'ArrowUp') {
        direction = 'north'
    }

    if (e.key === 'ArrowDown') {
        direction = 'south'
    }
})
