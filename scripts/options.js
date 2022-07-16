const fs = require("fs/promises");
const path = require("path");

var options = {};

function startOptions(data){
    options = JSON.parse(data);
};

function readOptions(){
    if(!isElectron()){
        console.log("Is not electron")
        return fs.readFile("./config.json","utf-8");
    } else {
        console.log(__dirname)
        console.log(path.join(__dirname,"../config.json"));
        return fs.readFile(path.join(__dirname,"../config.json"),"utf-8");
    }
};

function printSavedOptionsInSettingsForm(){
    document.getElementById('focusHourInput').value = options.focus.maxhh;
    document.getElementById('focusMinInput').value = options.focus.maxmm;
    document.getElementById('breakHourInput').value = options.break.maxhh;
    document.getElementById('breakMinInput').value = options.break.maxmm;
};
//options = { /*userOptions, saveOptions*/, getOptions, getFocusOptions }

function changeOptions(){
    let focusHour = document.getElementById('focusHourInput').value;
    let focusMin = document.getElementById('focusMinInput').value;
    let breakHour = document.getElementById('breakHourInput').value;
    let breakMin = document.getElementById('breakMinInput').value;

    options = {
        focus: {
            maxhh: focusHour,
            maxmm: focusMin,
        },
        break: {
            maxhh: breakHour,
            maxmm: breakMin,
        }
    };

    console.log(options);
    if(!isElectron()){
        console.log("Is not electron")
        fs.writeFile("./config.json", JSON.stringify(options));
    } else {
        console.log(__dirname)
        console.log(path.join(__dirname,"../config.json"));
        fs.writeFile(path.join(__dirname,"../config.json"), JSON.stringify(options));
    }
    
    focusTimer.timerOptions = getFocusOptions();
    focusTimer.stop(true);
    breakTimer.timerOptions = getBreakOptions();
    breakTimer.stop(true);
};

function getFocusOptions() {
    return options.focus;
};

function getBreakOptions(){
    return options.break;
};