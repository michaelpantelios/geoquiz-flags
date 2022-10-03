import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import iran_emblem from "../assets/images/flagSpecials/iran/iran_emblem.png";
import ribbon from "../assets/images/flagSpecials/iran/ribbon.png";

export class Iran extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._areaHeight = this._flagHeight * 0.333;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this._area1Height = 0.27 * this._flagHeight;
        this._area2Height = 0.45 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]);
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);

        //wrong colors
        this.wrongColor1 = 0x0000ff;
        this.wrongColor2 = 0xffff00;
        this.wrongColor3 = 0x000000;

        this.area1 = new PIXI.Graphics();
        this.area1.interactive = true;
        this.area1.name = "area1";
        this.addChild(this.area1);
        this.area1.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area1.name);
        })

        this.area2 = new PIXI.Graphics();
        this.area2.interactive = true;
        this.area2.name = "area2";
        this.addChild(this.area2);
        this.area2.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area2.name);
        });

        this.area3 = new PIXI.Graphics();
        this.area3.interactive = true;
        this.area3.name = "area3";
        this.addChild(this.area3);
        this.area3.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area3.name);
        });

        this.area4 = new PIXI.Sprite.from(iran_emblem);
        this.area4.scale.set(this._scale);
        this.area4.visible = false;
        this.addChild(this.area4);
        setTimeout(()=>{
            this.area4.x = this._flagWidth / 2 - this.area4.width / 2;
            this.area4.y = this._flagHeight / 2 - this.area4.height / 2;
            this.area4.visible = true;
        }, 1000);

        this.ribbonLower = new PIXI.Sprite.from(ribbon);
        this.ribbonLower.scale.set(this._scale);
        // this.ribbonLower.tint = this._solved ? this.area3Color : 0x888888;
        this.ribbonLower.visible = false;
        this.addChild(this.ribbonLower);
        setTimeout( () => {
            this.ribbonLower.y = this._area1Height + this._area2Height - this.ribbonLower.height;
            this.ribbonLower.visible = true;
        }, 1000);

        this.ribbonUpper = new PIXI.Sprite.from(ribbon);
        this.ribbonUpper.scale.set(this._scale, this._scale * (-1));
        // this.ribbonUpper.tint = this._solved ? this.area1Color : 0x888888;
        this.ribbonUpper.visible = false;
        this.addChild(this.ribbonUpper);
        setTimeout( () => {
            this.ribbonUpper.y = this._area1Height + this.ribbonUpper.height - 2;
            this.ribbonUpper.visible = true;
        }, 1000);

        this.border = new PIXI.Graphics();
        this.border.lineStyle( this._lineWidth, 0x000000, 1);
        this.border.drawRect(0,0, this._flagWidth, this._flagHeight);
        this.border.lineStyle( this._lineWidth, 0x888888, 1);
        // this.border.drawRect(0, 0, this._lineWidth, this._area1Height);
        // this.border.drawRect(0, this._area1Height, this._flagWidth, this._area2Height);
        // this.border.drawRect(0, this._area1Height + this._area2Height, this._flagWidth, this._area1Height);
        this.area1.endFill();
        this.addChild(this.border);

        this.paintFlagArea(this.area1.name, this._solved ? this.area1Color : 0xbbbbbb, this._solved);
        this.paintFlagArea(this.area2.name, this._solved ? this.area2Color : 0xbbbbbb);
        this.paintFlagArea(this.area3.name, this._solved ? this.area3Color : 0xbbbbbb, this._solved);
    }

    paintFlagArea(name, color, byUser = true){
        console.log(`paint area ${name} with color: ${color}`);
        switch(name){
            case this.area1.name:
                this.area1.lineStyle( this._lineWidth, color, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this._flagWidth, this._area1Height);
                this.area1.endFill();
                this.ribbonUpper.tint = byUser ? color : 0x888888;
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, color, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, this._area1Height, this._flagWidth, this._area2Height);
                this.area2.endFill();
                break;
            case this.area3.name:
                this.area3.lineStyle(this._lineWidth, color, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, this._area1Height + this._area2Height, this._flagWidth, this._area1Height);
                this.area3.endFill();
                this.ribbonLower.tint =  byUser ? color : 0x888888;
                break;
        }
    }


    getColorsForPickers(){
        return [
            this.area1Color,
            this.area2Color,
            this.area3Color
        ].concat(this.wrongColors);
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }

}