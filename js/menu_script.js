jQuery(document).ready(function($){
   $('.navbar__burger').click(function(event) {
      $('.navbar').toggleClass('active');
   })
   $('.navbar__cross').click(function(event) {
      $('.navbar').removeClass('active');
   })
 });