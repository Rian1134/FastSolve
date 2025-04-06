const display = document.getElementById("timer-display");
const penalty = document.getElementById("penalty");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        penalty.style.visibility ="hidden";
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()  - startTime;
        isRunning = false;
        penalty.style.visibility ="visible";
    }
}

function p2(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "+2";
}


function dnf(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "DNF";
    console.log(timer);
}

function remove(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00.00";
}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 *60 ) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${minutes}:${seconds}:${miliseconds}`;
}
document.addEventListener('keyup', event => {
    if(isRunning == false){
        if(event.key == " "){
            start();
        }
    }
    else{
        stop();
    }
});