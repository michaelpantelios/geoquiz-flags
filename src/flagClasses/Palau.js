import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class Palau extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this._circleRadius = this._flagHeight * 0.33;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.addChild(this.area1);
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb);
        this.area1.on("pointertap", () => {
            this.emit(Utils.FLAG_AREA_PICKED, this.area1.name);
        })

        this.area2 = new PIXI.Graphics();
        this.area2.interactive = true;
        this.area2.name = "area2";
        this.addChild(this.area2);
        this.paintFlagArea(this.area2.name, this._solved ? this.area2Color : 0xbbbbbb)
        this.area2.on("pointertap", () => {
            this.emit(Utils.FLAG_AREA_PICKED, this.area2.name);
        });
    }

    getColorsForPickers() {
        return [
            this.area1Color,
            this.area2Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color) {
        // console.log(`paint area ${name} with color: ${color}`);
        switch (name) {
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle(this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle(this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawCircle(0.45 * this._flagWidth, this._flagHeight / 2, this._circleRadius);
                this.area2.endFill();
                break;
        }
    }

    getFlagCountryName() {
        return this._flagData["country"];
    }
}