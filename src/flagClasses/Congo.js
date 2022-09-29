import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import congo_emblem from "../assets/images/flagSpecials/congo/congo_emblem.png";

export class Congo extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this._area3_0 = new PIXI.Point(0,0.75 * this._flagHeight);
        this._area3_1 = new PIXI.Point(0.938 * this._flagWidth,0);
        this._area3_2 = new PIXI.Point(this._flagWidth,0);
        this._area3_3 = new PIXI.Point(this._flagWidth,0.254 * this._flagHeight);
        this._area3_4 = new PIXI.Point(0.07 * this._flagWidth,this._flagHeight);
        this._area3_5 = new PIXI.Point(0, this._flagHeight);

        this._area4_0 = new PIXI.Point(0, 0.8 * this._flagHeight);
        this._area4_1 = new PIXI.Point(this._flagWidth,0);
        this._area4_2 = new PIXI.Point(this._flagWidth,0.20 * this._flagHeight);
        this._area4_3 = new PIXI.Point(0.006 * this._flagWidth,this._flagHeight);
        this._area4_4 = new PIXI.Point(0, this._flagHeight);

        this._emblemPos = new PIXI.Point(0.044 * this._flagWidth, 0.06 * this._flagHeight);

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // cyan
        this.area2Color = parseInt(this._flagData["area2"]); // cyan
        this.area3Color = parseInt(this._flagData["area3"]); // cyan
        this.area4Color = parseInt(this._flagData["area4"]); // cyan

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

        this.area4 = new PIXI.Graphics();
        this.area4.interactive = true;
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name, this._solved ? this.area4Color : 0xbbbbbb)
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        });

        this.area5 = new PIXI.Sprite.from(congo_emblem);
        this.area5.visible = false;
        this.area5.scale.set(this._scale);
        this.addChild(this.area5);
        setTimeout(()=>{
            this.area5.x = this._emblemPos.x;
            this.area5.y = this._emblemPos.y;
            this.area5.visible = true;
        }, 1000);
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area4Color
        ].concat(this.wrongColors);
    }


    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(0,0);
                this.area1.lineTo(this._area3_1.x, 0);
                this.area1.lineTo(0, this._area3_0.y);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this._area3_4.x, this._flagHeight);
                this.area2.lineTo(this._flagWidth, this._area3_3.y);
                this.area2.lineTo(this._flagWidth, this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this._area3_0.x, this._area3_0.y);
                this.area3.lineTo(this._area3_1.x, this._area3_1.y);
                this.area3.lineTo(this._area3_2.x, this._area3_2.y);
                this.area3.lineTo(this._area3_3.x, this._area3_3.y);
                this.area3.lineTo(this._area3_4.x, this._area3_4.y);
                this.area3.lineTo(this._area3_5.x, this._area3_5.y);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this._area4_0.x, this._area4_0.y);
                this.area4.lineTo(this._area4_1.x, this._area4_1.y);
                this.area4.lineTo(this._area4_2.x, this._area4_2.y);
                this.area4.lineTo(this._area4_3.x, this._area4_3.y);
                this.area4.lineTo(this._area4_4.x, this._area4_4.y);
                this.area4.closePath();
                this.area4.endFill();
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}