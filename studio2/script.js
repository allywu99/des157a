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
    ScrollReveal().reveal(".level", {delay:400, origin: 'right'});
    ScrollReveal().reveal(".title", {delay:400, origin: 'left'});
    ScrollReveal().reveal(".chunk .image", {delay:500, origin: 'bottom', interval: 50});
    ScrollReveal().reveal(".chunk .text-box", {delay:500, origin: 'right'});

    //creating the overlays for the images 
    const openBtns = document.querySelectorAll('.caption');
    const closeBtns = document.querySelectorAll('.close');
    for (const eachBtn of openBtns){
        // console.log(eachBtn);
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            const thisBtn = this.id;
            // console.log(thisBtn);
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
    document.querySelector(".compare #compare-ip1").addEventListener("input", function(e){
        document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector(".compare #compare-ip1").addEventListener("change", function(e){
        document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector("#ol-serina1 .compare #compare-ip2").addEventListener("input", function(e){
        document.querySelector("#ol-serina1 .compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector("#ol-serina1 .compare #compare-ip2").addEventListener("change", function(e){
        document.querySelector("#ol-serina1 .compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector("#ol-serina2 .compare #compare-ip3").addEventListener("input", function(e){
        document.querySelector("#ol-serina2 .compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector("#ol-serina2 .compare #compare-ip3").addEventListener("change", function(e){
        document.querySelector("#ol-serina2 .compare .before .after").style.width = (+e.target.value) + "px";
    }) 
    document.querySelector("#ol-lauren .compare #compare-ip4").addEventListener("input", function(e){
        document.querySelector("#ol-lauren .compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector("#ol-lauren .compare #compare-ip4").addEventListener("change", function(e){
        document.querySelector("#ol-lauren .compare .before .after").style.width = (+e.target.value) + "px";
    }) 
    document.querySelector("#ol-milap .compare #compare-ip5").addEventListener("input", function(e){
        document.querySelector("#ol-milap .compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector("#ol-milap .compare #compare-ip5").addEventListener("change", function(e){
        document.querySelector("#ol-milap .compare .before .after").style.width = (+e.target.value) + "px";
    })
    document.querySelector("#ol-linh .compare #compare-ip6").addEventListener("input", function(e){
        document.querySelector("#ol-linh .compare .before .after").style.width = (+e.target.value) + "px";
    }) 

    document.querySelector("#ol-linh .compare #compare-ip6").addEventListener("change", function(e){
        document.querySelector("#ol-linh .compare .before .after").style.width = (+e.target.value) + "px";
    })
})();