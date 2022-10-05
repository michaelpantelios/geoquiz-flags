import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";
import samoa_amblem from "../assets/images/flagSpecials/samoa/samoa_emblem.png";

export class Samoa extends FlagBaseClass {
    constructor(data) {
        super(data);

      

        this.area2Width = 0.5 * this._flagWidth;
        this.area2Height = 0.5 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);

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

        this.area3 = new PIXI.Sprite.from(samoa_amblem);
        this.area3.scale.set(this._scale);
        this.area3.visible = false;
        this.addChild(this.area3);
        setTimeout(()=>{
            this.area3.x = this.area2Width / 2 - this.area3.width / 2;
            this.area3.y = this.area2Height / 2 - this.area3.height / 2;
            this.area3.visible = true;
        }, 1000);

    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color
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
                this.area2.drawRect(0, 0, this.area2Width, this.area2Height);
                this.area2.endFill();
                break;
        }
    }

  
}