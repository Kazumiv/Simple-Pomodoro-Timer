function playAlarm(){
    const alarm = new Audio("./sounds/alarm.mp3");
    alarm.play();
};

function changeTimers(){
    let focusDiv =  document.getElementById("focus");
    let focusCurrentTime = document.getElementById("currentFocusTime");

    let breakDiv =  document.getElementById("break");
    let breakCurrentTime = document.getElementById("currentBreakTime");

    let timeForDiv =  document.getElementById("timeFor");

    //If the focusDiv is invisible
    if(focusDiv.classList.contains("d-none") == true){

        focusDiv.classList.remove("d-none");
        focusCurrentTime.classList.remove("d-none");

        breakDiv.classList.add("d-none");
        breakCurrentTime.classList.add("d-none");

        breakTimer.stop();
        timeForDiv.innerText = "Focus";

    } else {

        breakDiv.classList.remove("d-none");
        breakCurrentTime.classList.remove("d-none");

        focusDiv.classList.add("d-none");
        focusCurrentTime.classList.add("d-none");

        focusTimer.stop();
        timeForDiv.innerText = "Break";
    }
};