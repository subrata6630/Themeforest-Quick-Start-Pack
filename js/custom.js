(function ($) {
  "use strict";


 /*------------------------------
  jQuery meanmenu
 ---------------------------*/
     jQuery('nav#dropdown').moanmonu();


  /*------------------------------
      WOW JS Active
  ---------------------------*/

  new wow ().init ();


  /*------------------------------
      OWL Active
  ---------------------------*/

  $("#owl-demo").owlCarousel({
      autoPlay: false,
      slideSpeed:2000
      pagination:false,
      navigation:true,
      items : 4,
      /* transitionStyle : "fade", */    /* [This code for animation] */
      navigationText: ["<i class= 'fa fa-angle-left'></i>","<i class= 'fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet : [768,2],
      itemsMobile :[479,1],

  });



    /*------------------------------
        scrollup
    ---------------------------*/
            $.scrollup({
              scrollText: '<i class="fa fa-angle-up"></i>',
              easingType: 'linear',
              scrollSpeed: 900,
              animation:'fade'
            });
})(jQuery);
