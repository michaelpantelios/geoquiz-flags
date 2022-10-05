import * as PIXI from "pixi.js";
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";
import grenada_emblem from "../assets/images/flagSpecials/grenada/grenada_emblem.png";

export class Grenada extends FlagBaseClass {
    constructor(data) {
        super(data);

        this._flagWidth = data.width;
        this._flagHeight = data.height;
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._lineWidth = data.lineWidth;
        this._flagData = data.flagData;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]);
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]);

        this.inner1 = new PIXI.Point(0.105 * this._flagWidth,  0.14 * this._flagHeight );
        this.inner2 = new PIXI.Point(0.897 * this._flagWidth, 0.14 * this._flagHeight );
        this.inner3 = new PIXI.Point(0.897 * this._flagWidth, 0.86 * this._flagHeight );
        this.inner4 = new PIXI.Point(0.105 * this._flagWidth, 0.86 * this._flagHeight);
        this.inner5 = new PIXI.Point(0.5 * this._flagWidth, 0.5 * this._flagHeight);

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

        this.area6 = new PIXI.Sprite.from(grenada_emblem);
        this.area6.scale.set(this._scale);
        this.area6.visible = false;
        this.addChild(this.area6);
        setTimeout(()=>{
            this.area6.x = 0.16 * this._flagWidth;
            this.area6.y = this._flagHeight / 2 - this.area6.height / 2;
            this.area6.visible = true;
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
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(this.inner1.x, this.inner1.y);
                this.area2.lineTo(this.inner2.x, this.inner2.y);
                this.area2.lineTo(this.inner5.x, this.inner5.y);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.inner2.x, this.inner2.y);
                this.area3.lineTo(this.inner3.x, this.inner3.y);
                this.area3.lineTo(this.inner5.x, this.inner5.y);
                this.area3.closePath();
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle(this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(this.inner3.x, this.inner3.y);
                this.area4.lineTo(this.inner4.x, this.inner4.y);
                this.area4.lineTo(this.inner5.x, this.inner5.y);
                this.area4.closePath();
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.clear();
                this.area5.lineStyle(this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(this.inner4.x, this.inner4.y);
                this.area5.lineTo(this.inner1.x, this.inner1.y);
                this.area5.lineTo(this.inner5.x, this.inner5.y);
                this.area5.closePath();
                this.area5.endFill();
                break;
        }
    }

  
}
