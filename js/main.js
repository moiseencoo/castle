$(document).ready(function(){

  $("#main-carousel .items").owlCarousel({
  		items: 1,
  		loop: true,
  		nav: true,
  		navText: false,
  		autoplay: true,
  		autoplaySpeed: 1500
  });

  $("#socials-carousel").owlCarousel({
  		items: 3,
  		loop: true,
  		nav: true,
  		navText: false,
  		margin: 30, 
  		responsive : {
  			0: {  				
  				items:1,
  				nav:false
  			},
		    768:{
		    	items:2
	        },
    	    991:{
    	    	items:3
            }
		}
  });

});

var picker = new Pikaday({
	field: $('#datepicker')[0] 
});