import * as PIXI from "pixi.js";

export class ColorPicker extends PIXI.Container {
    constructor(data) {
        super();

        this._radius = data.radius;
        this.interactive = true;

        this._picker = new PIXI.Graphics();
        this.addChild(this._picker);
    }

    setColor(color, selected = false){
        this._picker.clear();
        this._picker.lineStyle(3, !selected ? 0xffffff : 0x000000, 1);
        this._picker.beginFill(color, 1);
        this._picker.drawCircle(this._radius , this._radius , this._radius );
        this._picker.endFill();
    }

}