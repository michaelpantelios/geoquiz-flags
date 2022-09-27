import * as PIXI from "pixi.js"
import {Utils} from "../Utils";
import malta_emblem from "../assets/images/flagSpecials/malta/malta_emblem.png";

export class Malta extends PIXI.Container {
    constructor(data) {
        super();

        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;

        this.emblemX = 0.03 * this._flagWidth;
        this.emblemY = 0.05 * this._flagHeight;

        //correct colors
        this.area1Color = parseInt(this._flagData["area1"]); // red
        this.area2Color = parseInt(this._flagData["area2"]); //green

        //wrong colors
        this.wrongColor1 = 0x12843e;
        this.wrongColor2 = 0xffffff;
        this.wrongColor3 = 0x8f1e97;
        this.wrongColor4 = 0x8f1e97;

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

        this.area3 = new PIXI.Sprite.from(malta_emblem);
        this.area3.visible = false;
        this.area3.scale.set(this._scale);
        this.addChild(this.area3);
        setTimeout(()=>{
            this.area3.x = this.emblemX;
            this.area3.y = this.emblemY;
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
                this.area1.drawRect(0, 0, 0.5 * this._flagWidth, this._flagHeight);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.lineStyle( this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(this._flagWidth / 2, 0, this._flagWidth / 2, this._flagHeight);
                this.area2.endFill();
                break;
        }
    }

    getFlagCountryName(){
        return this._flagData["country"];
    }
}