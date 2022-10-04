import * as PIXI from "pixi.js";
import {Utils} from "../Utils";

export class Finland extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this.area1Width = 0.2433 * this._flagWidth;
        this.area1Height = 0.363 * this._flagHeight;
        this.area2Width = 0.565 * this._flagWidth;
        this.area5Width = 0.19 * this._flagWidth;
        this.area5Height = 0.27 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); 
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]); 
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]); 
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]); 
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]);

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
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area5Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color){
        // console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle( this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this.area1Width, this.area1Height);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, 0, this.area2Width, this.area1Height);
                this.area2.endFill();
                this.area2.x = this.area1Width + this.area5Width;
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle( this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, 0, this.area1Width, this.area1Height);
                this.area3.endFill();
                this.area3.y = this.area1Height + this.area5Height;
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle( this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.drawRect(0, 0, this.area2Width, this.area1Height);
                this.area4.endFill();
                this.area4.x = this.area1Width + this.area5Width;
                this.area4.y = this.area1Height + this.area5Height;
                break;
            case this.area5.name:
                this.area5.clear();
                this.area5.lineStyle( this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(this.area1Width, 0);
                this.area5.lineTo(this.area1Width + this.area5Width, 0);
                this.area5.lineTo(this.area1Width + this.area5Width, this.area1Height);
                this.area5.lineTo(this._flagWidth, this.area1Height);
                this.area5.lineTo(this._flagWidth, this.area1Height + this.area5Height);
                this.area5.lineTo(this.area1Width + this.area5Width, this.area1Height + this.area5Height);
                this.area5.lineTo(this.area1Width + this.area5Width, 2 * this.area1Height + this.area5Height);
                this.area5.lineTo(this.area1Width, 2 * this.area1Height + this.area5Height);
                this.area5.lineTo(this.area1Width, this.area1Height + this.area5Height);
                this.area5.lineTo(0, this.area1Height + this.area5Height);
                this.area5.lineTo(0, this.area1Height);
                this.area5.lineTo(this.area1Width, this.area1Height);
                this.area5.closePath();
                this.area5.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}