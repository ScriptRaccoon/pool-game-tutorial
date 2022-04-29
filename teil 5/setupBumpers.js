import { Bumper } from "./Bumper.js";
import { margin, canvas } from "./canvas.js";
import { pocketSize } from "./Pocket.js";

export function getBumpers() {
    const width = 20;
    const grace = 10;

    return [
        new Bumper({
            coords: [
                { x: margin + pocketSize + grace, y: margin },
                {
                    x: margin + pocketSize + width + grace,
                    y: margin + width,
                },
                {
                    x: canvas.width / 2 - pocketSize - width,
                    y: margin + width,
                },
                { x: canvas.width / 2 - pocketSize, y: margin },
            ],
        }),

        // bottom left
        new Bumper({
            coords: [
                {
                    x: canvas.width / 2 - pocketSize,
                    y: canvas.height - margin,
                },
                {
                    x: canvas.width / 2 - pocketSize - width,
                    y: canvas.height - (margin + width),
                },

                {
                    x: margin + pocketSize + width + grace,
                    y: canvas.height - (margin + width),
                },
                {
                    x: margin + pocketSize + grace,
                    y: canvas.height - margin,
                },
            ],
        }),

        // top right
        new Bumper({
            coords: [
                { x: canvas.width / 2 + pocketSize, y: margin },
                {
                    x: canvas.width / 2 + pocketSize + width,
                    y: margin + width,
                },
                {
                    x:
                        canvas.width -
                        pocketSize -
                        margin -
                        width -
                        grace,
                    y: margin + width,
                },
                {
                    x: canvas.width - pocketSize - margin - grace,
                    y: margin,
                },
            ],
        }),

        // bottom right
        new Bumper({
            coords: [
                {
                    x: canvas.width - pocketSize - margin - grace,
                    y: canvas.height - margin,
                },
                {
                    x:
                        canvas.width -
                        pocketSize -
                        margin -
                        width -
                        grace,
                    y: canvas.height - (margin + width),
                },

                {
                    x: canvas.width / 2 + pocketSize + width,
                    y: canvas.height - (margin + width),
                },
                {
                    x: canvas.width / 2 + pocketSize,
                    y: canvas.height - margin,
                },
            ],
        }),

        // side left
        new Bumper({
            coords: [
                {
                    x: margin,
                    y: canvas.height - margin - pocketSize - grace,
                },
                {
                    x: margin + width,
                    y:
                        canvas.height -
                        margin -
                        width -
                        pocketSize -
                        grace,
                },
                {
                    x: margin + width,
                    y: margin + pocketSize + width + grace,
                },
                { x: margin, y: margin + pocketSize + grace },
            ],
        }),

        // side right
        new Bumper({
            coords: [
                {
                    x: canvas.width - margin,
                    y: margin + pocketSize + grace,
                },
                {
                    x: canvas.width - (margin + width),
                    y: margin + pocketSize + width + grace,
                },
                {
                    x: canvas.width - (margin + width),
                    y:
                        canvas.height -
                        margin -
                        width -
                        pocketSize -
                        grace,
                },
                {
                    x: canvas.width - margin,
                    y: canvas.height - margin - pocketSize - grace,
                },
            ],
        }),
    ];
}
