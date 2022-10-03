import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class SouthAfrica extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.area1_1 = new PIXI.Point(0.19 * this._flagWidth, 0);
        this.area1_2 = new PIXI.Point(this._flagWidth, 0);
        this.area1_3 = new PIXI.Point(this._flagWidth, 0.33 * this._flagHeight);
        this.area1_4 = new PIXI.Point(0.53 * this._flagWidth, 0.33 * this._flagHeight);

        this.area2_1 = new PIXI.Point(0.19 * this._flagWidth, this._flagHeight);
        this.area2_2 = new PIXI.Point(0.53 * this._flagWidth, 0.669 * this._flagHeight);
        this.area2_3 = new PIXI.Point(this._flagWidth, 0.669 * this._flagHeight);
        this.area2_4 = new PIXI.Point(this._flagWidth, this._flagHeight);

        this.area3_1 = new PIXI.Point(0.19 * this._flagWidth, 0);
        this.area3_2 = new PIXI.Point(0.53 * this._flagWidth, 0.33 * this._flagHeight);
        this.area3_3 = new PIXI.Point(this._flagWidth, 0.33 * this._flagHeight);
        this.area3_4 = new PIXI.Point(this._flagWidth, 0.669 * this._flagHeight);
        this.area3_5 = new PIXI.Point(0.53 * this._flagWidth, 0.669 * this._flagHeight);
        this.area3_6 = new PIXI.Point(0.19 * this._flagWidth, this._flagHeight);
        this.area3_7 = new PIXI.Point(0, this._flagHeight);
        this.area3_8 = new PIXI.Point(0, 0);

        this.area4_1 = new PIXI.Point(0,0);
        this.area4_2 = new PIXI.Point(0.1059 * this._flagWidth, 0);
        this.area4_3 = new PIXI.Point(0.52 * this._flagWidth, 0.398 * this._flagHeight);
        this.area4_4 = new PIXI.Point(this._flagWidth, 0.398 * this._flagHeight);
        this.area4_5 = new PIXI.Point(this._flagWidth, 0.60 * this._flagHeight);
        this.area4_6 = new PIXI.Point(0.52 * this._flagWidth, 0.60 * this._flagHeight);
        this.area4_7 = new PIXI.Point(0.1059 * this._flagWidth, this._flagHeight);
        this.area4_8 = new PIXI.Point(0, this._flagHeight);

        this.area5_1 = new PIXI.Point(0, 0.1474 * this._flagHeight);
        this.area5_2 = new PIXI.Point(0.3718 * this._flagWidth, this._flagHeight / 2);
        this.area5_3 = new PIXI.Point(0, 0.8549 * this._flagHeight);

        this.area6_1 = new PIXI.Point(0, 0.229 * this._flagHeight);
        this.area6_2 = new PIXI.Point(0.285 * this._flagWidth, this._flagHeight / 2);
        this.area6_3 = new PIXI.Point(0, 0.773 * this._flagHeight);

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]);
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]);
        this.area6Color = parseInt(this._flagData["correctColors"][5]["area6"]);

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
        this.area3.name = "area3";
        this.addChild(this.area3);
        this.paintFlagArea(this.area3.name,  this.area3Color);

        this.area4 = new PIXI.Graphics();
        this.area4.interactive = true;
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name, this._solved ? this.area4Color : 0xbbbbbb)
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        });

        this.area5 = new PIXI.Graphics();
        this.area5.name = "area5";
        this.addChild(this.area5);
        this.paintFlagArea(this.area5.name,  this.area5Color);

        this.area6 = new PIXI.Graphics();
        this.area6.interactive = true;
        this.area6.name = "area6";
        this.addChild(this.area6);
        this.paintFlagArea(this.area6.name, this._solved ? this.area6Color : 0xbbbbbb)
        this.area6.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area6.name);
        });
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area4Color,
            this.area6Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color) {
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(this.area1_1.x, this.area1_1.y);
                this.area1.lineTo(this.area1_2.x, this.area1_2.y);
                this.area1.lineTo(this.area1_3.x, this.area1_3.y);
                this.area1.lineTo(this.area1_4.x, this.area1_4.y);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.area2_1.x, this.area2_1.y);
                this.area2.lineTo(this.area2_2.x, this.area2_2.y);
                this.area2.lineTo(this.area2_3.x, this.area2_3.y);
                this.area2.lineTo(this.area2_4.x, this.area2_4.y);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.area3_1.x, this.area3_1.y);
                this.area3.lineTo(this.area3_2.x, this.area3_2.y);
                this.area3.lineTo(this.area3_3.x, this.area3_3.y);
                this.area3.lineTo(this.area3_4.x, this.area3_4.y);
                this.area3.lineTo(this.area3_5.x, this.area3_5.y);
                this.area3.lineTo(this.area3_6.x, this.area3_6.y);
                this.area3.lineTo(this.area3_7.x, this.area3_7.y);
                this.area3.lineTo(this.area3_8.x, this.area3_8.y);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this.area4_1.x, this.area4_1.y);
                this.area4.lineTo(this.area4_2.x, this.area4_2.y);
                this.area4.lineTo(this.area4_3.x, this.area4_3.y);
                this.area4.lineTo(this.area4_4.x, this.area4_4.y);
                this.area4.lineTo(this.area4_5.x, this.area4_5.y);
                this.area4.lineTo(this.area4_6.x, this.area4_6.y);
                this.area4.lineTo(this.area4_7.x, this.area4_7.y);
                this.area4.lineTo(this.area4_8.x, this.area4_8.y);
                this.area4.closePath();
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(this.area5_1.x, this.area5_1.y);
                this.area5.lineTo(this.area5_2.x, this.area5_2.y);
                this.area5.lineTo(this.area5_3.x, this.area5_3.y);
                this.area5.closePath();
                this.area5.endFill();
                break;
            case this.area6.name:
                this.area6.lineStyle( this._lineWidth, 0x000000, 1);
                this.area6.beginFill(color);
                this.area6.moveTo(this.area6_1.x, this.area6_1.y);
                this.area6.lineTo(this.area6_2.x, this.area6_2.y);
                this.area6.lineTo(this.area6_3.x, this.area6_3.y);
                this.area6.closePath();
                this.area6.endFill();
                break;


        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }

}