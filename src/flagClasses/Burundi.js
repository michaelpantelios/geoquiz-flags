import * as PIXI from "pixi.js"
import {Utils} from "../Utils";
import burundi_bi from "../assets/images/flagSpecials/burundi/burundi_bi.png";

export class Burundi extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.point0 = new PIXI.Point(0,0.01 * this._flagHeight);
        this.point1 = new PIXI.Point(0.34 * this._flagWidth, 0.28 * this._flagHeight);
        this.point2 = new PIXI.Point(0.65 * this._flagWidth, 0.28 * this._flagHeight);
        this.point3 = new PIXI.Point(   this._flagWidth, 0.01 * this._flagHeight);
        this.point4 = new PIXI.Point(this._flagWidth, 0.19 * this._flagHeight);
        this.point5 = new PIXI.Point( 0.71 * this._flagWidth, 0.42 * this._flagHeight);
        this.point6 = new PIXI.Point(0.71 * this._flagWidth, 0.579 * this._flagHeight);
        this.point7 = new PIXI.Point( this._flagWidth, 0.8 * this._flagHeight);
        this.point8 = new PIXI.Point(this._flagWidth, 0.99 * this._flagHeight);
        this.point9 = new PIXI.Point(0.65 * this._flagWidth, 0.72 * this._flagHeight);
        this.point10 = new PIXI.Point(0.34 * this._flagWidth, 0.72 * this._flagHeight);
        this.point11 = new PIXI.Point(0, 0.99 * this._flagHeight);
        this.point12 = new PIXI.Point(0, 0.8 * this._flagHeight);
        this.point13 = new PIXI.Point(0.28 * this._flagWidth, 0.579 * this._flagHeight);
        this.point14 = new PIXI.Point(0.28 * this._flagWidth, 0.42 * this._flagHeight);
        this.point15 = new PIXI.Point(0, 0.19 * this._flagHeight);

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

        this.area5 = new PIXI.Graphics();
        this.area5.interactive = true;
        this.area5.name = "area5";
        this.addChild(this.area5);
        this.paintFlagArea(this.area5.name, this._solved ? this.area5Color : 0xbbbbbb)
        this.area5.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area5.name);
        });

        this.area6 = new PIXI.Sprite.from(burundi_bi);
        this.area6.visible = false;
        this.area6.scale.set(this._scale);
        this.addChild(this.area6);
        setTimeout(()=>{
            this.area6.x = this._flagWidth / 2 - this.area6.width / 2;
            this.area6.y = this._flagHeight / 2 - this.area6.height / 2 - 0.03 * this._flagHeight;
            this.area6.visible = true;
        }, 1000);
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area5Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle(this._lineWidth, 0x000000);
                this.area1.beginFill(color);
                this.area1.moveTo(0, 0);
                this.area1.lineTo(this._flagWidth, 0);
                this.area1.lineTo(this._flagWidth, 0.01 * this._flagHeight);
                this.area1.lineTo(this._flagWidth / 2, this._flagHeight / 2);
                this.area1.lineTo(0, 0.01 * this._flagHeight);
                this.area1.lineTo(0, 0);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle(this._lineWidth, 0x000000);
                this.area2.beginFill(color);
                this.area2.moveTo(this._flagWidth, 0.01 * this._flagHeight);
                this.area2.lineTo(this._flagWidth, 0.99 * this._flagHeight);
                this.area2.lineTo(this._flagWidth / 2, this._flagHeight / 2);
                this.area2.lineTo(this._flagWidth, 0.01 * this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle(this._lineWidth, 0x000000);
                this.area3.beginFill(color);
                this.area3.moveTo(0, this._flagHeight);
                this.area3.lineTo(0, 0.99 * this._flagHeight);
                this.area3.lineTo(this._flagWidth / 2, this._flagHeight / 2);
                this.area3.lineTo(this._flagWidth, 0.99 * this._flagHeight);
                this.area3.lineTo(this._flagWidth, this._flagHeight);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle(this._lineWidth, 0x000000);
                this.area4.beginFill(color);
                this.area4.moveTo(0, 0.01 * this._flagHeight);
                this.area4.lineTo(this._flagWidth / 2, this._flagHeight / 2);
                this.area4.lineTo(0, 0.99 * this._flagHeight);
                this.area4.lineTo(0, 0.01 * this._flagHeight);
                this.area4.closePath();
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.clear();
                // this.area5.lineStyle(this._lineWidth, 0xff0000);
                this.area5.beginFill(color);
                // this.area5.drawCircle(this._flagWidth / 2, this._flagHeight/2, 0.22 * this._flagWidth);
                this.area5.lineStyle(this._lineWidth, 0x000000);
                this.area5.moveTo(this.point0.x, this.point0.y);
                this.area5.lineTo(this.point1.x, this.point1.y);
                // this.area5.lineTo(this.point2.x, this.point2.y);
                this.area5.quadraticCurveTo(this._flagWidth / 2, this._flagHeight * 0.09, this.point2.x, this.point2.y );
                this.area5.lineTo(this.point3.x, this.point3.y);
                this.area5.lineTo(this.point4.x, this.point4.y);
                this.area5.lineTo(this.point5.x, this.point5.y);
                this.area5.quadraticCurveTo(0.723 * this._flagWidth, 0.5 * this._flagHeight, this.point6.x, this.point6.y);
                // this.area5.lineTo(this.point6.x, this.point6.y);
                this.area5.lineTo(this.point7.x, this.point7.y);
                this.area5.lineTo(this.point8.x, this.point8.y);
                this.area5.lineTo(this.point9.x, this.point9.y);
                this.area5.quadraticCurveTo(this._flagWidth / 2, this._flagHeight * 0.91, this.point10.x, this.point10.y );
                // this.area5.lineTo(this.point10.x, this.point10.y);
                this.area5.lineTo(this.point11.x, this.point11.y);
                this.area5.lineTo(this.point12.x, this.point12.y);
                this.area5.lineTo(this.point13.x, this.point13.y);
                this.area5.quadraticCurveTo(0.26 * this._flagWidth, 0.5 * this._flagHeight, this.point14.x, this.point14.y);
                // this.area5.lineTo(this.point14.x, this.point14.y);
                this.area5.lineTo(this.point15.x, this.point15.y);
                this.area5.closePath();
                this.area5.endFill();
                break;

        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}