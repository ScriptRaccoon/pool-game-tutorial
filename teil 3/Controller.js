import { canvasNorm, ctx } from "./canvas.js";
import { scale, sub, normalize, limit } from "./math.js";
import { mouse } from "./mouse.js";

export class Controller {
    constructor(ball) {
        this.ball = ball;
        this.vector = { x: 0, y: 0 };
        this.addControl();
        this.active = true;
        this.maxLength = 300;
    }

    addControl() {
        document.addEventListener("click", (e) => {
            if (!this.active) return;
            this.active = false;
            const factor = 0.15;
            this.ball.vel = scale(factor, this.vector);
        });
    }

    update() {
        this.vector = limit(
            this.maxLength,
            sub(mouse, this.ball.pos)
        );
    }

    draw() {
        if (!this.active) return;
        ctx.save();
        // thick line
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.translate(this.ball.pos.x, this.ball.pos.y);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.vector.x, this.vector.y);
        ctx.stroke();
        ctx.closePath();
        // thin line
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        const targetFar = scale(canvasNorm, normalize(this.vector));
        ctx.lineTo(targetFar.x, targetFar.y);
        ctx.stroke();
        ctx.restore();
    }
}
