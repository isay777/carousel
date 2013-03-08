(function($) {
  $.fn.PictureCarousel = function() {
    var $this = $(this);

    var activeElements = $this.find("li.active");

    if(activeElements.length == 0) {
      throw new Error("There's no active element in the carousel, please set active class to one <li> tag");
    } else if(activeElements.length > 1) {
      throw new Error("There's is more than one active element in the carousel, please set active class to one <li> tag");
    }

    

    // return this.each(function() {
    //   this. = $($(this).attr('.active'));
    //   $(this).click(klik);
    // });

    // function klik() {

    // }
  };
})(jQuery);