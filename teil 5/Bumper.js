import { Polygon } from "./Polygon.js";

export class Bumper extends Polygon {
    constructor({ coords }) {
        super({ coords });
        this.color = "rgb(0,90,15)";
    }
}
