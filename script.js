let cvs = document.querySelector('canvas');
let ctx = cvs.getContext('2d');

let canvasWidth = 1280; canvasHeight = 720;
cvs.width = canvasWidth; cvs.height = canvasHeight;
let x = 10, y = 10;
let xmove = 10, ymove = 10;
let size = xmove;

let background = '0, 0, 0'; // rgb color of background
let color = '255, 255, 0'; // rgb color of the cube
let speed = 75;

function step() {
    ctx.fillStyle = 'rgb(' + background + ')';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'; ctx.fillRect(x - xmove - xmove - xmove - xmove, y - ymove - ymove - ymove - xmove, size, size);
    ctx.fillStyle = 'rgba(' + color + ', 0.25)'; ctx.fillRect(x - xmove - xmove - xmove, y - ymove - ymove - ymove, size, size);
    ctx.fillStyle = 'rgba(' + color + ', 0.5)'; ctx.fillRect(x - xmove - xmove, y - ymove - ymove, size, size);
    ctx.fillStyle = 'rgba(' + color + ', 0.75)'; ctx.fillRect(x - xmove, y - ymove, size, size);
    
    ctx.fillStyle = 'rgba(' + color + ', 1)'; ctx.fillRect(x, y, size, size);

    ctx.fillStyle = 'black'; ctx.fillText('x: ' + x + '\ny: ' + y + '\nspeed: ' + speed, 32, 32)
    ctx.fillStyle = 'white'; ctx.fillText('x: ' + x + '\ny: ' + y + '\nspeed: ' + speed, 30, 30)

    if (x == canvasWidth - size || x == 0) { xmove = -xmove }
    if (y == canvasHeight - size || y == 0) { ymove = -ymove }

    x += xmove; y += ymove;
}

setInterval(step, speed);