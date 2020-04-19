"use strict";
var guia = document.getElementById('guia');
for (var index = 0; index < 280; index++) {
    guia.innerHTML += '<p></p>';
}
var lienzo = document.getElementById('lienzo');
var ctx = lienzo.getContext('2d');
ctx.globalCompositeOperation = 'overlay';
var boyImage = new Image();
boyImage.src = 'assets/image/my_sprite_person.png';
var pintarImagen = function (posicionSprite) {
    ctx.clearRect(0, 0, 1000, 700);
    var width = 400;
    var height = boyImage.height;
    ctx.beginPath();
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(boyImage, width * posicionSprite, 0, width, height, 0, 0, width / 2, height / 2);
    ctx.stroke();
};
// RECURSIVIDAD llamar (60 fps)
var contador = 0;
var cambio = 0;
function log() {
    if (contador % 10 === 0) {
        ++cambio;
        pintarImagen(cambio);
    }
    if (cambio > 5) {
        cambio = 2;
    }
    if (contador % 60 === 0) {
        contador = 0;
    }
    ++contador;
    window.requestAnimationFrame(log);
}
window.requestAnimationFrame(log);
