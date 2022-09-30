import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class CzechRepublic extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.area3Width = 0.53 * this._flagWidth;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); // blue
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]); //blue
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]); //blue

        //wrong colors
        this.wrongColor1 = 0x000000;
        this.wrongColor2 = 0x3a9f1a;
        this.wrongColor3 = 0xffff00;

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.addChild(this.area1);
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb)
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
        this.area3.interactive = true;
        this.area3.name = "area3";
        this.addChild(this.area3);
        this.paintFlagArea(this.area3.name, this._solved ? this.area3Color : 0xbbbbbb)
        this.area3.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area3.name);
        });

    }

    paintFlagArea(name, color){
        switch (name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(0, 0);
                this.area1.lineTo(this._flagWidth, 0);
                this.area1.lineTo(this._flagWidth, this._flagHeight / 2);
                this.area1.lineTo(this.area3Width, this._flagHeight / 2);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.area3Width, this._flagHeight / 2);
                this.area2.lineTo(this._flagWidth, this._flagHeight / 2);
                this.area2.lineTo(this._flagWidth, this._flagHeight);
                this.area2.lineTo(0, this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(0, 0);
                this.area3.lineTo(this.area3Width, this._flagHeight / 2);
                this.area3.lineTo(0, this._flagHeight);
                this.area3.closePath();
                this.area3.endFill();
                break;
        }
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area3Color
        ].concat(this.wrongColors);
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}