( function(){
    'use strict';
    console.log('reaing js');

    window.addEventListener('load', function () {
    
        let sliderContent;
        let sliderWidth;
        let sliderContent2;
        let sliderWidth2;
        let fullSlider = document.querySelector('body');
        let fullSlider2 = document.querySelector('body');
        const clonedSlider = fullSlider.innerHTML;
        const clonedSlider2 = fullSlider.innerHTML;
    
        function animateSlider() {
            sliderContent = document.querySelector('.a');
            sliderWidth = sliderContent.offsetWidth;
            const cloned = sliderContent.cloneNode(true);
            cloned.className = "b";
            document.querySelector('#slider').appendChild(cloned);
            document.querySelector('#slider').style.left = `-${sliderWidth}px`;
            repeatAnimation();
        }
    
        animateSlider();
        function repeatAnimation() {
            fullSlider.addEventListener("transitionend", function () {
                console.log('going around again!');
                document.querySelector('body').innerHTML = clonedSlider;
                fullSlider = document.querySelector('#slider');
                animateSlider();
            });
        }

        function animateSlider2() {
            sliderContent2 = document.querySelector('.c');
            sliderWidth2 = sliderContent2.offsetWidth;
            const cloned2 = sliderContent2.cloneNode(true);
            cloned2.className = "d";
            document.querySelector('#slider2').appendChild(cloned2);
            document.querySelector('#slider2').style.left = `-${sliderWidth2}px`;
            repeatAnimation2();
        }
    
        animateSlider2();
        function repeatAnimation2() {
            fullSlider2.addEventListener("transitionend", function () {
                console.log('going around again!');
                document.querySelector('body').innerHTML = clonedSlider2;
                fullSlider = document.querySelector('#slider2');
                animateSlider2();
            });
        }
        
    });
})();