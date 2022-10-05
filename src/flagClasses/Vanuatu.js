import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";
import vanuatu_emblem from "../assets/images/flagSpecials/vanuatu/vanuatu_emblem.png";

export class Vanuatu extends FlagBaseClass {
    constructor(data) {
        super(data);

      


        this.area3_0 = new PIXI.Point(0,0);
        this.area3_1 = new PIXI.Point(0.46 * this._flagWidth, 0.413 * this._flagHeight);
        this.area3_2 = new PIXI.Point(this._flagWidth, 0.413 * this._flagHeight);
        this.area3_3 = new PIXI.Point(this._flagWidth, 0.592 * this._flagHeight);
        this.area3_4 = new PIXI.Point(0.46 * this._flagWidth, 0.592 * this._flagHeight);
        this.area3_5 = new PIXI.Point(0, this._flagHeight);

        this.area4_0 = new PIXI.Point(0, 0.08 * this._flagHeight);
        this.area4_1 = new PIXI.Point(0.4556 * this._flagWidth, 0.4748 * this._flagHeight);
        this.area4_2 = new PIXI.Point(this._flagWidth, 0.4748 * this._flagHeight);
        this.area4_3 = new PIXI.Point(this._flagWidth, 0.5293 * this._flagHeight);
        this.area4_4 = new PIXI.Point(0.4556 * this._flagWidth, 0.5293 * this._flagHeight);
        this.area4_5 = new PIXI.Point(0, 0.9274 * this._flagHeight);
        this.area4_6 = new PIXI.Point(0, 0.86 * this._flagHeight);
        this.area4_7 = new PIXI.Point(0.41 * this._flagWidth, 0.5 * this._flagHeight);
        this.area4_8 = new PIXI.Point(0, 0.14 * this._flagHeight);

        this.emblemX = 0.07 * this._flagWidth;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]);

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
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name,  this.area4Color);

        this.area5 = new PIXI.Sprite.from(vanuatu_emblem);
        this.area5.visible = false;
        this.area5.scale.set(this._scale);
        this.addChild(this.area5);
        setTimeout(()=>{
            this.area5.x = this.emblemX;
            this.area5.y = this._flagHeight / 2 - this.area5.height / 2;
            this.area5.visible = true;
        }, 1000);
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area3Color
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
                this.area1.moveTo(0,0);
                this.area1.lineTo(this._flagWidth, 0);
                this.area1.lineTo(this.area3_2.x, this.area3_2.y);
                this.area1.lineTo(this.area3_1.x, this.area3_1.y);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(0, this._flagHeight);
                this.area2.lineTo(this.area3_4.x, this.area3_4.y);
                this.area2.lineTo(this.area3_3.x, this.area3_3.y);
                this.area2.lineTo(this._flagWidth, this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.area3_0.x, this.area3_0.y);
                this.area3.lineTo(this.area3_1.x, this.area3_1.y);
                this.area3.lineTo(this.area3_2.x, this.area3_2.y);
                this.area3.lineTo(this.area3_3.x, this.area3_3.y);
                this.area3.lineTo(this.area3_4.x, this.area3_4.y);
                this.area3.lineTo(this.area3_5.x, this.area3_5.y);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this.area4_0.x, this.area4_0.y);
                this.area4.lineTo(this.area4_1.x, this.area4_1.y);
                this.area4.lineTo(this.area4_2.x, this.area4_2.y);
                this.area4.lineTo(this.area4_3.x, this.area4_3.y);
                this.area4.lineTo(this.area4_4.x, this.area4_4.y);
                this.area4.lineTo(this.area4_5.x, this.area4_5.y);
                this.area4.lineTo(this.area4_6.x, this.area4_6.y);
                this.area4.lineTo(this.area4_7.x, this.area4_7.y);
                this.area4.lineTo(this.area4_8.x, this.area4_8.y);
                this.area4.closePath();
                this.area4.endFill();
        }
    }

  

}
