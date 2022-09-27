import * as PIXI from "pixi.js";

export class Result extends PIXI.Container {
    constructor(data) {
        super();

        let width = data.width;
        let height = data.height;

        let border = new PIXI.Graphics();
        border.lineStyle(2, 0xaaddaa, 1);
        border.beginFill(0x222222);
        border.drawRect(0, 0, width, height);
        border.endFill();
        this.addChild(border);
    }
}