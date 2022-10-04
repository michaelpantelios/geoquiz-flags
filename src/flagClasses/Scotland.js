import * as PIXI from "pixi.js"
import {Utils} from "../Utils";

export class Scotland extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.area5_1 = new PIXI.Point(0.05 * this._flagWidth, 0);
        this.area5_2 = new PIXI.Point(0.5 * this._flagWidth, 0.38 * this._flagHeight);
        this.area5_3 = new PIXI.Point(0.95 * this._flagWidth, 0);
        this.area5_4 = new PIXI.Point(this._flagWidth, 0);
        this.area5_5 = new PIXI.Point(this._flagWidth, 0.19 * this._flagHeight);
        this.area5_6 = new PIXI.Point(0.63 * this._flagWidth, 0.5 * this._flagHeight);
        this.area5_7 = new PIXI.Point( this._flagWidth, 0.81 * this._flagHeight);
        this.area5_8 = new PIXI.Point(this._flagWidth, this._flagHeight);
        this.area5_9 = new PIXI.Point(0.95 * this._flagWidth, this._flagHeight);
        this.area5_10 = new PIXI.Point(0.5 * this._flagWidth, 0.62 * this._flagHeight);
        this.area5_11 = new PIXI.Point(0.05 * this._flagWidth, this._flagHeight);
        this.area5_12 = new PIXI.Point(0, this._flagHeight);
        this.area5_13 = new PIXI.Point(0, 0.81 * this._flagHeight);
        this.area5_14 = new PIXI.Point(0.37 * this._flagWidth, 0.5 * this._flagHeight);
        this.area5_15 = new PIXI.Point(0, 0.19 * this._flagHeight);
        this.area5_16 = new PIXI.Point(0, 0);

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]);
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]);

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
        this.paintFlagArea(this.area3.name, this._solved ? this.area3Color : 0xbbbbbb)
        this.area3.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area3.name);
        });
        this.addChild(this.area3);

        this.area4 = new PIXI.Graphics();
        this.area4.interactive = true;
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name, this._solved ? this.area4Color : 0xbbbbbb)
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        });

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
            this.area5Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(this.area5_1.x, this.area5_1.y);
                this.area1.lineTo(this.area5_3.x, this.area5_3.y);
                this.area1.lineTo(this.area5_2.x, this.area5_2.y);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.area5_5.x, this.area5_5.y);
                this.area2.lineTo(this.area5_7.x, this.area5_7.y);
                this.area2.lineTo(this.area5_6.x, this.area5_6.y);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.area5_9.x, this.area5_9.y);
                this.area3.lineTo(this.area5_11.x, this.area5_11.y);
                this.area3.lineTo(this.area5_10.x, this.area5_10.y);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this.area5_13.x, this.area5_13.y);
                this.area4.lineTo(this.area5_15.x, this.area5_15.y);
                this.area4.lineTo(this.area5_14.x, this.area5_14.y);
                this.area4.closePath();
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.clear();
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(this.area5_1.x, this.area5_1.y);
                this.area5.lineTo(this.area5_2.x, this.area5_2.y);
                this.area5.lineTo(this.area5_3.x, this.area5_3.y);
                this.area5.lineTo(this.area5_4.x, this.area5_4.y);
                this.area5.lineTo(this.area5_5.x, this.area5_5.y);
                this.area5.lineTo(this.area5_6.x, this.area5_6.y);
                this.area5.lineTo(this.area5_7.x, this.area5_7.y);
                this.area5.lineTo(this.area5_8.x, this.area5_8.y);
                this.area5.lineTo(this.area5_9.x, this.area5_9.y);
                this.area5.lineTo(this.area5_10.x, this.area5_10.y);
                this.area5.lineTo(this.area5_11.x, this.area5_11.y);
                this.area5.lineTo(this.area5_12.x, this.area5_12.y);
                this.area5.lineTo(this.area5_13.x, this.area5_13.y);
                this.area5.lineTo(this.area5_14.x, this.area5_14.y);
                this.area5.lineTo(this.area5_15.x, this.area5_15.y);
                this.area5.lineTo(this.area5_16.x, this.area5_16.y);
                this.area5.closePath();
                this.area5.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}
