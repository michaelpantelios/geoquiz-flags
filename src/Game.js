import * as PIXI from "pixi.js"
const _ = require("lodash");
import {ColorPickersBar} from "./ColorPickersBar";
import {Pager} from "./Pager";
import {Result} from "./Result";
import flagsData from "./assets/data/flagsData.json"
import {Utils} from "./Utils";
//flag classes
import {Armenia} from "./flagClasses/Armenia.js";
import {Argentina} from "./flagClasses/Argentina";
import {AntiguaBarbuda} from "./flagClasses/AntiguaBarbuda";
import {Afghanistan} from "./flagClasses/Afghanistan";
import {Bahrain} from "./flagClasses/Bahrain";
import {Burundi} from "./flagClasses/Burundi";
import {Botswana} from "./flagClasses/Botswana";
import {Andora} from "./flagClasses/Andora";
import {Austria} from "./flagClasses/Austria";
import {Azerbaijan} from "./flagClasses/Azerbaijan";
import {Bahamas} from "./flagClasses/Bahamas";
import {Bangladesh} from "./flagClasses/Bangladesh";
import {Barbados} from "./flagClasses/Barbados";
import {Belarus} from "./flagClasses/Belarus";
import {Belgium} from "./flagClasses/Belgium";
import {Belize} from "./flagClasses/Belize";
import {Benin} from "./flagClasses/Benin";
import {Angola} from "./flagClasses/Angola";
import {Bhutan} from "./flagClasses/Bhutan";
import {Bolivia} from "./flagClasses/Bolivia";
import {Bosniaherzegovina} from "./flagClasses/Bosniaherzegovina.png";
import {Brazil} from "./flagClasses/Brazil";
import {Brunei} from "./flagClasses/Brunei";
import {Bulgaria} from "./flagClasses/Bulgaria";
import {BurkinaFaso} from "./flagClasses/BurkinaFaso";
import {IvoryCoast} from "./flagClasses/IvoryCoast";
import {Cambodia} from "./flagClasses/Cambodia";
import {Cameroon} from "./flagClasses/Cameroon";
import {CentralAfricanRepublic} from "./flagClasses/CentralAfricanRepublic";
import {Chad} from "./flagClasses/Chad";
import {Chile} from "./flagClasses/Chile";
import {Colombia} from "./flagClasses/Colombia";
import {Comoros} from "./flagClasses/Comoros";
import {Congo} from "./flagClasses/Congo";
import {CostaRica} from "./flagClasses/CostaRica";
import {Croatia} from "./flagClasses/Croatia";
import {Cuba} from "./flagClasses/Cuba";
import {CzechRepublic} from "./flagClasses/CzechRepublic";
import {Denmark} from "./flagClasses/Denmark";
import {Djibouti} from "./flagClasses/Djibouti";
import {DominicanDemocracy} from "./flagClasses/DominicanDemocracy";
import {NorthKorea} from "./flagClasses/NorthKorea";
import {Ecuador} from "./flagClasses/Ecuador";
import {Egypt} from "./flagClasses/Egypt";
import {ElSalvador} from "./flagClasses/ElSalvador";
import {EquatorialGuinea} from "./flagClasses/EquatorialGuinea";
import {Eritrea} from "./flagClasses/Eritrea";
import {Esthonia} from "./flagClasses/Esthonia";
import {Ethiopia} from "./flagClasses/Ethiopia";
import {Finland} from "./flagClasses/Finland";
import {France} from "./flagClasses/France";
import {Gabon} from "./flagClasses/Gabon";
import {Gambia} from "./flagClasses/Gambia";
import {Germany} from "./flagClasses/Germany";
import {Ghana} from "./flagClasses/Ghana";
import {Grenada} from "./flagClasses/Grenada";
import {Guatemala} from "./flagClasses/Guatemala";
import {GuineaBissau} from "./flagClasses/GuineaBissau";
import {Guinea} from "./flagClasses/Guinea";
import {Guyana} from "./flagClasses/Guyana";
import {Haiti} from "./flagClasses/Haiti";
import {Honduras} from "./flagClasses/Honduras";
import {Hungary} from "./flagClasses/Hungary";
import {Iceland} from "./flagClasses/Iceland";
import {India} from "./flagClasses/India";
import {Indonesia} from "./flagClasses/Indonesia";
import {Iran} from "./flagClasses/Iran";
import {Iraq} from "./flagClasses/Iraq";
import {Ireland} from "./flagClasses/Ireland";
import {Italy} from "./flagClasses/Italy";
import {Jamaica} from "./flagClasses/Jamaica";
import {Japan} from "./flagClasses/Japan";
import {Jordan} from "./flagClasses/Jordan";
import {Kenya} from "./flagClasses/Kenya";
import {Kuwait} from "./flagClasses/Kuwait";
import {Laos} from "./flagClasses/Laos";
import {Latvia} from "./flagClasses/Latvia";
import {Lebanon} from "./flagClasses/Lebanon";
import {Lesotho} from "./flagClasses/Lesotho";
import {Libya} from "./flagClasses/Libya";
import {Liechtenstein} from "./flagClasses/Liechtenstein";
import {Lithuania} from "./flagClasses/Lithuania";
import {Luxembourg} from "./flagClasses/Luxembourg";
import {Madagascar} from "./flagClasses/Madagascar";
import {Malawi} from "./flagClasses/Malawi";
import {Maldives} from "./flagClasses/Maldives";
import {Mali} from "./flagClasses/Mali";
import {Malta} from "./flagClasses/Malta";
import {Mauritania} from "./flagClasses/Mauritania";
import {Mauritius} from "./flagClasses/Mauritius";
import {Mexico} from "./flagClasses/Mexico";
import {Moldova} from "./flagClasses/Moldova";
import {Monaco} from "./flagClasses/Monaco";
import {Mongolia} from "./flagClasses/Mongolia";
import {Mozambique} from "./flagClasses/Mozambique";
import {Namimbia} from "./flagClasses/Namimbia";
import {Myanmar} from "./flagClasses/Myanmar";
import {Nauru} from "./flagClasses/Nauru";
import {Netherlands} from "./flagClasses/Netherlands";
import {Niger} from "./flagClasses/Niger";
import {Nigeria} from "./flagClasses/Nigeria";
import {Norway} from "./flagClasses/Norway";
import {Oman} from "./flagClasses/Oman";
import {Palau} from "./flagClasses/Palau";
import {Pakistan} from "./flagClasses/Pakistan";
import {PapuaNewGuinea} from "./flagClasses/PapuaNewGuinea";
import {Panama} from "./flagClasses/Panama";
import {Paraguay} from "./flagClasses/Paraguay";
import {Peru} from "./flagClasses/Peru";
import {Philippines} from "./flagClasses/Philippines";
import {Poland} from "./flagClasses/Poland";
import {Portugal} from "./flagClasses/Portugal";
import {Qatar} from "./flagClasses/Qatar";
import {Romania} from "./flagClasses/Romania";
import {Russia} from "./flagClasses/Russia";
import {Rwanda} from "./flagClasses/Rwanda";
import {SaintKittsAndNevis} from "./flagClasses/SaintKittsAndNevis";
import {SaintLucia} from "./flagClasses/SaintLucia";
import {Samoa} from "./flagClasses/Samoa";
import {SanMarino} from "./flagClasses/SanMarino";
import {SaoTomePrincipe} from "./flagClasses/SaoTomePrincipe";
import {Senegal} from "./flagClasses/Senegal";
import {Serbia} from "./flagClasses/Serbia";
import {Seychelles} from "./flagClasses/Seychelles";
import {SierraLeone} from "./flagClasses/SierraLeone";
import {Singapore} from "./flagClasses/Singapore";
import {Slovakia} from "./flagClasses/Slovakia";
import {Slovenia} from "./flagClasses/Slovenia";
import {SolomonIslands} from "./flagClasses/SolomonIslands";
import {Somalia} from "./flagClasses/Somalia";
import {SouthAfrica} from "./flagClasses/SouthAfrica";
import {SouthKorea} from "./flagClasses/SouthKorea";
import {SouthSudan} from "./flagClasses/SouthSudan";
import {Spain} from "./flagClasses/Spain";
import {SriLanka} from "./flagClasses/SriLanka";
import {StVincentGrenadines} from "./flagClasses/StVincentGrenadines";
import {Suriname} from "./flagClasses/Suriname";
import {Sudan} from "./flagClasses/Sudan";
import {Sweden} from "./flagClasses/Sweden";
import {Switzerland} from "./flagClasses/Switzerland";
import {Syria} from "./flagClasses/Syria";
import {Palestine} from "./flagClasses/Palestine";
import {Tajikistan} from "./flagClasses/Tajikistan";
import {Tanzania} from "./flagClasses/Tanzania";
import {Thailand} from "./flagClasses/Thailand";
import {TimorLeste} from "./flagClasses/TimorLeste";
import {Togo} from "./flagClasses/Togo";
import {TrinidadTobago} from "./flagClasses/TrinidadTobago";
import {UnitedArabEmirates} from "./flagClasses/UnitedArabEmirates";
import {Uganda} from "./flagClasses/Uganda";
import {Ukraine} from "./flagClasses/Ukraine";
import {Uzbekistan} from "./flagClasses/Uzbekistan";
import {Vanuatu} from "./flagClasses/Vanuatu";
import {Venezuela} from "./flagClasses/Venezuela";
import {Vietnam} from "./flagClasses/Vietnam";
import {Yemen} from "./flagClasses/Yemen";
import {Zimbabwe} from "./flagClasses/Zimbabwe";
import {Scotland} from "./flagClasses/Scotland";
import {Wales} from "./flagClasses/Wales";
import {Georgia} from "./flagClasses/Georgia";


export class Game extends PIXI.Container {
    static get FLAG_WIDTH() {  return 2388; }
    static get FLAG_HEIGHT() { return 1668; }
    static get AREA_HIT_POINTS() { return 1;}
    static get COLOR_HIT_POINTS() { return 0.6; }

    constructor(data) {
        super();

        let nextY = 10;
        let solved = data.solved;
        this._appWidth = data.appWidth;
        this._country = data.country;

        this._pickedColor = 0xbbbbbb;
        this._currentFlagIndex = 0;
        this._currentFlag = {};
        this._flagsArray = [];
        this._flagRatio = 1.431;

        this._flagScale = this._appWidth / Game.FLAG_WIDTH;

        this._allFlagsData = flagsData["flags"];
        console.log("flagData: ", this._allFlagsData);
        console.log(`We have ${ this._allFlagsData.length} flags`);

        this.colorPickers = new ColorPickersBar({"width" : this._appWidth, "height" : this._appWidth*0.1});
        this.colorPickers.x = document.documentElement.clientWidth / 2 - this.colorPickers.width  / 2;
        this.colorPickers.y = nextY;
        this.colorPickers.on(ColorPickersBar.COLOR_PICKED, (color)=>{
            this._pickedColor = color;
            // console.log(`picked color: ${pickedColor}`);
        })
        this.colorPickers.visible = !solved;
        this.addChild(this.colorPickers);

        nextY += this.colorPickers.height + 20;

        for (let i=0; i< this._allFlagsData.length; i++){
            let flagData =  this._allFlagsData[i];
            // console.log("flagData:",flagData);
            let flag;
            let data = {
                "width": this._appWidth,
                "height": this._appWidth / this._flagRatio,
                "solved": solved,
                "flagData" : flagData,
                "scale" : this._flagScale,
                "lineWidth" : 3
            };
            switch(flagData["country"]){
                case "Afghanistan":
                    flag = new Afghanistan(data);
                    break;
                case "Armenia":
                    flag = new Armenia(data);
                    break;
                case "Argentina":
                    flag = new Argentina(data);
                    break;
                case "Antigua and Barbuda":
                    flag = new AntiguaBarbuda(data);
                    break;
                case "Bahrain":
                    flag = new Bahrain(data);
                    break;
                case "Burundi":
                    flag = new Burundi(data);
                    break;
                case "Botswana":
                    flag = new Botswana(data);
                    break;
                case "Andora":
                    flag = new Andora(data);
                    break;
                case "Austria" :
                    flag = new Austria(data);
                    break;
                case "Azerbaijan":
                    flag = new Azerbaijan(data);
                    break;
                case "Bahamas":
                    flag = new Bahamas(data);
                    break;
                case "Bangladesh":
                    flag = new Bangladesh(data);
                    break;
                case "Barbados":
                    flag = new Barbados(data);
                    break;
                case "Belarus":
                    flag = new Belarus(data);
                    break;
                case "Belgium":
                    flag = new Belgium(data);
                    break;
                case "Belize":
                    flag = new Belize(data);
                    break;
                case "Benin":
                    flag = new Benin(data);
                    break;
                case "Angola":
                    flag = new Angola(data);
                    break;
                case "Bhutan":
                    flag = new Bhutan(data);
                    break;
                case "Bolivia":
                    flag = new Bolivia(data);
                    break;
                case "Bosniaherzegovina":
                    flag = new Bosniaherzegovina(data);
                    break;
                case "Brazil":
                    flag = new Brazil(data);
                    break;
                case "Brunei":
                    flag = new Brunei(data);
                    break;
                case "Bulgaria":
                    flag = new Bulgaria(data);
                    break;
                case "Burkina Faso":
                    flag = new BurkinaFaso(data);
                    break;
                case "Ivory Coast":
                    flag = new IvoryCoast(data);
                    break;
                case "Cambodia":
                    flag = new Cambodia(data);
                    break;
                case "Cameroon":
                    flag = new Cameroon(data);
                    break;
                case "Central African Republic":
                    flag = new CentralAfricanRepublic(data);
                    break;
                case "Chad":
                    flag = new Chad(data);
                    break;
                case "Chile":
                    flag = new Chile(data);
                    break;
                case "Colombia":
                    flag = new Colombia(data);
                    break;
                case "Comoros":
                    flag = new Comoros(data);
                    break;
                case "Congo":
                    flag = new Congo(data);
                    break;
                case "Costa Rica":
                    flag = new CostaRica(data);
                    break;
                case "Croatia":
                    flag = new Croatia(data);
                    break;
                case "Cuba":
                    flag = new Cuba(data);
                    break;
                case "Czech Republic":
                    flag = new CzechRepublic(data);
                    break;
                case "Denmark":
                    flag = new Denmark(data);
                    break;
                case "Djibouti":
                    flag = new Djibouti(data);
                    break;
                case "Dominican Republic":
                    flag = new DominicanDemocracy(data);
                    break;
                case "North Korea":
                    flag = new NorthKorea(data);
                    break;
                case "Ecuador":
                    flag = new Ecuador(data);
                    break;
                case "Egypt":
                    flag = new Egypt(data);
                    break;
                case "El Salvador":
                    flag = new ElSalvador(data);
                    break;
                case "Equatorial Guinea":
                    flag = new EquatorialGuinea(data);
                    break;
                case "Eritrea":
                    flag = new Eritrea(data);
                    break;
                case "Esthonia":
                    flag = new Esthonia(data);
                    break;
                case "Ethiopia":
                    flag = new Ethiopia(data);
                    break;
                case "Finland":
                    flag = new Finland(data);
                    break;
                case "France":
                    flag = new France(data);
                    break;
                case "Gabon":
                    flag = new Gabon(data);
                    break;
                case "Gambia":
                    flag = new Gambia(data);
                    break;
                case "Germany":
                    flag = new Germany(data);
                    break;
                case "Ghana":
                    flag = new Ghana(data);
                    break;
                case "Grenada":
                    flag = new Grenada(data);
                    break;
                case "Guatemala":
                    flag = new Guatemala(data);
                    break;
                case "Guinea Bissau":
                    flag = new GuineaBissau(data);
                    break;
                case "Guinea":
                    flag = new Guinea(data);
                    break;
                case "Guyana":
                    flag = new Guyana(data);
                    break;
                case "Haiti":
                    flag = new Haiti(data);
                    break;
                case "Honduras":
                    flag = new Honduras(data);
                    break;
                case "Hungary":
                    flag = new Hungary(data);
                    break;
                case "Iceland":
                    flag = new Iceland(data);
                    break;
                case "India":
                    flag = new India(data);
                    break;
                case "Indonesia":
                    flag = new Indonesia(data);
                    break;
                case "Iran":
                    flag = new Iran(data);
                    break;
                case "Iraq":
                    flag = new Iraq(data);
                    break;
                case "Ireland":
                    flag = new Ireland(data);
                    break;
                case "Italy":
                    flag = new Italy(data);
                    break;
                case "Jamaica":
                    flag = new Jamaica(data);
                    break;
                case "Japan":
                    flag = new Japan(data);
                    break;
                case "Jordan":
                    flag = new Jordan(data);
                    break;
                case "Kenya":
                    flag = new Kenya(data);
                    break;
                case "Kuwait":
                    flag = new Kuwait(data);
                    break;
                case "Laos":
                    flag = new Laos(data);
                    break;
                case "Latvia":
                    flag = new Latvia(data);
                    break;
                case "Lebanon":
                    flag = new Lebanon(data);
                    break;
                case "Lesotho":
                    flag = new Lesotho(data);
                    break;
                case "Libya":
                    flag = new Libya(data);
                    break;
                case "Liechtenstein":
                    flag = new Liechtenstein(data);
                    break;
                case "Lithuania":
                    flag = new Lithuania(data);
                    break;
                case "Luxembourg":
                    flag = new Luxembourg(data);
                    break;
                case "Madagascar":
                    flag = new Madagascar(data);
                    break;
                case "Malawi":
                    flag = new Malawi(data);
                    break;
                case "Maldives":
                    flag = new Maldives(data);
                    break;
                case "Mali":
                    flag = new Mali(data);
                    break;
                case "Malta":
                    flag = new Malta(data);
                    break;
                case "Mauritania":
                    flag = new Mauritania(data);
                    break;
                case "Mauritius":
                    flag = new Mauritius(data);
                    break;
                case "Mexico":
                    flag = new Mexico(data);
                    break;
                case "Moldova":
                    flag = new Moldova(data);
                    break;
                case "Monaco":
                    flag = new Monaco(data);
                    break;
                case "Mongolia":
                    flag = new Mongolia(data);
                    break;
                case "Mozambique":
                    flag = new Mozambique(data);
                    break;
                case "Namimbia":
                    flag = new Namimbia(data);
                    break;
                case "Myanmar":
                    flag = new Myanmar(data);
                    break;
                case "Nauru":
                    flag = new Nauru(data);
                    break;
                case "Netherlands":
                    flag = new Netherlands(data);
                    break;
                case "Niger":
                    flag = new Niger(data);
                    break;
                case "Nigeria":
                    flag = new Nigeria(data);
                    break;
                case "Norway":
                    flag = new Norway(data);
                    break;
                case "Oman":
                    flag = new Oman(data);
                    break;
                case "Palau":
                    flag = new Palau(data);
                    break;
                case "Pakistan":
                    flag = new Pakistan(data);
                    break;
                case "Papua New Guinea":
                    flag = new PapuaNewGuinea(data);
                    break;
                case "Panama":
                    flag = new Panama(data);
                    break;
                case "Paraguay":
                    flag = new Paraguay(data);
                    break;
                case "Peru":
                    flag = new Peru(data);
                    break;
                case "Philippines":
                    flag = new Philippines(data);
                    break;
                case "Poland":
                    flag = new Poland(data);
                    break;
                case "Portugal":
                    flag = new Portugal(data);
                    break;
                case "Qatar":
                    flag = new Qatar(data);
                    break;
                case "Romania":
                    flag = new Romania(data);
                    break;
                case "Russia":
                    flag = new Russia(data);
                    break;
                case "Rwanda":
                    flag = new Rwanda(data);
                    break;
                case "Saint Kitt And Nevis":
                    flag = new SaintKittsAndNevis(data);
                    break;
                case "Saint Lucia":
                    flag = new SaintLucia(data);
                    break;
                case "Samoa":
                    flag = new Samoa(data);
                    break;
                case "San Marino":
                    flag = new SanMarino(data);
                    break;
                case "Sao Tome and Principe":
                    flag = new SaoTomePrincipe(data);
                    break;
                case "Senegal":
                    flag = new Senegal(data);
                    break;
                case "Serbia":
                    flag = new Serbia(data);
                    break;
                case "Seychelles":
                    flag = new Seychelles(data);
                    break;
                case "Sierra Leone":
                    flag = new SierraLeone(data);
                    break;
                case "Singapore":
                    flag = new Singapore(data);
                    break;
                case "Slovakia":
                    flag = new Slovakia(data);
                    break;
                case "Slovenia":
                    flag = new Slovenia(data);
                    break;
                case "Solomon Islands":
                    flag = new SolomonIslands(data);
                    break;
                case "Somalia":
                    flag = new Somalia(data);
                    break;
                case "South Africa":
                    flag = new SouthAfrica(data);
                    break;
                case "South Korea":
                    flag = new SouthKorea(data);
                    break;
                case "South Sudan":
                    flag = new SouthSudan(data);
                    break;
                case "Spain":
                    flag = new Spain(data);
                    break;
                case "Sri Lanka":
                    flag = new SriLanka(data);
                    break;
                case "StVincent and Grenadines":
                    flag = new StVincentGrenadines(data);
                    break;
                case "Suriname":
                    flag = new Suriname(data);
                    break;
                case "Sudan":
                    flag = new Sudan(data);
                    break;
                case "Sweden":
                    flag = new Sweden(data);
                    break;
                case "Switzerland":
                    flag = new Switzerland(data);
                    break;
                case "Syria":
                    flag = new Syria(data);
                    break;
                case "Palestine":
                    flag = new Palestine(data);
                    break;
                case "Tajikistan":
                    flag = new Tajikistan(data);
                    break;
                case "Tanzania":
                    flag = new Tanzania(data);
                    break;
                case "Thailand":
                    flag = new Thailand(data);
                    break;
                case "East Timor":
                    flag = new TimorLeste(data);
                    break;
                case "Togo":
                    flag = new Togo(data);
                    break;
                case "Trinidad and Tobago":
                    flag = new TrinidadTobago(data);
                    break;
                case "United Arab Emirates":
                    flag = new UnitedArabEmirates(data);
                    break;
                case "Uganda":
                    flag = new Uganda(data);
                    break;
                case "Ukraine":
                    flag = new Ukraine(data);
                    break;
                case "Uzbekistan":
                    flag = new Uzbekistan(data);
                    break;
                case "Vanuatu":
                    flag = new Vanuatu(data);
                    break;
                case "Venezuela":
                    flag = new Venezuela(data);
                    break;
                case "Vietnam":
                    flag = new Vietnam(data);
                    break;
                case "Yemen":
                    flag = new Yemen(data);
                    break;
                case "Zimbabwe":
                    flag = new Zimbabwe(data);
                    break;
                case "Scotland":
                    flag = new Scotland(data);
                    break;
                case "Wales":
                    flag = new Wales(data);
                    break;
                case "Georgia":
                    flag = new Georgia(data);
                    break;
            }

            flag.x = document.documentElement.clientWidth / 2 - flag.width / 2;
            flag.y = nextY;

            this.addChild(flag);
            flag.on(Utils.FLAG_AREA_PICKED, (areaName) => {
                if (!solved)
                    flag.paintFlagArea(areaName, this._pickedColor)
            });

            this._flagsArray.push(flag);
        }

        // console.log("flagColors = ");
        // console.log(this._flagsArray[this._currentFlagIndex].getColorsForPickers());
        nextY += this._appWidth / this._flagRatio + 20;

        this._pager = new Pager({"width" : this._appWidth, "height" : this._appWidth * 0.1});
        this._pager.on(Pager.PREVIOUS_PAGE, ()=> {
            if (this._currentFlagIndex === 0)
                this._currentFlagIndex = this._flagsArray.length-1;
            else   this._currentFlagIndex--;
            this.showFlag();
        });
        this._pager.on(Pager.NEXT_PAGE, () => {
            if (this._currentFlagIndex === this._flagsArray.length-1)
                this._currentFlagIndex = 0;
            else this._currentFlagIndex++;

            this.showFlag();
        })

        this._pager.x = this.colorPickers.x;
        this._pager.y = nextY;
        this.addChild(this._pager);

        nextY += this._pager.height + 20;

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#ffffff', // gradient
        });

        let btnSubmit = new PIXI.Text(">>>>SUBMIT<<<<", style);
        btnSubmit.interactive = true;
        btnSubmit.on("pointertap", ()=> this._onSubmit());
        btnSubmit.x = document.documentElement.clientWidth / 2 - btnSubmit.width / 2;
        btnSubmit.y = nextY;
        this.addChild(btnSubmit);

        nextY += btnSubmit.height + 20;

        this.result = new Result({"width" : this._appWidth, "height" : 50})
        this.result.x = this._pager.x;
        this.result.y = nextY;
        this.addChild(this.result);

        if (this._country !== ""){
            let _index = _.findIndex(this._flagsArray, x => x.getFlagCountryName().toString().toLowerCase().includes(this._country.toString().toLowerCase()));
            this._currentFlagIndex = _index !== -1 ? _index : 0;
        }

        console.log("current index = "+this._currentFlagIndex);

        this.showFlag();

    }

    _onSubmit(){
        console.log("lets see !! ")
        console.log(this._currentFlag.getFlagCountryName());
        console.log(this._currentFlag.getUserSolution());

        let correctFlagData = {};
        let correctFlagColors = this._allFlagsData[this._currentFlagIndex]["correctColors"];

        correctFlagColors.forEach((area)=>{
            let correctAreaIds = Object.keys(area);
            correctAreaIds.forEach((areaId)=>{
               correctFlagData[areaId]= parseInt(area[areaId].toString()).toString();
            });
        });

        let excludedAreas = this._allFlagsData[this._currentFlagIndex]["excludedAreas"];
        let activeAreasNum = this._allFlagsData[this._currentFlagIndex]["correctColors"].length - excludedAreas.length;

        console.log("correctFlagData = ", correctFlagData);

        console.log("userSolution = ",this._currentFlag.getUserSolution());

        let userSolution = this._currentFlag.getUserSolution();

        let correctColorPoints = 0;
        let correctColorAndAreaPoints = 0;
        let colorsFound = [];

        let points = {};

        let areaIds = Object.keys(userSolution);
        areaIds.forEach((areaId) => {
          if (!excludedAreas.includes(areaId)) {
              let areaColor = userSolution[areaId];
              if (correctFlagData[areaId] === areaColor){
                points[areaId] = Game.AREA_HIT_POINTS;
              } else {
                  points[areaId] = 0;
                  let correctAreaIds = Object.keys(correctFlagData);
                  correctAreaIds.forEach((correctAreaId) => {
                      if (correctFlagData[correctAreaId] === areaColor){
                          //hooray, one correct color
                          points[areaId] = Game.COLOR_HIT_POINTS;
                      }
                  });
              }
          }
        });

        let finalPoints = 0;
        let resultString = "( (";
        let pointAreaIds = Object.keys(points);
        pointAreaIds.forEach((areaId,index) =>{
            finalPoints += points[areaId];
            resultString+=`${areaId}.points: ${points[areaId]}`;
            if (index < pointAreaIds.length - 1)
                resultString +=" + ";
            else resultString += ")";
        })

        finalPoints /= activeAreasNum;
        finalPoints = Math.round(finalPoints * 100);

        resultString += ` / ${activeAreasNum} ) * 100 = ${finalPoints}`;

        this.result.setResultText(resultString);

    }

    showFlag(){
        // console.log("showFlag");
        for (let i=0; i<this._flagsArray.length;i++){
            let flag = this._flagsArray[i];
            // console.log(`flag name: ${flag.getFlagCountryName()}`);
            // console.log(`data name: ${this._allFlagsData[i]["country"]}`);
            if (flag.getFlagCountryName() === this._allFlagsData[this._currentFlagIndex]["country"]){
                flag.visible = true;
                this._currentFlag = flag;
            } else {
                flag.visible = false;
            }
        }
        this._pickedColor = 0xbbbbbb;
        this.colorPickers.setColors(this._flagsArray[this._currentFlagIndex].getColorsForPickers());
        this._pager.setCountryName(this._allFlagsData[this._currentFlagIndex]["country"]);
    }


}
