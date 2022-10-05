import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";
import zimbabwe_emblem from "../assets/images/flagSpecials/zimbabwe/zimbabwe_emblem.png";

export class Zimbabwe extends FlagBaseClass {
    constructor(data){
        super(data);

        this.stripeHeight = 0.1426 * this._flagHeight;
        this.area8_1_x = 0.02 * this._flagWidth;
        this.area8Width = 0.5358 * this._flagWidth;
        this.area9Width = 0.51 * this._flagWidth;

        this.emblemX = 0.05 * this._flagWidth;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); 
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]); 
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]); 
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]);
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]);
        this.area6Color = parseInt(this._flagData["correctColors"][5]["area6"]);
        this.area7Color = parseInt(this._flagData["correctColors"][6]["area7"]);
        this.area8Color = parseInt(this._flagData["correctColors"][7]["area8"]);
        this.area9Color = parseInt(this._flagData["correctColors"][8]["area9"]);

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb)
        this.area1.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area1.name);
        });
        this.addChild(this.area1);

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

        this.area6 = new PIXI.Graphics();
        this.area6.interactive = true;
        this.area6.name = "area6";
        this.addChild(this.area6);
        this.paintFlagArea(this.area6.name, this._solved ? this.area6Color : 0xbbbbbb)
        this.area6.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area6.name);
        });

        this.area7 = new PIXI.Graphics();
        this.area7.interactive = true;
        this.area7.name = "area7";
        this.addChild(this.area7);
        this.paintFlagArea(this.area7.name, this._solved ? this.area7Color : 0xbbbbbb)
        this.area7.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area7.name);
        });

        this.area8 = new PIXI.Graphics();
        this.area8.name = "area8";
        this.addChild(this.area8);
        this.paintFlagArea(this.area8.name,  this.area8Color );

        this.area9 = new PIXI.Graphics();
        this.area9.interactive = true;
        this.area9.name = "area9";
        this.addChild(this.area9);
        this.paintFlagArea(this.area9.name, this._solved ? this.area9Color : 0xbbbbbb)
        this.area9.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area9.name);
        });

        this.area10 = new PIXI.Sprite.from(zimbabwe_emblem);
        this.area10.scale.set(this._scale);
        this.area10.visible = false;
        this.addChild(this.area10);
        setTimeout(()=>{
            this.area10.x = this.emblemX;
            this.area10.y = this._flagHeight / 2 - this.area10.height / 2;
            this.area10.visible = true;
        }, 1000);
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area3Color,
            this.area4Color,
            this.area9Color,
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color) {
        super.paintFlagArea(name, color);
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this.stripeHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, this.stripeHeight, this._flagWidth, this.stripeHeight);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, 2 * this.stripeHeight, this._flagWidth, this.stripeHeight);
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.drawRect(0, 3 * this.stripeHeight, this._flagWidth, this.stripeHeight);
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.clear();
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.drawRect(0, 4 * this.stripeHeight, this._flagWidth, this.stripeHeight);
                this.area5.endFill();
                break;
            case this.area6.name:
                this.area6.clear();
                this.area6.lineStyle( this._lineWidth, 0x000000, 1);
                this.area6.beginFill(color);
                this.area6.drawRect(0, 5 * this.stripeHeight, this._flagWidth, this.stripeHeight);
                this.area6.endFill();
                break;
            case this.area7.name:
                this.area7.clear();
                this.area7.lineStyle( this._lineWidth, 0x000000, 1);
                this.area7.beginFill(color);
                this.area7.drawRect(0, 6 * this.stripeHeight, this._flagWidth, this.stripeHeight);
                this.area7.endFill();
                break;
            case this.area8.name:
                this.area8.clear();
                this.area8.lineStyle( this._lineWidth, 0x000000, 1);
                this.area8.beginFill(color);
                this.area8.moveTo(0,0);
                this.area8.lineTo(this.area8_1_x, 0);
                this.area8.lineTo(this.area8Width, this._flagHeight / 2);
                this.area8.lineTo(this.area8_1_x, this._flagHeight);
                this.area8.lineTo(0, this._flagHeight);
                this.area8.closePath();
                this.area8.endFill();
                break;
            case this.area9.name:
                this.area9.clear();
                this.area9.lineStyle( this._lineWidth, 0x000000, 1);
                this.area9.beginFill(color);
                this.area9.moveTo(0,0);
                this.area9.lineTo(this.area9Width, this._flagHeight / 2);
                this.area9.lineTo(0, this._flagHeight);
                this.area9.closePath();
                this.area9.endFill();
                break;
        }
    }

  
}