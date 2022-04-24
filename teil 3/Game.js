import { Controller } from "./Controller.js";
import { openDialog, closeDialog } from "./dialog.js";
import { COLORS } from "./setupBalls.js";
import { drawCloth, drawWood } from "./table.js";

export class Game {
    constructor({ balls, pockets }) {
        this.balls = balls;
        this.pockets = pockets;
        this.won = null;
        this.playing = true;
        this.idle = true;
        this.whiteBall = this.balls.find(
            (b) => b.color == COLORS.WHITE
        );
        this.blackBall = this.balls.find(
            (b) => b.color == COLORS.BLACK
        );
        this.controller = new Controller(this.whiteBall);
        this.enableRestart();
    }

    enableRestart() {
        document
            .getElementById("restartBtn")
            .addEventListener("click", () => {
                this.restart();
            });
    }

    draw() {
        drawCloth();
        drawWood();
        this.pockets.forEach((p) => p.draw());
        this.balls.forEach((b) => b.draw());
        this.controller.draw();
    }

    update() {
        if (!this.playing) return;
        this.balls.forEach((b) => b.update(this));
        this.controller.update();
        this.idle = this.balls.every((b) => b.idle || b.inPocket);
        if (this.idle) {
            this.controller.active = true;
            if (this.blackBall.inPocket) {
                this.finish();
            } else if (this.whiteBall.inPocket) {
                this.whiteBall.reset(this);
            }
        }
    }

    finish() {
        this.playing = false;
        this.controller.active = false;
        this.won =
            !this.whiteBall.inPocket &&
            this.balls.every(
                (ball) => ball == this.whiteBall || ball.inPocket
            );
        if (this.won) {
            openDialog("You won!");
        } else {
            openDialog("You lost!");
        }
    }

    restart() {
        closeDialog();
        this.balls.forEach((b) => b.reset(this));
        this.won = null;
        this.idle = true;
        this.playing = true;
    }
}
