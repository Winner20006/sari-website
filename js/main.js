$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                
            }
        });            
    }

})






setTimeout(function() {
    window.location.href = "/index.html"; // Redirect to the root (index.html)
}); // Redirect after 3 seconds (adjust as needed)