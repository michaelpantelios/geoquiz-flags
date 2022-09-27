import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class SaintLucia extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;

        this.area2BaseX = 0.24 * this._flagWidth;
        this.area3BaseX = 0.28 * this._flagWidth;
        this.trianglesBaseY = 0.916 * this._flagHeight;
        this.area2Width = 0.50 * this._flagWidth;
        this.area3Width = 0.43 * this._flagWidth;
        this.area2Height = 0.83 * this._flagHeight;
        this.area3Height = 0.71 * this._flagHeight;
        this.area4Height = 0.41 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // cyan
        this.area2Color = parseInt(this._flagData["area2"]); // cyan
        this.area3Color = parseInt(this._flagData["area3"]); // cyan
        this.area4Color = parseInt(this._flagData["area4"]); // cyan

        //wrong colors
        this.wrongColor1 = 0x0000ff;
        this.wrongColor2 = 0xff00ff;
        this.wrongColor3 = 0xc2770a;

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
        this.paintFlagArea(this.area2.name,  this.area2Color);

        this.area3 = new PIXI.Graphics();
        this.area3.interactive = true;
        this.area3.name = "area3";
        this.addChild(this.area3);
        this.paintFlagArea(this.area3.name, this._solved ? this.area3Color : 0xbbbbbb)
        this.area3.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area3.name);
        });

        this.area4 = new PIXI.Graphics();
        this.area4.interactive = true;
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name, this._solved ? this.area4Color : 0xbbbbbb)
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        });

    }

    paintFlagArea(name, color){
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
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.area2BaseX, this.trianglesBaseY);
                this.area2.lineTo(this._flagWidth / 2, this.trianglesBaseY - this.area2Height);
                this.area2.lineTo(this.area2BaseX+this.area2Width, this.trianglesBaseY);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.area3BaseX, this.trianglesBaseY);
                this.area3.lineTo(this._flagWidth / 2, this.trianglesBaseY - this.area3Height);
                this.area3.lineTo(this.area3BaseX+this.area3Width, this.trianglesBaseY);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle(this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this.area2BaseX, this.trianglesBaseY);
                this.area4.lineTo(this._flagWidth / 2 , this.trianglesBaseY - this.area4Height);
                this.area4.lineTo(this.area2BaseX + this.area2Width, this.trianglesBaseY);
                this.area4.closePath();
                this.area4.endFill();
                break;
        }
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area3Color,
            this.area4Color,
            this.wrongColor1,
            this.wrongColor2,
            this.wrongColor3,
        ];
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}