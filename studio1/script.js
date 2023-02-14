( function(){
    "use strict";
    console.log("reading js");

    let play = document.getElementById("playBtn");
    let pause = document.getElementById("pauseBtn");
    let audio = new Audio("./walkingTheme.mp3");

    play.addEventListener("click", ()=>{
        audio.play();
    })
    pause.addEventListener("click", ()=>{
        audio.pause();
    })

} )();