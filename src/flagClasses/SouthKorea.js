import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import southkorea_emblem from "../assets/images/flagSpecials/southkorea/southkorea_emblem.png";

export class SouthKorea extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());

        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.circleRadius = 0.269 * this._flagHeight;

        this.area3_1 = new PIXI.Point(0.335 * this._flagWidth, 0.3735 * this._flagHeight );
        this.area3_ctx1 = new PIXI.Point(0.32 * this._flagWidth, 0.58 * this._flagHeight);
        this.area3_ctx2 = new PIXI.Point(0.47 * this._flagWidth, 0.59 * this._flagHeight);
        this.area3_2 = new PIXI.Point(0.5 * this._flagWidth, 0.5 * this._flagHeight);
        this.area3_ctx3 = new PIXI.Point(0.53 * this._flagWidth,0.39 * this._flagHeight);
        this.area3_ctx4 = new PIXI.Point(0.68 * this._flagWidth,0.41 * this._flagHeight);
        this.area3_3 = new PIXI.Point(0.669 * this._flagWidth, 0.6241 * this._flagHeight);
        this.area3_4 = new PIXI.Point(0.6695 * this._flagWidth, 0.7739 * this._flagHeight);
        this.area3_5 = new PIXI.Point(0.3123 * this._flagWidth, 0.7739 * this._flagHeight);
        this.area3_6 = new PIXI.Point(0.3123 * this._flagWidth, 0.3735 * this._flagHeight)
        // this.area3_ctx3 = new PIXI.Point(0.4 * this._flagWidth, 0.97 * this._flagHeight);

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // green
        this.area2Color = parseInt(this._flagData["area2"]); //white
        this.area3Color = parseInt(this._flagData["area3"]); //red

        //wrong colors
        this.wrongColor1 = 0xffff00;
        this.wrongColor2 = 0x00ffff;
        this.wrongColor3 = 0x00ff00;

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

        this.area3Mask = new PIXI.Graphics();
        this.area3Mask.beginFill(0xff00000);
        this.area3Mask.drawCircle(this._flagWidth / 2, this._flagHeight / 2, this.circleRadius-2);
        this.area3Mask.endFill();
        this.addChild(this.area3Mask);

        this.area3.mask = this.area3Mask;

        this.area4 = new PIXI.Sprite.from(southkorea_emblem);
        this.area4.scale.set(this._scale);
        this.area4.visible = false;
        this.addChild(this.area4);
        setTimeout(()=>{
            this.area4.x = this._flagWidth / 2 - this.area4.width / 2;
            this.area4.y = this._flagHeight / 2 - this.area4.height / 2;
            this.area4.visible = true;
        }, 1000);

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
                this.area2.drawCircle(this._flagWidth / 2, this._flagHeight / 2,this.circleRadius);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(this.area3_1.x, this.area3_1.y);
                this.area3.bezierCurveTo(this.area3_ctx1.x, this.area3_ctx1.y, this.area3_ctx2.x, this.area3_ctx2.y, this.area3_2.x, this.area3_2.y);
                // this.area3.quadraticCurveTo(this.area3_ctx1.x, this.area3_ctx1.y, this.area3_2.x, this.area3_2.y);
                // this.area3.lineTo(this.area3_3.x, this.area3_3.y);
                this.area3.bezierCurveTo(this.area3_ctx3.x, this.area3_ctx3.y, this.area3_ctx4.x, this.area3_ctx4.y,  this.area3_3.x, this.area3_3.y);
                // this.area3.quadraticCurveTo(this.area3_ctx2.x, this.area3_ctx2.y, this.area3_3.x, this.area3_3.y);
                this.area3.lineTo(this.area3_4.x, this.area3_4.y);
                this.area3.lineTo(this.area3_5.x, this.area3_5.y);
                this.area3.lineTo(this.area3_6.x, this.area3_6.y);
                this.area3.closePath();

                this.area3.endFill();
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