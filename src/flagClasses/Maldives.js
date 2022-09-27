import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import maldives_emblem from "../assets/images/flagSpecials/maldives/maldives_emblem.png";

export class Maldives extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = data.width;
        this._flagHeight = data.height;
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._lineWidth = data.lineWidth;
        this._flagData = data.flagData;

        this.area2Width = 0.62 * this._flagWidth;
        this.area2Height = 0.50 * this._flagHeight;
        this.area2X = 0.188 * this._flagWidth;
        this.area2Y = 0.25 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); //red
        this.area2Color = parseInt(this._flagData["area2"]); //green

        //wrong colors
        this.wrongColor1 = 0x000000;
        this.wrongColor2 = 0x0000ff;
        this.wrongColor3 = 0xffff00;
        this.wrongColor4 = 0x00ffff;

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.addChild(this.area1);
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb)
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

        this.area3 = new PIXI.Sprite.from(maldives_emblem);
        this.area3.scale.set(this._scale);
        this.area3.visible = false;
        this.addChild(this.area3);
        setTimeout(()=>{
            this.area3.x = this._flagWidth / 2 - this.area3.width / 2;
            this.area3.y = this._flagHeight / 2 - this.area3.height / 2;
            this.area3.visible = true;
        }, 1000);
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

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(this.area2X, this.area2Y, this.area2Width, this.area2Height);
                this.area2.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }

}