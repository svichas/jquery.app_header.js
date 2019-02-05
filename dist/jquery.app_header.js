(function($) {
'use strict';
     $.fn.app_header = function(opts) {

          var options = $.extend({}, {
                    "maxWidth": -1
               }, opts),
               $this = $(this),
               scrollTop = $(window).scrollTop(),
               translateY = 0;

          // attach events
          $(window).on("scroll resize", set_header_transition);

          // method to set transition to header
          function set_header_transition(event) {

               if ($(window).width() > options.maxWidth
                    && options.maxWidth != -1) {
                    return false;
               }

               // caclulate translateY
               var currentScrollTop = $(window).scrollTop(),
                    headerTop = $this.offset().top;

               translateY += scrollTop - currentScrollTop;

               // min/max value for translateY
               if (translateY > 0) {
                    translateY = 0;
               } else if (translateY < $this.height() * -1) {
                    translateY = $this.height() * -1;
               }

               // set css
               $this.css("transform", "translateY("+(translateY)+"px)");

               // change scrollTop
               scrollTop = currentScrollTop;
          }

     }

})(jQuery);
