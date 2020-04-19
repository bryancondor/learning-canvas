const _guia = document.getElementById('guia') as HTMLElement;
for (let index = 0; index < 280; index++) { guia.innerHTML += '<p></p>' }

const _lienzo = document.getElementById('lienzo') as HTMLCanvasElement;
const _ctx = lienzo.getContext('2d') as CanvasRenderingContext2D;
console.log('ctx :', ctx);

// RECTANGULO
ctx.fillStyle = 'pink';
ctx.fillRect(800, 500, 100, 100);

// CIRCULO
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'skyblue';
ctx.fill();
ctx.stroke();

// CIRCULO 2
ctx.beginPath();
ctx.arc(75, 325, 25, 0, 2 * Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.strokeStyle = 'orange'
ctx.stroke();

// CIRCULO CON GRADIENTE
ctx.beginPath();
ctx.arc(250, 50, 50, 0, 2 * Math.PI);
const gradient = ctx.createLinearGradient(300, 0, 100, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fill();
ctx.stroke();

// LINEA
ctx.beginPath()
ctx.strokeStyle = 'green'
ctx.lineWidth = 5;
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(300, 300);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'purple';
ctx.stroke();

// IMAGEN (MAPA DE BITS)
ctx.beginPath();
const image = new Image();
image.src = './chikorita.png';
image.onload = () => {
    ctx.drawImage(image, 50, 400, image.width / 1.5, image.height / 1.5);
    ctx.stroke();
}

