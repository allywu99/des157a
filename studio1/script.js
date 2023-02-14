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

    const myForm = document.querySelector("#myForm");
    const final = document.getElementById("#textarea");

    myForm.addEventListener( "submit", function(event){
        event.preventDefault();

        const name = document.querySelector("#name").value;
        // const hometown = document.querySelector("#hometown").value;
        // const bigNum = document.querySelector("#bigNum").value;
        // const smallNum = document.querySelector("#smallNum").value;
        // const bizName = document.querySelector("bizName").value;
        // const slogan = document.querySelector("slogan").value;

        final.innerHTML = ("What’s up Sharks, my name is " + name);
        // else if(hometown==""){
        //     myText = "Please provide your hometown";
        //     document.querySelector("#hometown").focus();
        // }
        // else if(bigNum==""){
        //     myText = "Please provide your funding amount";
        //     document.querySelector("#bigNum").focus();
        // }
        // else if(smallNum==""){
        //     myText = "Please provide your equity amount";
        //     document.querySelector("#smallNum").focus();
        // }
        // else if(bizName==""){
        //     myText = "Please provide your business' name";
        //     document.querySelector("#bizName").focus();
        // }
        // else if(slogan==""){
        //     myText = "Please provide your company's slogan";
        //     document.querySelector("#slogan").focus();
        // }
        // else{
        // }
    });
} )();