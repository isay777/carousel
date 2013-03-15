(function($) {
  $.fn.PictureCarousel = function() {
    var $this = $(this);

    var activeElements = $this.find("li.active");

    if(activeElements.length == 0) {
      throw new Error("There's no active element in the carousel, please set active class to one <li> tag");
    } else if(activeElements.length > 1) {
      throw new Error("There's is more than one active element in the carousel, please remove active class from a <li> tag");
    }

    

    return $this.each(function() {
      var previous = $this.find("a.prev");
      var next = $this.find("a.next");
      
      previous.click(left);
      // next.click(right);

      function left() {
        if(activeElements.prev().length === 0) {
          $(".elementy").append(activeElements); //can I do that?
        }


        activeElements.prev().addClass("active");
        activeElements.removeClass("active");

        activeElements = $this.find("li.active");

      };
    });
  };
})(jQuery);

//this. = $($(this).attr('.active'));