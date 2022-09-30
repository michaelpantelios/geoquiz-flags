import * as PIXI from "pixi.js"
import {Utils} from "../Utils";
import centralafricanrepublic_emblem from "../assets/images/flagSpecials/centralafricanrepublic/centralafricanrepublic_emblem.png";

export class CentralAfricanRepublic extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;

        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this._horizHeight = this._flagHeight * 0.25;
        this._verticalWidth = this._flagWidth * 0.19;
        this._verticalX = this._flagWidth / 2 - this._verticalWidth / 2;
        this._emblemPos = new PIXI.Point(0.07 * this._flagWidth, 0.023 * this._flagHeight);

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); // blue
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]); // white
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]); // green
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]); // yellow
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]); // blue
        this.area6Color = parseInt(this._flagData["correctColors"][5]["area6"]); // white
        this.area7Color = parseInt(this._flagData["correctColors"][6]["area7"]); // green
        this.area8Color = parseInt(this._flagData["correctColors"][7]["area8"]); // yellow
        this.area9Color = parseInt(this._flagData["correctColors"][8]["area9"]); // red

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

        this.area5 = new PIXI.Graphics();
        this.area5.interactive = true;
        this.area5.name = "area5";
        this.addChild(this.area5);
        this.paintFlagArea(this.area5.name, this._solved ? this.area5Color : 0xbbbbbb)
        this.area5.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area5.name);
        })

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
        this.area8.interactive = true;
        this.area8.name = "area8";
        this.addChild(this.area8);
        this.paintFlagArea(this.area8.name, this._solved ? this.area8Color : 0xbbbbbb)
        this.area8.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area8.name);
        });

        this.area9 = new PIXI.Graphics();
        this.area9.interactive = true;
        this.area9.name = "area9";
        this.addChild(this.area9);
        this.paintFlagArea(this.area9.name, this._solved ? this.area9Color : 0xbbbbbb)
        this.area9.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area9.name);
        });

        this.area10 = new PIXI.Sprite.from(centralafricanrepublic_emblem);
        this.area10.visible = false;
        this.area10.scale.set(this._scale);
        this.addChild(this.area10);
        setTimeout(()=>{
            this.area10.x = this._emblemPos.x;
            this.area10.y = this._emblemPos.y;
            this.area10.visible = true;
        }, 1000);

    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area3Color,
            this.area4Color,
            this.area9Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        switch (name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.moveTo(0, 0);
                this.area1.lineTo(this._verticalX, 0);
                this.area1.lineTo(this._verticalX, this._horizHeight);
                this.area1.lineTo(0, this._horizHeight);
                this.area1.closePath();
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.moveTo(0, 0);
                this.area2.lineTo(this._verticalX, 0);
                this.area2.lineTo(this._verticalX, this._horizHeight);
                this.area2.lineTo(0, this._horizHeight);
                this.area2.closePath();
                this.area2.endFill();
                this.area2.y = this._horizHeight;
                break;
            case this.area3.name:
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.moveTo(0, 0);
                this.area3.lineTo(this._verticalX, 0);
                this.area3.lineTo(this._verticalX, this._horizHeight);
                this.area3.lineTo(0, this._horizHeight);
                this.area3.closePath();
                this.area3.endFill();
                this.area3.y = 2 * this._horizHeight;
                break;
            case this.area4.name:
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.moveTo(0, 0);
                this.area4.lineTo(this._verticalX, 0);
                this.area4.lineTo(this._verticalX, this._horizHeight);
                this.area4.lineTo(0, this._horizHeight);
                this.area4.closePath();
                this.area4.endFill();
                this.area4.y = 3 * this._horizHeight;
                break;
            case this.area5.name:
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(0, 0);
                this.area5.lineTo(this._verticalX, 0);
                this.area5.lineTo(this._verticalX, this._horizHeight);
                this.area5.lineTo(0, this._horizHeight);
                this.area5.closePath();
                this.area5.endFill();
                this.area5.x = this._flagWidth / 2 + this._verticalWidth / 2;
                break;
            case this.area6.name:
                this.area6.lineStyle( this._lineWidth, 0x000000, 1);
                this.area6.beginFill(color);
                this.area6.moveTo(0, 0);
                this.area6.lineTo(this._verticalX, 0);
                this.area6.lineTo(this._verticalX, this._horizHeight);
                this.area6.lineTo(0, this._horizHeight);
                this.area6.closePath();
                this.area6.endFill();
                this.area6.y = this._horizHeight;
                this.area6.x = this._flagWidth / 2 + this._verticalWidth / 2;
                break;
            case this.area7.name:
                this.area7.lineStyle( this._lineWidth, 0x000000, 1);
                this.area7.beginFill(color);
                this.area7.moveTo(0, 0);
                this.area7.lineTo(this._verticalX, 0);
                this.area7.lineTo(this._verticalX, this._horizHeight);
                this.area7.lineTo(0, this._horizHeight);
                this.area7.closePath();
                this.area7.endFill();
                this.area7.y = 2 * this._horizHeight;
                this.area7.x = this._flagWidth / 2 + this._verticalWidth / 2;
                break;
            case this.area8.name:
                this.area8.lineStyle( this._lineWidth, 0x000000, 1);
                this.area8.beginFill(color);
                this.area8.moveTo(0, 0);
                this.area8.lineTo(this._verticalX, 0);
                this.area8.lineTo(this._verticalX, this._horizHeight);
                this.area8.lineTo(0, this._horizHeight);
                this.area8.closePath();
                this.area8.endFill();
                this.area8.y = 3 * this._horizHeight;
                this.area8.x = this._flagWidth / 2 + this._verticalWidth / 2;
                break;
            case this.area9.name:
                this.area9.lineStyle( this._lineWidth, 0x000000, 1);
                this.area9.beginFill(color);
                this.area9.moveTo(0, 0);
                this.area9.lineTo(this._verticalWidth, 0);
                this.area9.lineTo(this._verticalWidth, this._flagHeight);
                this.area9.lineTo(0, this._flagHeight);
                this.area9.closePath();
                this.area9.endFill();
                this.area9.x = this._verticalX;
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}