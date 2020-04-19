"use strict";
var guia = document.getElementById('guia');
for (var index = 0; index < 280; index++) {
    guia.innerHTML += '<p></p>';
}
var lienzo = document.getElementById('lienzo');
var ctx = lienzo.getContext('2d');
ctx.globalCompositeOperation = 'overlay';
var boyImage = new Image();
var source = {
    ArrowRight: 'assets/image/sprite-person-right.png',
    ArrowLeft: 'assets/image/sprite-person-left.png'
};
var dx = 0;
var dy = 0;
var currentEvent;
var oldEvent;
var oldSource;
var pintarImagen = function (posicionSprite) {
    var _a, _b;
    ctx.clearRect(0, 0, 1000, 700);
    // console.log('currentEvent :', currentEvent?.code, 'oldEvent: ', oldEvent?.code);
    boyImage.src = source[(_a = currentEvent) === null || _a === void 0 ? void 0 : _a.code] || source[(_b = oldEvent) === null || _b === void 0 ? void 0 : _b.code] || source.ArrowRight;
    var width = 400;
    var height = boyImage.height;
    ctx.beginPath();
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(boyImage, width * posicionSprite, 0, width, height, dx, dy, width / 4, height / 4);
    ctx.stroke();
};
// RECURSIVIDAD llamar (60 fps)
var contador = 0;
var cambio = 0;
var listIdAnimationFrame = [];
var frameRequestCallback = function (tiempo) {
    if (contador % 5 === 0) {
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
    listIdAnimationFrame.push(window.requestAnimationFrame(frameRequestCallback));
};
// INTERACTIVA UI
document.addEventListener('keydown', function (evento) {
    cleanAnimationFrame();
    currentEvent = evento;
    listIdAnimationFrame.push(window.requestAnimationFrame(frameRequestCallback));
    move(evento);
});
document.addEventListener('keyup', function (evento) {
    cleanAnimationFrame();
    oldEvent = evento;
});
var cleanAnimationFrame = function () {
    listIdAnimationFrame.forEach(function (id) { return window.cancelAnimationFrame(id); });
    listIdAnimationFrame = [];
};
var move = function (event) {
    var speed = 5;
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
};
frameRequestCallback(0);
