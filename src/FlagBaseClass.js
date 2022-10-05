import * as PIXI from "pixi.js";

export class FlagBaseClass extends PIXI.Container {
    constructor(data) {
        super();
        this._flagWidth = parseInt(data.width.toString());
        this._flagHeight = parseInt(data.height.toString());
        this._scale = parseFloat(data.scale.toString());
        this._solved = data.solved;
        this._flagData = data.flagData;
        this._lineWidth = data.lineWidth;
        this.wrongColors = this._flagData.wrongColors.map( item => { return parseInt(item); } );
        this._userSolution = {};//data.flagData["correctColors"];
        this._flagData["correctColors"].forEach((item) => {
            // console.log("item: ", item);
            let areas = Object.keys(item);
            areas.forEach((key) => {
                this._userSolution[key]= "0xbbbbbb";
            })
        })

        // console.log("userSolution:",this._userSolution);
    }

    getColorsForPickers(){ return []; };
    paintFlagArea(name, color){
        this._userSolution[name] = color.toString();
    };
    getFlagCountryName(){  return this._flagData["country"]; };
    getUserSolution(){ return this._userSolution;};
}