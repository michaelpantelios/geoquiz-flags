import * as PIXI from "pixi.js"
import {FlagBaseClass} from "../FlagBaseClass";
import {Utils} from "../Utils";

export class Iceland extends FlagBaseClass {
    constructor(data){
        super(data);

     

        //correct colors
        this.area1Color = parseInt(this._flagData["correctColors"][0]["area1"]); 
        this.area2Color = parseInt(this._flagData["correctColors"][1]["area2"]);
        this.area3Color = parseInt(this._flagData["correctColors"][2]["area3"]);
        this.area4Color = parseInt(this._flagData["correctColors"][3]["area4"]);
        this.area5Color = parseInt(this._flagData["correctColors"][4]["area5"]);
        this.area6Color = parseInt(this._flagData["correctColors"][5]["area6"]);

        this.area1Width = 0.28 * this._flagWidth;
        this.area1Height = 0.387 * this._flagHeight;
        this.area2Width = 0.56 * this._flagWidth;
        this.area5Width = 0.158 * this._flagWidth;
        this.area5Height = 0.224 * this._flagHeight;
        this.area6Width = 0.08 * this._flagWidth;
        this.area6Height = 0.114 * this._flagHeight;
        this.area6X = 0.318 * this._flagWidth;
        this.area6Y = 0.44 * this._flagHeight;

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

        this.area5 = new PIXI.Graphics();
        this.area5.name = "area5";
        this.addChild(this.area5);
        this.paintFlagArea(this.area5.name, this.area5Color)

        this.area6 = new PIXI.Graphics();
        this.area6.interactive = true;
        this.area6.name = "area6";
        this.addChild(this.area6);
        this.paintFlagArea(this.area6.name, this._solved ? this.area6Color : 0xbbbbbb)
        this.area6.on("pointertap", () =>{
            this.emit(Utils.FLAG_AREA_PICKED, this.area6.name);
        });
    }

    getColorsForPickers(){
        return [
            this.area1Color,
            this.area6Color
        ].concat(this.wrongColors);
    }

    paintFlagArea(name, color) {

        switch (name) {
            case this.area1.name:
                this.area1.clear();
                this.area1.lineStyle(this._lineWidth, 0x000000, 1);
                this.area1.beginFill(color);
                this.area1.drawRect(0, 0, this.area1Width, this.area1Height);
                this.area1.endFill();
                break;
            case this.area2.name:
                this.area2.clear();
                this.area2.lineStyle(this._lineWidth, 0x000000, 1);
                this.area2.beginFill(color);
                this.area2.drawRect(0, 0, this.area2Width, this.area1Height);
                this.area2.endFill();
                this.area2.x = this.area1Width + this.area5Width;
                break;
            case this.area3.name:
                this.area3.clear();
                this.area3.lineStyle(this._lineWidth, 0x000000, 1);
                this.area3.beginFill(color);
                this.area3.drawRect(0, 0, this.area1Width, this.area1Height);
                this.area3.endFill();
                this.area3.y = this.area1Height + this.area5Height;
                break;
            case this.area4.name:
                this.area4.clear();
                this.area4.lineStyle(this._lineWidth, 0x000000, 1);
                this.area4.beginFill(color);
                this.area4.drawRect(0, 0, this.area2Width, this.area1Height);
                this.area4.endFill();
                this.area4.x = this.area1Width + this.area5Width;
                this.area4.y = this.area1Height + this.area5Height;
                break;
            case this.area5.name:
                this.area5.clear();
                this.area5.lineStyle(this._lineWidth, 0x000000, 1);
                this.area5.beginFill(color);
                this.area5.moveTo(this.area1Width, 0);
                this.area5.lineTo(this.area1Width + this.area5Width, 0);//->
                this.area5.lineTo(this.area1Width + this.area5Width, this.area1Height) // V
                this.area5.lineTo(this._flagWidth, this.area1Height);//->
                this.area5.lineTo(this._flagWidth, this.area1Height + this.area5Height);// V
                this.area5.lineTo(this.area1Width + this.area5Width, this.area1Height + this.area5Height)//<-
                this.area5.lineTo(this.area1Width + this.area5Width, this._flagHeight);//V
                this.area5.lineTo(this.area1Width, this._flagHeight); // <-
                this.area5.lineTo(this.area1Width, this.area1Height + this.area5Height); // ^
                this.area5.lineTo(0, this.area1Height + this.area5Height); // <-
                this.area5.lineTo(0, this.area1Height);//^
                this.area5.lineTo(this.area1Width, this.area1Height); // ->
                this.area5.lineTo(this.area1Width, 0);
                this.area5.endFill();
                break;
            case this.area6.name:
                this.area6.clear();
                this.area6.lineStyle(this._lineWidth, 0x000000, 1);
                this.area6.beginFill(color);
                this.area6.moveTo(this.area6X, 0);
                this.area6.lineTo(this.area6X+this.area6Width, 0);//->
                this.area6.lineTo(this.area6X+this.area6Width, this.area6Y) // V
                this.area6.lineTo(this._flagWidth, this.area6Y);//->
                this.area6.lineTo(this._flagWidth, this.area6Y + this.area6Height);// V
                this.area6.lineTo(this.area6X+this.area6Width, this.area6Y + this.area6Height)//<-
                this.area6.lineTo(this.area6X+this.area6Width, this._flagHeight);//V
                this.area6.lineTo(this.area6X, this._flagHeight); // <-
                this.area6.lineTo(this.area6X, this.area6Y + this.area6Height); // ^
                this.area6.lineTo(0, this.area6Y + this.area6Height); // <-
                this.area6.lineTo(0, this.area6Y);//^
                this.area6.lineTo(this.area6X, this.area6Y); // ->
                this.area6.lineTo(this.area6X, 0);
                this.area6.endFill();
        }
    }

  
}