import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";
import srilanka_emblem from "../assets/images/flagSpecials/srilanka/srilanka_emblem.png";

export class SriLanka extends FlagBaseClass {
    constructor(data) {
        super(data);

      

        this.emblemX = 0.405 * this._flagWidth;
        this.emblemY = 0.098 * this._flagHeight;

        this.area2Width = 0.13 * this._flagWidth;
        this.area2Height = 0.8938 * this._flagHeight;
        this.area2LeftTop = new PIXI.Point(0.041 * this._flagWidth, 0.0557 * this._flagHeight);
        this.area4Width = 0.60 * this._flagWidth;
        this.area4Height = 0.89 * this._flagHeight;
        this.area4LeftTop = new PIXI.Point(0.3584 * this._flagWidth, 0.0557 * this._flagHeight);

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]);

        this.area1 = new PIXI.Graphics();
        this.area1.name = "area1";
        this.addChild(this.area1);
        this.paintFlagArea(this.area1.name, this.area1Color);

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

        this.area5 = new PIXI.Sprite.from(srilanka_emblem);
        this.area5.scale.set(this._scale);
        this.area5.visible = false;
        this.addChild(this.area5);
        setTimeout(()=>{
            this.area5.x = this.emblemX;
            this.area5.y = this.emblemY;
            this.area5.visible = true;
        }, 1000);

    }

    getColorsForPickers(){
        return [
            this.area2Color,
            this.area3Color,
            this.area4Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        super.paintFlagArea(name, color);
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(this.area2LeftTop.x, this.area2LeftTop.y, this.area2Width, this.area2Height);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(this.area2LeftTop.x + this.area2Width, this.area2LeftTop.y, this.area2Width, this.area2Height);
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle(this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.drawRect(this.area4LeftTop.x, this.area4LeftTop.y, this.area4Width, this.area4Height);
                this.area4.endFill();
        }
    }


  

}