function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    return {
        to: moveToCoordinates
    }
}

move(newImage('assets/Clouds and sky/A1.png')).to(250, 690)
move(newImage('assets/Clouds and sky/A2.png')).to(450, 900)
move(newImage('assets/Clouds and sky/A3.png')).to(800, 800)
move(newImage('assets/Clouds and sky/A4.png')).to(600, 650)
move(newImage('assets/Clouds and sky/C2.png')).to(100, 850)
move(newImage('assets/Clouds and sky/four clouds.png')).to(1200, 950)
move(newImage('assets/Clouds and sky/A2.png')).to(1000, 680)
move(newImage('assets/Clouds and sky/A1.png')).to(1400, 780)
move(newImage('assets/Clouds and sky/A3.png')).to(1800, 880)
move(newImage('assets/Clouds and sky/C2.png')).to(1600, 650)
move(newImage('assets/tree/1.png')).to(50, 200)
move(newImage('assets/tree/3.png')).to(450, 225)
move(newImage('assets/tree/1.png')).to(650, 240)
move(newImage('assets/tree/2.png')).to(1050, 225)
move(newImage('assets/tree/1.png')).to(1350, 245)
move(newImage('assets/tree/3.png')).to(1650, 230)
