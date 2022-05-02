import { Game } from "./Game.js";
import { getBalls } from "./setupBalls.js";
import { getBumpers } from "./setupBumpers.js";
import { getPockets } from "./setupPockets.js";

export const game = new Game({
    balls: getBalls(),
    pockets: getPockets(),
    bumpers: getBumpers(),
});
