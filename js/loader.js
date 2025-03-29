window.addEventListener('load', function () {

    setTimeout(function () {
        document.body.classList.add('loaded');

      
        const animatedElements = document.querySelectorAll('.animated-element');
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }, 500); 
});


const dots = document.querySelector('.dots');

