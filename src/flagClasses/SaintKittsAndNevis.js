import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";
import saintkittsandnevis_emblem from "../assets/images/flagSpecials/saintkittsandnevis/saintkittsandnevis_emblem.png";

export class SaintKittsAndNevis extends FlagBaseClass {
    constructor(data) {
        super(data);

        

        this._area3_0 = new PIXI.Point(0,0.68 * this._flagHeight);
        this._area3_1 = new PIXI.Point(0.791 * this._flagWidth,0);
        this._area3_2 = new PIXI.Point(this._flagWidth,0);
        this._area3_3 = new PIXI.Point(this._flagWidth,0.278 * this._flagHeight);
        this._area3_4 = new PIXI.Point(0.198 * this._flagWidth,this._flagHeight);
        this._area3_5 = new PIXI.Point(0, this._flagHeight);

        this._area4_0 = new PIXI.Point(0, 0.74 * this._flagHeight);
        this._area4_1 = new PIXI.Point(0.847 * this._flagWidth,0);
        this._area4_2 = new PIXI.Point(this._flagWidth,0);
        this._area4_3 = new PIXI.Point(this._flagWidth, 0.229 * this._flagHeight);
        this._area4_4 = new PIXI.Point(0.149 * this._flagWidth, this._flagHeight);
        this._area4_5 = new PIXI.Point(0, this._flagHeight);

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

        this.area5 = new PIXI.Sprite.from(saintkittsandnevis_emblem);
        this.area5.visible = false;
        this.area5.scale.set(this._scale);
        this.addChild(this.area5);
        setTimeout(()=>{
            this.area5.x = this._flagWidth / 2 - this.area5.width / 2;
            this.area5.y = this._flagHeight / 2 - this.area5.height / 2;
            this.area5.visible = true;
        }, 1000);

    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
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
                this.area1.moveTo(0,0);
                this.area1.lineTo(this._area3_1.x, 0);
                this.area1.lineTo(0, this._area3_0.y);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this._area3_4.x, this._area3_4.y);
                this.area2.lineTo(this._area3_3.x, this._area3_3.y);
                this.area2.lineTo(this._flagWidth, this._flagHeight)
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
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
                this.area4.clear();
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this._area4_0.x, this._area4_0.y);
                this.area4.lineTo(this._area4_1.x, this._area4_1.y);
                this.area4.lineTo(this._area4_2.x, this._area4_2.y);
                this.area4.lineTo(this._area4_3.x, this._area4_3.y);
                this.area4.lineTo(this._area4_4.x, this._area4_4.y);
                this.area4.lineTo(this._area4_5.x, this._area4_5.y);
                this.area4.closePath();
                this.area4.endFill();
        }
    }

  

}