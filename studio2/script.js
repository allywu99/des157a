( function(){
    'use strict';
    console.log('reaing js');

    //JS for image slider 
    window.addEventListener('load', function () {
    
        function animateSlider(element, direction){
            const sliderContent = document.querySelector(`${element} .a`);
            const sliderWidth = sliderContent.offsetWidth;
            const cloned = sliderContent.cloneNode(true);
            cloned.className = "b";
            document.querySelector(`${element} .slider`).appendChild(cloned);
            let root = document.querySelector(':root');
            const endLeftPos = `-${sliderWidth}px`;    
            root.style.setProperty('--sliderwidth', endLeftPos);
            document.querySelector(`${element} .slider`).classList.add(`${direction}`);
        }
    
        animateSlider('#one', 'left');
        animateSlider('#two', 'right');
        
    });

    //JS for scroll animation
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
    });

    ScrollReveal().reveal(".title1", {delay:400, origin: 'left'});
    ScrollReveal().reveal(".chunk1 .image", {delay:500, origin: 'bottom', interval: 50});
    ScrollReveal().reveal(".chunk1 .text-box", {delay:550, origin: 'right'});

    //creating the overlays for the images 
    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');
    for (const eachBtn of openBtns){
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById(`ol-${thisBtn}`).className = 'overlay showing';
        });
    }

    for (const eachBtn of closeBtns){
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    //JS before/after slider
    document.querySelector(".compare #compare-ip").addEventListener("input", function(e){
        document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector(".compare #compare-ip").addEventListener("change", function(e){
        document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
    }) 

})();