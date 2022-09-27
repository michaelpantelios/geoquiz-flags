import * as PIXI from "pixi.js";

export class Pager extends PIXI.Container {
    static get NEXT_PAGE() {return "next_page";}
    static get PREVIOUS_PAGE() {return "previous_page";}

    constructor(data) {
        super();

        this._myWidth = data.width;
        this._myHeight = data.height;

        let border = new PIXI.Graphics();
        border.lineStyle(2, 0xffaaaa, 1);
        border.beginFill(0x222222);
        border.drawRect(0, 0, this._myWidth, this._myHeight);
        border.endFill();
        this.addChild(border);

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#ffffff', // gradient
        });

        let btnPrevious = new PIXI.Text("<-", style);
        btnPrevious.interactive = true;
        btnPrevious.on("pointertap", ()=> this._onPreviousPage());
        btnPrevious.x = 20;
        btnPrevious.y = this._myHeight / 2 - btnPrevious.height / 2;
        this.addChild(btnPrevious);

        let btnNext = new PIXI.Text("->", style);
        btnNext.interactive = true;
        btnNext.on("pointertap", () => this._onNextPage());
        btnNext.x = this._myWidth - btnNext.width - 20;
        btnNext.y = this._myHeight / 2 - btnNext.height / 2;
        this.addChild(btnNext);

        this._countryNameTxt = new PIXI.Text("Country name", style);
        this._countryNameTxt.x = this._myWidth / 2 -  this._countryNameTxt.width / 2;
        this._countryNameTxt.y = this._myHeight / 2 -  this._countryNameTxt.height / 2;
        this.addChild( this._countryNameTxt);
    }

    _onPreviousPage(){
        this.emit(Pager.PREVIOUS_PAGE);
    }

    _onNextPage(){
        this.emit(Pager.NEXT_PAGE);
    }

    setCountryName(countryName){
        this._countryNameTxt.text = countryName;
        this._countryNameTxt.x = this._myWidth / 2 -  this._countryNameTxt.width / 2;
        this._countryNameTxt.y = this._myHeight / 2 -  this._countryNameTxt.height / 2;
    }



}