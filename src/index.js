import * as PIXI from "pixi.js"
import {Game} from "./Game";

function initGame() {
    const app = new PIXI.Application({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        backgroundColor: 0x666666,
        resolution:  1,
        antialias: true
    });
    console.log("document.documentElement.clientWidth = "+document.documentElement.clientWidth);
    console.log("document.documentElement.clientHeight = "+document.documentElement.clientHeight);
    document.body.appendChild(app.view);

    let providedSolved = new URLSearchParams(window.location.search).get("solved");
    let isSolved = false;

    if (providedSolved)
        isSolved = providedSolved === "true";

    let providedAppWidth = new URLSearchParams(window.location.search).get("appWidth");
    let _appWidth = document.documentElement.clientWidth;

    if (providedAppWidth){
        _appWidth = providedAppWidth;
    }

    let providedCountry = new URLSearchParams(window.location.search).get("country");
    let _country = "";

    if (providedCountry){
        _country = providedCountry;
    }

    const container = new Game({solved: isSolved, appWidth: _appWidth, country: _country});

    app.stage.addChild(container);
}

document.body.onload = () => {
    initGame();
}
