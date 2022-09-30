import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import cuba_emblem from "../assets/images/flagSpecials/cuba/cuba_cu.png";

export class Cuba extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this._area6Width = 0.65 * this._flagWidth;
        this._emblemX = 0.069 * this._flagWidth;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); // blue
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]); //white
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]); //blue
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]); //white
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]); //blue
        this.area6Color = parseInt(this._flagData["correctColors"][5]["area6"]); //red

        //wrong colors
        this.wrongColor1 = 0x000000;
        this.wrongColor2 = 0x3a9f1a;
        this.wrongColor3 = 0xffff00;

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

        this.area6 = new PIXI.Graphics();
        this.area6.interactive = true;
        this.area6.name = "area6";
        this.addChild(this.area6);
        this.paintFlagArea(this.area6.name, this._solved ? this.area6Color : 0xbbbbbb)
        this.area6.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area6.name);
        });

        this.area7 = new PIXI.Sprite.from(cuba_emblem);
        this.area7.visible = false;
        this.area7.scale.set(this._scale);
        this.addChild(this.area7);
        setTimeout(()=>{
            this.area7.x = this._emblemX;
            this.area7.y = this._flagHeight / 2 - this.area7.height / 2;
            this.area7.visible = true;
        }, 1000);

    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area6Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._flagHeight * 0.20);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, 0, this._flagWidth, this._flagHeight * 0.20);
                this.area2.endFill();
                this.area2.y = this._flagHeight * 0.20;
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, 0, this._flagWidth, this._flagHeight * 0.20);
                this.area3.endFill();
                this.area3.y = 2 * this._flagHeight * 0.20;
                break;
            case this.area4.name:
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.drawRect(0, 0, this._flagWidth, this._flagHeight * 0.20);
                this.area4.endFill();
                this.area4.y = 3 * this._flagHeight * 0.20;
                break;
            case this.area5.name:
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.drawRect(0, 0, this._flagWidth, this._flagHeight * 0.20);
                this.area5.endFill();
                this.area5.y = 4 * this._flagHeight * 0.20;
                break;
            case this.area6.name:
                this.area6.lineStyle( this._lineWidth, 0x000000, 1);
                this.area6.beginFill(color);
                this.area6.moveTo(0,0);
                this.area6.lineTo(this._area6Width, this._flagHeight / 2);
                this.area6.lineTo(0, this._flagHeight);
                this.area6.closePath();
                this.area6.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}