import * as PIXI from "pixi.js";
import '@pixi/graphics-extras';
import {Utils} from "../Utils";
import antiguabarbuda from "../assets/images/flagSpecials/antiguabarbuda/antiguabarbuda_emblem.png";

export class AntiguaBarbuda extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = data.width;
        this._flagHeight = data.height;

        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this._scale = parseFloat(data.scale.toString());

        // console.log(`AntiguaBarbuda flag width is ${this._flagWidth} and height is ${this._flagHeight}`);

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // red left
        this.area2Color = parseInt(this._flagData["area2"]); // red right
        this.area3Color = parseInt(this._flagData["area3"]); // black bg
        this.area4Color = parseInt(this._flagData["area4"]); // yellow star
        this.area5Color = parseInt(this._flagData["area5"]); // cyan
        this.area6Color = parseInt(this._flagData["area6"]); // white

        //wrong colors
        this.wrongColor1 = 0x0c9609;

        // this.border = new PIXI.Graphics();
        // this.border.lineStyle(2, 0x000000, 0.1);
        // this.border.beginFill(0xff0000, 0.1);
        // this.border.drawRect(0, 0, this._flagWidth, this._flagHeight);
        // this.border.endFill();
        // this.addChild(this.border);

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb)
        this.area1.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area1.name);
        });

        this.area2 = new PIXI.Graphics();
        this.area2.interactive = true;
        this.area2.name = "area2";
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
        })

        this.area4 = new PIXI.Graphics();
        this.area4.interactive = true;
        this.area4.name = "area4";
        this.addChild(this.area4);
        this.paintFlagArea(this.area4.name, this._solved ? this.area4Color : 0xbbbbbb)
        this.area4.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area4.name);
        })

        this.area5 = new PIXI.Graphics();
        this.area5.interactive = true;
        this.area5.name = "area5";
        this.addChild(this.area5);
        this.paintFlagArea(this.area5.name, this._solved ? this.area5Color : 0xbbbbbb)
        this.area5.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area5.name);
        })

        this.addChild(this.area1);
        this.addChild(this.area2);

        this.area6 = new PIXI.Sprite.from(antiguabarbuda);
        this.area6.visible = false;
        this.area6.scale.set(this._scale);
        this.addChild(this.area6);
        setTimeout(()=>{
            this.area6.x = this._flagWidth / 2 - this.area6.width / 2;
            this.area6.y = 0.3 * this._flagHeight - this.area6.height;
            this.area6.visible = true;
        }, 1000);

    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area3Color,
            this.area4Color,
            this.area5Color,
            this.area6Color,
            this.wrongColor1
        ];
    }

    paintFlagArea(name, color){
        // return;
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle(this._lineWidth, 0x000000);
                this.area1.beginFill(color);
                this.area1.moveTo(0, 0);
                this.area1.lineTo(this._flagWidth / 2, this._flagHeight);
                this.area1.lineTo(0, this._flagHeight);
                this.area1.lineTo(0,0);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle(this._lineWidth, 0x000000);
                this.area2.moveTo(this._flagWidth/2, 0);
                this.area2.beginFill(color);
                this.area2.lineTo(this._flagWidth/2, this._flagHeight);
                this.area2.lineTo(0, this._flagHeight);
                this.area2.lineTo(this._flagWidth/2,0);
                this.area2.endFill();
                this.area2.x = this._flagWidth/2;
                break;
            case this.area3.name:
                this.area3.lineStyle(this._lineWidth, 0x000000);
                this.area3.beginFill(color);
                this.area3.drawRect(0, 0, this._flagWidth, this._flagHeight * 0.30);
                this.area3.endFill();
                break;
            case this.area4.name:
                this.area4.lineStyle(this._lineWidth, 0x000000);
                this.area4.beginFill(color, 1);
                this.area4.drawRect(0, this._flagHeight * 0.30, this._flagWidth, this._flagHeight * 0.25);
                this.area4.endFill();
                break;
            case this.area5.name:
                this.area5.lineStyle(this._lineWidth, 0x000000);
                this.area5.beginFill(color);
                this.area5.drawRect(0, this._flagHeight * 0.55, this._flagWidth, this._flagHeight * 0.45);
                this.area5.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}