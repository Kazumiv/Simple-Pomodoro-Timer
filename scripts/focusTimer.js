var focusTimer = {};

function createFocusTimer() {
    let timerOptions = getFocusOptions();

    let currentTimer = {
        hh: 0,
        mm: 0,
        ss: 0,

        interval:undefined
    };

    function printMaxTime(){
        let format = (focusTimer.timerOptions.maxhh < 10 ? "0"+ focusTimer.timerOptions.maxhh : focusTimer.timerOptions.maxhh) + ":" + (focusTimer.timerOptions.maxmm < 10 ? "0"+ focusTimer.timerOptions.maxmm : focusTimer.timerOptions.maxmm) + ":" + "00";
        document.getElementById("currentFocusTime").innerText = format;
    };

    function start() {
        if(focusTimer.currentTimer.hh == 0 && focusTimer.currentTimer.mm == 0 && focusTimer.currentTimer.ss == 00){
            focusTimer.currentTimer.hh = focusTimer.timerOptions.maxhh;
            focusTimer.currentTimer.mm = focusTimer.timerOptions.maxmm;
        };
        if(!focusTimer.currentTimer.interval){
            focusTimer.currentTimer.interval = setInterval(updateAndCheckTime, 1000);
        };
    };

    function changeButtons(){
        let startButton = document.getElementById("startFocusButton");
        let pauseButton = document.getElementById("pauseFocusButton");
        console.log(startButton.classList);

        if(!focusTimer.currentTimer.interval){

            startButton.classList.remove("d-none");
            pauseButton.classList.add("d-none");

        } else {

            pauseButton.classList.remove("d-none");
            startButton.classList.add("d-none");

        }
    };

    function updateAndCheckTime() {
        //"01:00:00"
        
        if(focusTimer.currentTimer.ss == 0 && focusTimer.currentTimer.mm > 0){
            focusTimer.currentTimer.ss = 59;
            focusTimer.currentTimer.mm--;
        }

        else if(focusTimer.currentTimer.ss == 0 && focusTimer.currentTimer.mm == 0 && focusTimer.currentTimer.hh > 0){
            focus.currentTimer.ss = 59;
            focus.currentTimer.mm = 59;
            focusTimer.currentTimer.hh--;
        }

        else if(focusTimer.currentTimer.ss == 0 && focusTimer.currentTimer.mm == 0 && focusTimer.currentTimer.hh == 0){
            playAlarm();
            changeTimers(); 
            focusTimer.stop();
            return
        } 
        
        else {
            focusTimer.currentTimer.ss--;
        }

        
        focusTimer.printCurrentTime();
    };

    function pause() {
        clearInterval(focusTimer.currentTimer.interval);
        focusTimer.currentTimer.interval = undefined;
    };

    function stop(notChangeButtons) {
        focusTimer.printMaxTime();
        
        clearInterval(focusTimer.currentTimer.interval);
        focusTimer.currentTimer.interval = undefined;
        focusTimer.currentTimer.hh = 0;
        focusTimer.currentTimer.mm = 0;
        focusTimer.currentTimer.ss = 0;
        //If not change buttons is false, them change the buttons
        focusTimer.changeButtons();
    };

    function printCurrentTime(){

        let format = (focusTimer.currentTimer.hh < 10 ? "0"+ focusTimer.currentTimer.hh : focusTimer.currentTimer.hh) + ":" + (focusTimer.currentTimer.mm < 10 ? "0"+ focusTimer.currentTimer.mm : focusTimer.currentTimer.mm) + ":" + (focusTimer.currentTimer.ss < 10 ? "0"+ focusTimer.currentTimer.ss : focusTimer.currentTimer.ss);
        document.getElementById("currentFocusTime").innerText = format;

    };

    focusTimer = { timerOptions, currentTimer,changeButtons, start, printCurrentTime, printMaxTime, pause, stop, updateAndCheckTime };
    
    printMaxTime();

};