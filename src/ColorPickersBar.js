import * as PIXI from "pixi.js";
import _ from "lodash";
import {ColorPicker} from "./ColorPicker";

export class ColorPickersBar extends PIXI.Container {

    static get COLOR_PICKED() {return "color_picked";}

    constructor(data) {
        super();

        let width = data.width;
        let height = data.height;

        this._pickerRadius = (0.75 * height) / 2;
        this._pickersSpace = (width - (12 * this._pickerRadius)) / 7;

        this._pickerRadius_selected = (0.9 * height) / 2;

        this._colors = [];

        this._pickers = [];

        console.log("pickers data: ",data);
        console.log(`pickers flag this.width = ${data.width}`);
        console.log(`pickers flag this.height = ${data.height}`);

        let border = new PIXI.Graphics();
        border.lineStyle(2, 0xffffff, 1);
        border.beginFill(0x555555);
        border.drawRect(0, 0, width, height);
        border.endFill();
        this.addChild(border);

        let pickerX = this._pickersSpace;
        for (let i=0; i<6; i++){
            let picker = new ColorPicker({"radius" : this._pickerRadius});
            picker.x = pickerX;
            picker.y = height / 2 - this._pickerRadius;
            picker.on("pointertap", ()=>{
                console.log(`clicked on ${picker.name}`);
                this.emit(ColorPickersBar.COLOR_PICKED, picker.name);
                for(let i=0; i<this._pickers.length; i++){
                    this._pickers[i].setColor(this._colors[i], this._pickers[i].name === picker.name );
                }
            });
            this.addChild(picker);
            this._pickers.push(picker);

            pickerX+=( this._pickerRadius * 2) + this._pickersSpace;
        }
    }

    setColors(colors, selected= false, shuffle= true){
        this._colors = shuffle ? _.shuffle(colors) : colors;
        for (let i=0; i<this._pickers.length; i++){
            this._pickers[i].setColor(this._colors[i], selected);
            this._pickers[i].name = this._colors[i].toString();
        }
    }


}