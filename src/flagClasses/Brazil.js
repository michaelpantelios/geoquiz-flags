import * as PIXI from "pixi.js";
import {Utils} from "../Utils";
import brazil_emblem from "../assets/images/flagSpecials/brazil/brazil_emblem.png";

export class Brazil extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );

        this._area2Width = 0.95 * this._flagWidth;
        this._area2Height = 0.82 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); // blue
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]); //yellow

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

        this.area3 = new PIXI.Sprite.from(brazil_emblem);
        this.area3.visible = false;
        this.area3.scale.set(this._scale);
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
            this.area2Color
        ].concat(this.wrongColors);
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
                this.area2.moveTo(this._area2Width / 2, 0);
                this.area2.lineTo(this._area2Width, this._area2Height / 2);
                this.area2.lineTo(this._area2Width / 2, this._area2Height);
                this.area2.lineTo(0,this._area2Height / 2);
                this.area2.closePath();
                this.area2.endFill();
                this.area2.x = this._flagWidth / 2 - this.area2.width / 2;
                this.area2.y = this._flagHeight / 2 - this.area2.height / 2;
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}