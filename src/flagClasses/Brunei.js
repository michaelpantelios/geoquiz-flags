import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import brunei_emblem from "../assets/images/flagSpecials/brunei/brunei_emblem.png";

export class Brunei extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;

        this._area1_0_y = 0.04 * this._flagHeight;
        this._area1_1_y = 0.49 * this._flagHeight;
        this._area1_2_y = 0.74 * this._flagHeight;
        this._area1_3_y = 0.3 * this._flagHeight;
        this._area2_0_y = this._area1_3_y;
        this._area2_1_y = this._area1_2_y;
        this._area2_2_y = 0.96 * this._flagHeight;
        this._area2_3_y = 0.52 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // yellow
        this.area2Color = parseInt(this._flagData["area2"]); // yellow
        this.area3Color = parseInt(this._flagData["area3"]); // white
        this.area4Color = parseInt(this._flagData["area4"]); // black

        //wrong colors
        this.wrongColor1 = 0xff0000;
        this.wrongColor2 = 0x228f19;
        this.wrongColor3 = 0x0000ff;

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

        this.area5 = new PIXI.Sprite.from(brunei_emblem);
        this.area5.scale.set(this._scale);
        this.area5.visible = false;
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
            this.area3Color,
            this.area4Color,
            this.wrongColor1,
            this.wrongColor2,
            this.wrongColor3
        ];
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(0, 0);
                this.area1.lineTo(this._flagWidth, 0);
                this.area1.lineTo(this._flagWidth, this._area1_1_y);
                this.area1.lineTo(0, this._area1_0_y);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(0, this._area2_3_y);
                this.area2.lineTo(this._flagWidth, this._area2_2_y);
                this.area2.lineTo(this._flagWidth, this._flagHeight);
                this.area2.lineTo(0, this._flagHeight);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(0, this._area1_0_y);
                this.area2.lineTo(this._flagWidth, this._area1_1_y);
                this.area2.lineTo(this._flagWidth, this._area1_2_y);
                this.area2.lineTo(0,this._area1_3_y);
                this.area2.closePath();
                this.area2.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(0, this._area2_0_y);
                this.area4.lineTo(this._flagWidth, this._area2_1_y);
                this.area4.lineTo(this._flagWidth, this._area2_2_y);
                this.area4.lineTo(0,this._area2_3_y);
                this.area4.closePath();
                this.area4.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }

}