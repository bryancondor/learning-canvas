"use strict";
// const guia = document.getElementById('guia') as HTMLElement;
// for (let index = 0; index < 280; index++) { guia.innerHTML += '<p></p>' }
// const lienzo = document.getElementById('lienzo') as HTMLCanvasElement;
// const ctx = lienzo.getContext('2d') as CanvasRenderingContext2D;
// ctx.globalCompositeOperation = 'overlay';
// const pintarImage = (posicionImgen: number = 0) => {
//     ctx.beginPath();
//     const boyImage = new Image();
//     boyImage.src = 'assets/image/my_sprite_person.png';
//     boyImage.onload = () => {
//         ctx.clearRect(0, 0, 1000, 700)
//         // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
//         const widthPartial = boyImage.width / 8;
//         ctx.drawImage(boyImage, widthPartial * posicionImgen, 0, widthPartial, boyImage.height, 0, 0, widthPartial, boyImage.height);
//         ctx.stroke();
//     }
// }
// // recursividad para llamar 60 fps
// let contador = 0;
// let cambio = 0;
// const inicio = 2;
// const fin = 5;
// // const inicio = 2;
// // const fin = 6;
// function log() {
//     // console.log('contador: ', contador)
//     if (contador % 7 === 0) {
//         cambio++
//         if (cambio === fin) {
//             cambio = inicio;
//         }
//     }
//     if (cambio >= inicio && cambio <= fin) {
//         pintarImage(cambio);
//     }
//     if (contador % 60 === 0) { contador = 0 }
//     ++contador;
//     window.requestAnimationFrame(log);
// }
// window.requestAnimationFrame(log);
