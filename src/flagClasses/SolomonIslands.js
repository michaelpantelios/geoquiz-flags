import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import solomonislands_emblem from "../assets/images/flagSpecials/solomonislands/solomonislands_emblem.png";

export class SolomonIslands extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._areaHeight = this._flagHeight * 0.333;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.emblemX = 0.025 * this._flagWidth;
        this.emblemY = 0.025 * this._flagHeight;

        this.area1X4 = new PIXI.Point(0, 0.94 * this._flagHeight);
        this.area1X3 = new PIXI.Point(this._flagWidth, 0.28 * this._flagHeight);
        this.area2X1 = new PIXI.Point(0.088 * this._flagWidth, this._flagHeight);
        this.area2X2 = new PIXI.Point(this._flagWidth, 0.39 * this._flagHeight);

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); // green
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]); //white
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]); //white

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

        this.area3 = new PIXI.Graphics();
        this.area3.name = "area3";
        this.addChild(this.area3);
        this.paintFlagArea(this.area3.name,  this.area3Color);

        this.area4 = new PIXI.Sprite.from(solomonislands_emblem);
        this.area4.scale.set(this._scale);
        this.area4.visible = false;
        this.addChild(this.area4);
        setTimeout(()=>{
            this.area4.x = this.emblemX;
            this.area4.y = this.emblemY;
            this.area4.visible = true;
        }, 1000);
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle(this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(0,0);
                this.area1.lineTo(this._flagWidth, 0);
                this.area1.lineTo(this.area1X3.x, this.area1X3.y);
                this.area1.lineTo(this.area1X4.x, this.area1X4.y);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle(this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.area2X1.x, this.area2X1.y);
                this.area2.lineTo(this.area2X2.x, this.area2X2.y);
                this.area2.lineTo(this._flagWidth, this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.area1X4.x, this.area1X4.y);
                this.area3.lineTo(this.area1X3.x, this.area1X3.y);
                this.area3.lineTo(this.area2X2.x, this.area2X2.y);
                this.area3.lineTo(this.area2X1.x, this.area2X1.y);
                this.area3.lineTo(0, this._flagHeight);
                this.area3.closePath();
                this.area3.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}