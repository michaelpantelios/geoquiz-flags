import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class Guyana extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = data.width;
        this._flagHeight = data.height;
        this._solved = data.solved;
        this._lineWidth = data.lineWidth;
        this._flagData = data.flagData;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // red
        this.area2Color = parseInt(this._flagData["area2"]); //blue
        this.area3Color = parseInt(this._flagData["area3"]); //yellow
        this.area4Color = parseInt(this._flagData["area4"]); //blue
        this.area5Color = parseInt(this._flagData["area5"]); //yellow

        //wrong colors
        this.wrongColor1 = 0x0000ff;
        this.wrongColor2 = 0xff00ff;
        this.wrongColor3 = 0xff9000;

        this.point1Y = 0.04 * this._flagHeight;
        this.point2Y = 0.06 * this._flagHeight;
        this.point3Y = 0.94 * this._flagHeight;
        this.point4Y = 0.96 * this._flagHeight;
        this.area2Width = 0.97 * this._flagWidth;
        this.area3Width = 0.86 * this._flagWidth;
        this.area4Width = 0.456 * this._flagWidth;
        this.area5Width = 0.406 * this._flagWidth;

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.addChild(this.area1);
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb);
        this.area1.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area1.name);
        })

        this.area2 = new PIXI.Graphics();
        this.area2.name = "area2";
        this.addChild(this.area2);
        this.paintFlagArea(this.area2.name, this.area2Color)

        this.area3 = new PIXI.Graphics();
        this.area3.interactive = true;
        this.area3.name = "area3";
        this.addChild(this.area3);
        this.paintFlagArea(this.area3.name, this._solved ? this.area3Color : 0xbbbbbb)
        this.area3.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area3.name);
        });

        this.area4 = new PIXI.Graphics();
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name, this.area4Color)

        this.area5 = new PIXI.Graphics();
        this.area5.interactive = true;
        this.area5.name = "area5";
        this.addChild(this.area5);
        this.paintFlagArea(this.area5.name, this._solved ? this.area5Color : 0xbbbbbb)
        this.area5.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area5.name);
        });

    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area3Color,
            this.area5Color,
            this.wrongColor1,
            this.wrongColor2,
            this.wrongColor3
        ];
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
                this.area2.moveTo(0, 0);
                this.area2.lineTo(this.area2Width, this._flagHeight / 2);
                this.area2.lineTo(0, this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(0, this.point1Y);
                this.area3.lineTo(this.area3Width, this._flagHeight / 2);
                this.area3.lineTo(0, this.point4Y);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(0, 0);
                this.area4.lineTo(this.area4Width, this._flagHeight / 2);
                this.area4.lineTo(0, this._flagHeight);
                this.area4.closePath();
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(0, this.point2Y);
                this.area5.lineTo(this.area5Width, this._flagHeight / 2);
                this.area5.lineTo(0, this.point3Y);
                // this.area5.lineTo(0, this.point2Y);
                this.area5.closePath();
                this.area5.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }

}