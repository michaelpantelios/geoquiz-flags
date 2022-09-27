import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import nauru_emblem from "../assets/images/flagSpecials/nauru/nauru_emblem.png";

export class Nauru extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());

        this._solved = data.solved;
        this._flagData = data.flagData;
        this._areaHeight = this._flagHeight * 0.333;
        this._lineWidth = data.lineWidth;

        this.area1Height = 0.44 * this._flagHeight;
        this.area3Height = 0.12 * this._flagHeight;
        this.emblemX = 0.1348 * this._flagWidth;
        this.emblemY = 0.5743 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // cyan
        this.area2Color = parseInt(this._flagData["area2"]); //white
        this.area3Color = parseInt(this._flagData["area3"]); //cyan

        //wrong colors
        this.wrongColor1 = 0xf6224e;
        this.wrongColor2 = 0x72f622;
        this.wrongColor3 = 0xf68522;
        this.wrongColor4 = 0x063155;

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
        this.area3.interactive = true;
        this.area3.name = "area3";
        this.addChild(this.area3);
        this.paintFlagArea(this.area3.name, this._solved ? this.area3Color : 0xbbbbbb)
        this.area3.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area3.name);
        });

        this.area4 = new PIXI.Sprite.from(nauru_emblem);
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
            this.area2Color,
            this.wrongColor1,
            this.wrongColor2,
            this.wrongColor3,
            this.wrongColor4
        ];
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this.area1Height);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, this.area1Height, this._flagWidth, this.area3Height);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, this.area3Height+this.area1Height, this._flagWidth, this.area1Height);
                this.area3.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}

