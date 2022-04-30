import { norm } from "./math.js";

/** @type {HTMLCanvasElement} */
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

/** @type {HTMLCanvasElement} */
export const tableCanvas = document.getElementById("tableCanvas");
export const tctx = tableCanvas.getContext("2d");

export const margin = 60;

canvas.width = tableCanvas.width = 1200 + 2 * margin;
canvas.height = tableCanvas.height = 600 + 2 * margin;

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export const canvasNorm = norm({ x: canvas.width, y: canvas.height });
