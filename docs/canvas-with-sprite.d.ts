declare const spritePersonLeft: any;
declare const spritePersonRight: any;
declare const lienzo: HTMLCanvasElement;
declare const ctx: CanvasRenderingContext2D;
declare const boyImage: HTMLImageElement;
interface keyValue {
    [key: string]: string;
}
declare const source: keyValue;
declare let dx: number;
declare let dy: number;
declare let currentEvent: KeyboardEvent;
declare let oldEvent: KeyboardEvent;
declare let oldSource: string;
declare const pintarImagen: (posicionSprite: number) => void;
declare let contador: number;
declare let cambio: number;
declare let listIdAnimationFrame: number[];
declare const frameRequestCallback: FrameRequestCallback;
declare const cleanAnimationFrame: () => void;
declare const move: (event: KeyboardEvent) => void;
