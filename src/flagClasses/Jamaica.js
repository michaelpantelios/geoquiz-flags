import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class Jamaica extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;

        this.point0 = new PIXI.Point(0, 0);
        this.point1 = new PIXI.Point(0.09 * this._flagWidth, 0);
        this.point2 = new PIXI.Point(0.5 * this._flagWidth, 0.40 * this._flagHeight);
        this.point3 = new PIXI.Point(0.91 * this._flagWidth, 0);
        this.point4 = new PIXI.Point(this._flagWidth, 0);
        this.point5 = new PIXI.Point(this._flagWidth, 0.09 * this._flagHeight);
        this.point6 = new PIXI.Point(0.6 * this._flagWidth, 0.5 * this._flagHeight);
        this.point7 = new PIXI.Point(this._flagWidth, 0.91 * this._flagHeight);
        this.point8 = new PIXI.Point(this._flagWidth, this._flagHeight);
        this.point9 = new PIXI.Point(0.91 * this._flagWidth, this._flagHeight);
        this.point10 = new PIXI.Point(0.5 * this._flagWidth, 0.6 * this._flagHeight);
        this.point11 = new PIXI.Point(0.09 * this._flagWidth, this._flagHeight);
        this.point12 = new PIXI.Point(0, this._flagHeight);
        this.point13 = new PIXI.Point(0, 0.91 * this._flagHeight);
        this.point14 = new PIXI.Point(0.4 * this._flagWidth, 0.5 * this._flagHeight);
        this.point15 = new PIXI.Point(0, 0.09 * this._flagHeight);

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // cyan
        this.area2Color = parseInt(this._flagData["area2"]); //white
        this.area3Color = parseInt(this._flagData["area3"]); //cyan
        this.area4Color = parseInt(this._flagData["area4"]); //white
        this.area5Color = parseInt(this._flagData["area5"]); //cyan

        //wrong colors
        this.wrongColor1 = 0xff0000;
        this.wrongColor2 = 0x0000ff;
        this.wrongColor3 = 0xffffff;

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb)
        this.area1.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area1.name);
        });
        this.addChild(this.area1);

        this.area2 = new PIXI.Graphics();
        this.area2.interactive = true;
        this.area2.name = "area2";
        this.addChild(this.area2);
        this.paintFlagArea(this.area2.name, this._solved ? this.area2Color : 0xbbbbbb)
        this.area2.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area2.name);
        });

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
        this.paintFlagArea(this.area4.name,this._solved ? this.area4Color : 0xbbbbbb);
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        });

        this.area5 = new PIXI.Graphics();
        this.area5.interactive = true;
        this.area5.name = "area5";
        this.addChild(this.area5);
        this.paintFlagArea(this.area5.name,this._solved ? this.area5Color : 0xbbbbbb);
        this.area5.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area5.name);
        });

    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area3Color,
            this.wrongColor1,
            this.wrongColor2,
            this.wrongColor3
        ];
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle(this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.point1.x, this.point1.y);
                this.area2.lineTo(this.point3.x, this.point3.y);
                this.area2.lineTo(this.point2.x, this.point2.y);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.point5.x, this.point5.y);
                this.area3.lineTo(this.point7.x, this.point7.y);
                this.area3.lineTo(this.point6.x, this.point6.y);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle(this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this.point9.x, this.point9.y);
                this.area4.lineTo(this.point11.x, this.point11.y);
                this.area4.lineTo(this.point10.x, this.point10.y);
                this.area4.closePath();
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.lineStyle(this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(this.point13.x, this.point13.y);
                this.area5.lineTo(this.point15.x, this.point15.y);
                this.area5.lineTo(this.point14.x, this.point14.y);
                this.area5.closePath();
                this.area5.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}