import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import mauritania_emblem from "../assets/images/flagSpecials/mauritania/mauritania_emblem.png";

export class Mauritania extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.area1Height = 0.2 * this._flagHeight;
        this.area2Height = 0.6 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);

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

        this.area4 = new PIXI.Sprite.from(mauritania_emblem);
        this.area4.scale.set(this._scale);
        this.area4.visible = false;
        this.addChild(this.area4);
        setTimeout(()=>{
            this.area4.x = this._flagWidth / 2 - this.area4.width / 2;
            this.area4.y = this._flagHeight / 2 - this.area4.height / 2;
            this.area4.visible = true;
        }, 1000);
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this.area1Height);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, this.area1Height, this._flagWidth, this.area2Height);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, this.area1Height + this.area2Height, this._flagWidth, this.area1Height);
                this.area3.endFill();
                break;
        }
    }


    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color
        ].concat(this.wrongColors);
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }

}