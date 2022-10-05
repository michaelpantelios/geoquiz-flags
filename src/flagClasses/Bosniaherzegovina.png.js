import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";
import bosnia_emblem from "../assets/images/flagSpecials/bosniaherzegovina/bosniaherzegovina_emblem.png";

export class Bosniaherzegovina extends FlagBaseClass {
    constructor(data) {
        super(data);

        this._area3Width = 0.5 * this._flagWidth;
        this._area3X = 0.26 * this._flagWidth;
        this._area4X = 0.13 * this._flagWidth;

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

        this.area4 = new PIXI.Sprite.from(bosnia_emblem);
        this.area4.visible = false;
        this.area4.scale.set(this._scale);
        this.addChild(this.area4);
        setTimeout(()=>{
            this.area4.x = this._area4X;
            this.area4.visible = true;
        }, 1000);

    }

    getColorsForPickers(){
        return [
            this.area1Color,
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
                this.area1.drawRect(0, 0, this._area3X+this._area3Width, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, 0, this._flagWidth - (this._area3X+this._area3Width), this._flagHeight);
                this.area2.endFill();
                this.area2.x = this._area3X+this._area3Width;
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(0, 0);
                this.area3.lineTo(this._area3Width, 0);
                this.area3.lineTo(this._area3Width, this._flagHeight);
                this.area3.lineTo(0,0);
                this.area3.endFill();
                this.area3.x = this._area3X;
                break;
        }
    }

  

}