import { ctx, margin, canvas } from "./canvas.js";
import { add, sub, scale, dotProduct, distance } from "./math.js";

export class Ball {
    constructor({ pos, color, vel }) {
        this.pos = pos;
        this.color = color;
        this.vel = vel ?? { x: 0, y: 0 };
        this.size = 18;
        this.friction = 0.99;
    }

    get idle() {
        return this.vel.x == 0 && this.vel.y == 0;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    update(balls) {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.vel.x *= this.friction;
        this.vel.y *= this.friction;
        this.bounceOfWalls();
        this.collideWithBalls(balls);
        this.handleTinyVelocities();
    }

    bounceOfWalls() {
        // horizontal
        if (this.pos.x + this.size >= canvas.width - margin) {
            this.pos.x = canvas.width - margin - this.size;
            this.vel.x *= -1;
        } else if (this.pos.x - this.size <= margin) {
            this.pos.x = this.size + margin;
            this.vel.x *= -1;
        }

        // vertical
        if (this.pos.y + this.size >= canvas.height - margin) {
            this.pos.y = canvas.height - margin - this.size;
            this.vel.y *= -1;
        } else if (this.pos.y - this.size <= margin) {
            this.pos.y = this.size + margin;
            this.vel.y *= -1;
        }
    }

    handleTinyVelocities() {
        const threshold = 0.04;
        if (Math.abs(this.vel.x) < threshold) {
            this.vel.x = 0;
        }
        if (Math.abs(this.vel.y) < threshold) {
            this.vel.y = 0;
        }
    }

    collideWithBalls(balls) {
        balls.forEach((ball) => {
            if (this == ball) return;
            const dist = distance(this.pos, ball.pos);
            // check for collision
            if (dist > this.size + ball.size) return;
            // pull balls apart when there is overlap
            const L = this.size + ball.size - dist;
            const x_d = sub(ball.pos, this.pos);
            const c = scale(L / (2 * dist), x_d);
            this.pos = sub(this.pos, c);
            ball.pos = add(ball.pos, c);
            // elastic collision
            const v_d = sub(this.vel, ball.vel);
            const w = scale(
                (1 / Math.pow(dist, 2)) * dotProduct(x_d, v_d),
                x_d
            );
            this.vel = sub(this.vel, w);
            ball.vel = add(ball.vel, w);
        });
    }
}
