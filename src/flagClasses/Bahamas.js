import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class Bahamas extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = data.width;
        this._flagHeight = data.height;

        this._solved = data.solved;
        this._lineWidth = data.lineWidth;
        this._flagData = data.flagData;

        // console.log("flag data: ",data);
        // console.log(`flag this.width = ${data.width}`);
        // console.log(`flag this.height = ${data.height}`);

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); //blue
        this.area2Color = parseInt(this._flagData["area2"]); //yellow
        this.area3Color = parseInt(this._flagData["area3"]); //blue
        this.area4Color = parseInt(this._flagData["area4"]); //black

        //wrong colors
        this.wrongColor1 = 0xff0000;
        this.wrongColor2 = 0x135305;
        this.wrongColor3 = 0xffffff;

        this._areaHeight = this._flagHeight * 0.3333;
        this._triangleWidth = 0.5 * this._flagWidth;

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

        this.area4 = new PIXI.Graphics();
        this.area4.interactive = true;
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name, this._solved ? this.area4Color : 0xbbbbbb)
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        });
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area4Color,
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
                this.area1.drawRect(0, 0, this._flagWidth, this._areaHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, this._areaHeight, this._flagWidth, this._areaHeight);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, 2 * this._areaHeight, this._flagWidth, this._areaHeight);
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle(this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(0,0);
                this.area4.lineTo(this._triangleWidth, this._flagHeight / 2);
                this.area4.lineTo(0, this._flagHeight);
                this.area4.closePath();
                this.area4.endFill();
                break;

        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}

