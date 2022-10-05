import * as PIXI from "pixi.js";

export class Result extends PIXI.Container {
    constructor(data) {
        super();

        this.myWidth = data.width;
        this.myHeight = data.height;

        let border = new PIXI.Graphics();
        border.lineStyle(2, 0xaaddaa, 1);
        border.beginFill(0x222222);
        border.drawRect(0, 0, this.myWidth, this.myHeight);
        border.endFill();
        // this.addChild(border);


        this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 20,
            fontWeight: 'bold',
            fill: '#ffffff', // gradient
        });


        this.resultText = new PIXI.Text("", this.style );
        this.addChild(this.resultText);
    }

    setResultText(s){
        this.resultText.text = s;
        this.resultText.x = this.myWidth / 2 - this.resultText.width / 2;
        this.resultText.y = this.myHeight / 2 - this.resultText.height / 2;
    }


}