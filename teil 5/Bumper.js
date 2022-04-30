import { tctx } from "./canvas.js";
import { Polygon } from "./Polygon.js";

export class Bumper extends Polygon {
    constructor({ coords, shadow }) {
        super({ coords });
        this.color = "rgb(0,90,15)";
        this.shadow = shadow || { x: 5, y: 5 };
        this.shadowColor = "rgba(0,0,0,0.45)";
    }

    draw() {
        // draw shadow
        tctx.filter = "blur(3px)";
        tctx.beginPath();
        tctx.moveTo(
            this.coords[0].x + this.shadow.x,
            this.coords[0].y + this.shadow.y
        );
        for (let i = 1; i < this.coords.length; i++) {
            tctx.lineTo(
                this.coords[i].x + this.shadow.x,
                this.coords[i].y + this.shadow.y
            );
        }
        tctx.fillStyle = this.shadowColor;
        tctx.fill();
        tctx.closePath();
        tctx.filter = "blur(0px)";
        super.draw();
    }
}
