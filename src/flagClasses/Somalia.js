import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class Somalia extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.star1 = new PIXI.Point(0.5 * this._flagWidth, 0.258 * this._flagHeight);
        this.star2 = new PIXI.Point(0.539 * this._flagWidth, 0.425 * this._flagHeight);
        this.star3 = new PIXI.Point(0.66 * this._flagWidth, 0.425 * this._flagHeight);
        this.star4 = new PIXI.Point(0.5632 * this._flagWidth, 0.529 * this._flagHeight);
        this.star5 = new PIXI.Point(0.599 * this._flagWidth, 0.688 * this._flagHeight);
        this.star6 = new PIXI.Point(0.5 * this._flagWidth, 0.594 * this._flagHeight);
        this.star7 = new PIXI.Point(0.40 * this._flagWidth, 0.6966 * this._flagHeight);
        this.star8 = new PIXI.Point(0.438 * this._flagWidth, 0.5293 * this._flagHeight);
        this.star9 = new PIXI.Point(0.338 * this._flagWidth, 0.425 * this._flagHeight);
        this.star10 = new PIXI.Point(0.46 * this._flagWidth, 0.425 * this._flagHeight);

        //correct colors
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
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.star1.x, this.star1.y);
                this.area2.lineTo(this.star2.x, this.star2.y);
                this.area2.lineTo(this.star3.x, this.star3.y);
                this.area2.lineTo(this.star4.x, this.star4.y);
                this.area2.lineTo(this.star5.x, this.star5.y);
                this.area2.lineTo(this.star6.x, this.star6.y);
                this.area2.lineTo(this.star7.x, this.star7.y);
                this.area2.lineTo(this.star8.x, this.star8.y);
                this.area2.lineTo(this.star9.x, this.star9.y);
                this.area2.lineTo(this.star10.x, this.star10.y);
                this.area2.closePath();
                this.area2.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}