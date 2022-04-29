import { canvas, margin } from "./canvas.js";
import { Pocket } from "./Pocket.js";

export function getPockets() {
    const cornerOffset = 12;

    return [
        new Pocket({
            pos: {
                x: margin + cornerOffset,
                y: margin + cornerOffset,
            },
        }),
        new Pocket({
            pos: { x: canvas.width / 2, y: margin },
        }),
        new Pocket({
            pos: {
                x: canvas.width - margin - cornerOffset,
                y: margin + cornerOffset,
            },
        }),
        new Pocket({
            pos: {
                x: margin + cornerOffset,
                y: canvas.height - margin - cornerOffset,
            },
        }),
        new Pocket({
            pos: { x: canvas.width / 2, y: canvas.height - margin },
        }),
        new Pocket({
            pos: {
                x: canvas.width - margin - cornerOffset,
                y: canvas.height - margin - cornerOffset,
            },
        }),
    ];
}
