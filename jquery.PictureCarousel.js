(function($) {
  $.fn.PictureCarousel = function() {
    var item_width = $('.slides li').outerWidth();
    var left_value = item_width * (-1);

    return $(this).each(function() {

      $('.prev').click(move_left);
      $('.next').click(move_right);

      /* Put the last element before the first one, so there's something to
      click 'prev' to, and move to the left to still show the first element */
      $('.slides li:first').before($('.slides li:last'));
      $('.slides').css({'left' : left_value});

      function move_left() {
        // get target position
        var left_indent = parseInt($('.slides').css('left')) + item_width;

        $('.slides').animate({left : left_indent}, 200, function() {
          $('.slides li:first').before($('.slides li:last')); /* move last
          element to the beginning of the list */
          $('.slides').css({'left': left_value}); // move list left
        });

        return false; // prevent default action
      };

      function move_right() {
        // get target position
        var left_indent = parseInt($('.slides').css('left')) - item_width;

        $('.slides').animate({left : left_indent}, 200, function() {
          // move first element to the end of the list
          $('.slides li:last').after($('.slides li:first'));
          $('.slides').css({'left': left_value}); // move list right
        });
        return false; // prevent default action
      };

    });
  };
})(jQuery);
