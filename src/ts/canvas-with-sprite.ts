const guia = document.getElementById('guia') as HTMLElement;
for (let index = 0; index < 280; index++) { guia.innerHTML += '<p></p>' }

const lienzo = document.getElementById('lienzo') as HTMLCanvasElement;
const ctx = lienzo.getContext('2d') as CanvasRenderingContext2D;
ctx.globalCompositeOperation = 'overlay';

const boyImage = new Image();

interface keyValue {
    [key: string]: string
}

const source: keyValue = {
    ArrowRight: 'assets/image/sprite-person-right.png',
    ArrowLeft: 'assets/image/sprite-person-left.png'
}

let dx = 0;
let dy = 0;
let currentEvent: KeyboardEvent;
let oldEvent: KeyboardEvent;
let oldSource: string;

const pintarImagen = (posicionSprite: number) => {
    ctx.clearRect(0, 0, 1000, 700);

    // console.log('currentEvent :', currentEvent?.code, 'oldEvent: ', oldEvent?.code);
    boyImage.src = source[currentEvent?.code] || source[oldEvent?.code] || source.ArrowRight;
    const width = 400;
    const height = boyImage.height;

    ctx.beginPath();
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(boyImage, width * posicionSprite, 0, width, height, dx, dy, width / 4, height / 4);
    ctx.stroke();
}


// RECURSIVIDAD llamar (60 fps)
let contador = 0;
let cambio = 0;
let listIdAnimationFrame: number[] = [];

const frameRequestCallback: FrameRequestCallback = (tiempo: number) => {
    if (contador % 5 === 0) {
        ++cambio;
        pintarImagen(cambio);
    }

    if (cambio > 5) { cambio = 2; }

    if (contador % 60 === 0) { contador = 0 }

    ++contador;

    listIdAnimationFrame.push(window.requestAnimationFrame(frameRequestCallback));
}

// INTERACTIVA UI
document.addEventListener('keydown', (evento: KeyboardEvent) => {
    cleanAnimationFrame();

    currentEvent = evento;
    listIdAnimationFrame.push(window.requestAnimationFrame(frameRequestCallback));
    move(evento);

});

document.addEventListener('keyup', (evento: KeyboardEvent) => {
    cleanAnimationFrame();

    oldEvent = evento;
})

const cleanAnimationFrame = (): void => {
    listIdAnimationFrame.forEach(id => window.cancelAnimationFrame(id));
    listIdAnimationFrame = [];
}

const move = (event: KeyboardEvent) => {

    const speed = 5;

    // console.log('dx :', dx);

    switch (event.code) {
        case 'ArrowRight':
            dx += speed;
            break;
        case 'ArrowLeft':
            dx -= speed;
            break;
        case 'ArrowUp':
            dy -= speed;
            break;
        case 'ArrowDown':
            dy += speed;
            break;
        default:
            break;
    }

}


frameRequestCallback(0);