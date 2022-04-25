import { ctx } from "./canvas.js";
import { distance } from "./math.js";

export const pocketSize = 30;

export class Pocket {
    constructor({ pos }) {
        this.pos = pos;
        this.size = pocketSize;
        this.color = "#000";
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    includes(ball) {
        return distance(this.pos, ball.pos) <= this.size;
    }
}
