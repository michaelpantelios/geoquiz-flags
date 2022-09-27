import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import panama_emblem from "../assets/images/flagSpecials/panama/panama_emblem.png";

export class Panama extends PIXI.Container {
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
        this.area3Color = parseInt(this._flagData["area3"]); //red
        this.area4Color = parseInt(this._flagData["area4"]); //red

        //wrong colors
        this.wrongColor1 = 0xffff00;
        this.wrongColor2 = 0x16a316;
        this.wrongColor3 = 0x000000;

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
        this.paintFlagArea(this.area4.name,this._solved ? this.area4Color : 0xbbbbbb);
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        });

        this.area5 = new PIXI.Sprite.from(panama_emblem);
        this.area5.scale.set(this._scale);
        this.area5.visible = false;
        this.addChild(this.area5);
        setTimeout(()=>{
            this.area5.x = this._flagWidth / 2 - this.area5.width / 2;
            this.area5.y = this._flagHeight / 2 - this.area5.height / 2;
            this.area5.visible = true;
        }, 1000);
    }

    paintFlagArea(name, color){
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth / 2, this._flagHeight / 2);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(this._flagWidth / 2, 0, this._flagWidth / 2, this._flagHeight / 2);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, this._flagHeight / 2, this._flagWidth / 2, this._flagHeight / 2);
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle(this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.drawRect(this._flagWidth / 2, this._flagHeight / 2, this._flagWidth / 2, this._flagHeight / 2);
                this.area4.endFill();
                break;
        }
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area3Color,
            this.wrongColor1,
            this.wrongColor2,
            this.wrongColor3
        ];
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}