var breakTimer = {};

function createBreakTimer() {
    let timerOptions = getBreakOptions();

    let currentTimer = {
        hh: 0,
        mm: 0,
        ss: 0,

        interval:undefined
    };

    function printMaxTime(){
        let format = (breakTimer.timerOptions.maxhh < 10 ? "0"+ breakTimer.timerOptions.maxhh : breakTimer.timerOptions.maxhh) + ":" + (breakTimer.timerOptions.maxmm < 10 ? "0"+ breakTimer.timerOptions.maxmm : breakTimer.timerOptions.maxmm) + ":" + "00";
        document.getElementById("currentBreakTime").innerText = format;
    };

    function start() {
        if(breakTimer.currentTimer.hh == 0 && breakTimer.currentTimer.mm == 0 && breakTimer.currentTimer.ss == 00){
            breakTimer.currentTimer.hh = breakTimer.timerOptions.maxhh;
            breakTimer.currentTimer.mm = breakTimer.timerOptions.maxmm;
        };
        if(!breakTimer.currentTimer.interval){
            breakTimer.currentTimer.interval = setInterval(updateAndCheckTime, 1000);
        };
    };

    function changeButtons(){
        let startButton = document.getElementById("startBreakButton");
        let pauseButton = document.getElementById("pauseBreakButton");
        console.log(startButton.classList);

        if(!breakTimer.currentTimer.interval){

            startButton.classList.remove("d-none");
            pauseButton.classList.add("d-none");

        } else {

            pauseButton.classList.remove("d-none");
            startButton.classList.add("d-none");

        }
    };

    function updateAndCheckTime() {
        //"01:00:00"
        
        if(breakTimer.currentTimer.ss == 0 && breakTimer.currentTimer.mm > 0){
            breakTimer.currentTimer.ss = 59;
            breakTimer.currentTimer.mm--;
        }

        else if(breakTimer.currentTimer.ss == 0 && breakTimer.currentTimer.mm == 0 && breakTimer.currentTimer.hh > 0){
            breakTimer.currentTimer.ss = 59;
            breakTimer.currentTimer.mm = 59;
            breakTimer.currentTimer.hh--;
        }

        else if(breakTimer.currentTimer.ss == 0 && breakTimer.currentTimer.mm == 0 && breakTimer.currentTimer.hh == 0){
            playAlarm();
            changeTimers(); 
            breakTimer.stop();
            return
        } 
        
        else {
            breakTimer.currentTimer.ss--;
        }

        
        breakTimer.printCurrentTime();
    };

    function pause() {
        clearInterval(breakTimer.currentTimer.interval);
        breakTimer.currentTimer.interval = undefined;
    };

    function stop() {
        breakTimer.printMaxTime();
        
        clearInterval(breakTimer.currentTimer.interval);
        breakTimer.currentTimer.interval = undefined;
        breakTimer.currentTimer.hh = 0;
        breakTimer.currentTimer.mm = 0;
        breakTimer.currentTimer.ss = 0;
        breakTimer.changeButtons();
    };

    function printCurrentTime(){

        let format = (breakTimer.currentTimer.hh < 10 ? "0"+ breakTimer.currentTimer.hh : breakTimer.currentTimer.hh) + ":" + (breakTimer.currentTimer.mm < 10 ? "0"+ breakTimer.currentTimer.mm : breakTimer.currentTimer.mm) + ":" + (breakTimer.currentTimer.ss < 10 ? "0"+ breakTimer.currentTimer.ss : breakTimer.currentTimer.ss);
        document.getElementById("currentBreakTime").innerText = format;

    };

    breakTimer = { timerOptions, currentTimer,changeButtons, start, printCurrentTime, printMaxTime, pause, stop, updateAndCheckTime };
    
    printMaxTime();

};