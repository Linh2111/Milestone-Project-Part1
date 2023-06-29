function set(element){
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom) {
    
    }
    return {
        to: moveToCoordinates, 
        withArrowKeys: moveWithArrowKeys
    }
}


set(newImage('assets/Clouds and sky/four clouds.png')).to(820, 1070)
set(newImage('assets/Clouds and sky/A1.png')).to(250, 690)
set(newImage('assets/Clouds and sky/A2.png')).to(450, 900)
set(newImage('assets/Clouds and sky/A3.png')).to(800, 800)
set(newImage('assets/Clouds and sky/A4.png')).to(600, 650)
set(newImage('assets/Clouds and sky/C2.png')).to(100, 850)
set(newImage('assets/Clouds and sky/four clouds.png')).to(1200, 950)
set(newImage('assets/Clouds and sky/A2.png')).to(1000, 680)
set(newImage('assets/Clouds and sky/A1.png')).to(1400, 780)
set(newImage('assets/Clouds and sky/A3.png')).to(1800, 880)
set(newImage('assets/Clouds and sky/C2.png')).to(1600, 650)
set(newImage('assets/Clouds and sky/A1.png')).to(10, 1080)
set(newImage('assets/tree/1.png')).to(50, 300)
set(newImage('assets/tree/3.png')).to(450, 325)
set(newImage('assets/tree/1.png')).to(650, 410)
set(newImage('assets/tree/2.png')).to(1050, 425)
set(newImage('assets/tree/1.png')).to(1350, 295)
set(newImage('assets/tree/3.png')).to(1650, 230)
set(newImage('assets/tree/2.png')).to(1850, 425)
set(newImage('assets/Tree/BrushA.png')).to(1450, 45)
set(newImage('assets/Tree/BrushA.png')).to(150, 45)
set(newImage('assets/tree/small tree/bush.png')).to(1150, 425)
set(newImage('assets/tree/small tree/bush.png')).to(350, 425)
set(newImage('assets/tree/small tree/bush.png')).to(1390, 265)


class plateform {
    constructor({
        x,
        y,
        image
    }) {
        this.position = {
            x,
            y,
        };
        this.image = image;
        this.width = image.width;
        this.height; image.height;
    }
}