class Person {

    constructor(
        public image: HTMLImageElement,
        public speed: number,
        public positionX: number = 0,
        public positionY: number = 0
    ) { }

    drawImage(ctx: CanvasRenderingContext2D, width: number) {
        ctx.beginPath();
        ctx.drawImage(this.image, width, 0, width, this.image.height, dx, dy, width / 4, this.image.height / 4)
        ctx.stroke();
    }

    moveToRigth() {

    }

    moveToLeft() {

    }

    moveToUp() {

    }

    moveToDown() {

    }

    changeImage(position: number) {

    }

}

const SALUDO = 'hola bryan !';

export { Person, SALUDO };