declare class Person {
    image: HTMLImageElement;
    speed: number;
    positionX: number;
    positionY: number;
    constructor(image: HTMLImageElement, speed: number, positionX?: number, positionY?: number);
    drawImage(ctx: CanvasRenderingContext2D, width: number): void;
    moveToRigth(): void;
    moveToLeft(): void;
    moveToUp(): void;
    moveToDown(): void;
    changeImage(position: number): void;
}
declare const SALUDO = "hola bryan !";
export { Person, SALUDO };
