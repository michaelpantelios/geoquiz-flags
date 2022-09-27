import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import costarica_emblem from "../assets/images/flagSpecials/costarica/costarica_emblem.png";

export class CostaRica extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;

        this._area1Height = 0.1576 * this._flagHeight;
        this._area2Height = 0.1732 * this._flagHeight;
        this._area3Height = 0.3309 * this._flagHeight;

        this._emblemX = 0.1817 * this._flagWidth;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // blue
        this.area2Color = parseInt(this._flagData["area2"]); // white
        this.area3Color = parseInt(this._flagData["area3"]); // red
        this.area4Color = parseInt(this._flagData["area4"]); // white
        this.area5Color = parseInt(this._flagData["area5"]); // blue

        //wrong colors
        this.wrongColor1 = 0x000000;
        this.wrongColor2 = 0xff9100;
        this.wrongColor3 = 0x3a9f1a;

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

        this.area6 = new PIXI.Sprite.from(costarica_emblem);
        this.area6.visible = false;
        this.area6.scale.set(this._scale);
        this.addChild(this.area6);
        setTimeout(()=>{
            this.area6.x = this._emblemX;
            this.area6.y = this._flagHeight / 2 - this.area6.height / 2;
            this.area6.visible = true;
        }, 1000);

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
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._area1Height);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, 0, this._flagWidth, this._area2Height);
                this.area2.endFill();
                this.area2.y = this._area1Height;
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, 0, this._flagWidth, this._area3Height);
                this.area3.endFill();
                this.area3.y = this._area1Height + this._area2Height;
                break;
            case this.area4.name:
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.drawRect(0, 0, this._flagWidth, this._area2Height);
                this.area4.endFill();
                this.area4.y = this._area1Height + this._area2Height + this._area3Height;
                break;
            case this.area5.name:
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.drawRect(0, 0, this._flagWidth, this._area1Height);
                this.area5.endFill();
                this.area5.y = this._area1Height + this._area2Height + this._area3Height+this._area2Height;
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }

}
