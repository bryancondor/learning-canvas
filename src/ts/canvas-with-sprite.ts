const guia = document.getElementById('guia') as HTMLElement;
for (let index = 0; index < 280; index++) { guia.innerHTML += '<p></p>' }

const lienzo = document.getElementById('lienzo') as HTMLCanvasElement;
const ctx = lienzo.getContext('2d') as CanvasRenderingContext2D;
ctx.globalCompositeOperation = 'overlay';

const boyImage = new Image();
boyImage.src = 'assets/image/my_sprite_person.png';

const pintarImagen = (posicionSprite: number) => {
    ctx.clearRect(0, 0, 1000, 700);

    const width = 400;
    const height = boyImage.height;

    ctx.beginPath();
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(boyImage, width * posicionSprite, 0, width, height, 0, 0, width / 2, height / 2);
    ctx.stroke();
}

// RECURSIVIDAD llamar (60 fps)
let contador = 0;
let cambio = 0;
function log() {

    if (contador % 10 === 0) {
        ++cambio;
        pintarImagen(cambio);
    }

    if (cambio > 5) { cambio = 2; }

    if (contador % 60 === 0) { contador = 0 }
    ++contador;
    window.requestAnimationFrame(log);
}

window.requestAnimationFrame(log);
