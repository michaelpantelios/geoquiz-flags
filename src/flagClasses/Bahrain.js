import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";

export class Bahrain extends FlagBaseClass {
    constructor(data) {
        super(data);

        //flag details
        this._noseWidth = 0.15 * this._flagWidth;
        this._noseHeight = 0.1 * this._flagHeight;

        this._leftStart = 0.3 * this._flagWidth;
        this._rightStart = 0.4 * this._flagWidth;
        this._edgeHeight = 0.1 * this._flagHeight;

        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.addChild(this.area1);
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb);
        this.area1.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area1.name);
        })

        this.area2 = new PIXI.Graphics();
        this.area2.interactive = true;
        this.area2.name = "area2";
        this.addChild(this.area2);
        this.paintFlagArea(this.area2.name, this._solved ? this.area2Color : 0xbbbbbb)
        this.area2.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area2.name);
        });
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        super.paintFlagArea(name, color);
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle(this._lineWidth, 0x000000);
                this.area2.beginFill(color);
                this.area2.moveTo(0, 0);
                this.area2.lineTo(this._noseWidth, this._noseHeight);
                this.area2.lineTo(0, 2 * this._edgeHeight);
                this.area2.lineTo(this._noseWidth, 3 * this._edgeHeight);
                this.area2.lineTo(0, 4 * this._edgeHeight);
                this.area2.lineTo(this._noseWidth, 5 * this._edgeHeight);
                this.area2.lineTo(0, 6 * this._edgeHeight);
                this.area2.lineTo(this._noseWidth, 7 * this._edgeHeight);
                this.area2.lineTo(0, 8 * this._edgeHeight);
                this.area2.lineTo(this._noseWidth, 9 * this._edgeHeight);
                this.area2.lineTo(0, 10 * this._edgeHeight);
                this.area2.lineTo(this._noseWidth, this._flagHeight);
                this.area2.lineTo(this._flagWidth - this._leftStart, this._flagHeight);
                this.area2.lineTo(this._flagWidth - this._leftStart, 0);
                this.area2.closePath();
                this.area2.endFill();
                this.area2.x = this._leftStart;
                break;
        }
    }

  
}