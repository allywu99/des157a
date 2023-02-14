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
    const madLib = document.querySelector("#formcss");
    // const final = document.querySelector("#textarea");

    myForm.addEventListener( "submit", function(event){
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const hometown = document.querySelector("#hometown").value;
        const bigNum = document.querySelector("#bigNum").value;
        const smallNum = document.querySelector("#smallNum").value;
        const bizName = document.querySelector("#bizName").value;
        const slogan = document.querySelector("#slogan").value;

        let myText;

        // if(name){
        //     console.log("EMPTY");
        //     document.getElementById("#name").style.border = "red";
        // }

        if(name==""){
            myText = "Please enter your name";
            document.querySelector("#name").focus();
            document.getElementById('name').style.border = "2px solid red";
        }
        else if(hometown==""){
            myText = "Please enter your hometown";
            document.querySelector("#hometown").focus();
            document.getElementById('hometown').style.border = "2px solid red";
        }
        else if(bigNum==""){
            myText = "Please enter your fundraising amount";
            document.querySelector("#bigNum").focus();
            document.getElementById('bigNum').style.border = "2px solid red";
        }
        else {
            myText = `<p>Hi, my name is ${name} and I'm from ${hometown}.<br> I'm seeking $${bigNum} in exchange for ${smallNum}% for my business: ${bizName}!<br> So, Sharks, if you're ready, ${slogan}!</p>`
        }


        madLib.innerHTML = myText;
    });
} )();