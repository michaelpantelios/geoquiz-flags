import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import papuanewguinea_emblem from "../assets/images/flagSpecials/papuanewguinea/papuanewguinea_emblem.png";

export class PapuaNewGuinea extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // green
        this.area2Color = parseInt(this._flagData["area2"]); //white

        //wrong colors
        this.wrongColor1 = 0x0000ff;
        this.wrongColor2 = 0x00ffff;
        this.wrongColor3 = 0xff00ff;
        this.wrongColor4 = 0xffffff;

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

        this.area3 = new PIXI.Sprite.from(papuanewguinea_emblem);
        this.area3.scale.set(this._scale);
        this.area3.visible = false;
        this.addChild(this.area3);
        setTimeout(()=>{
            this.area3.x = this._flagWidth / 2 - this.area3.width / 2;
            this.area3.y = this._flagHeight / 2 - this.area3.height / 2;
            this.area3.visible = true;
        }, 1000);
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(0,0);
                this.area1.lineTo(this._flagWidth, 0);
                this.area1.lineTo(this._flagWidth, this._flagHeight);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(0,0);
                this.area2.lineTo(this._flagWidth, this._flagHeight);
                this.area2.lineTo(0, this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
        }
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

    getFlagCountryName(){
        return this._flagData["country"];
    }

}