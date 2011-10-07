/*!
Deck JS - deck.title - v1.0
Copyright (c) 2011 James C Russell
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
<section class="slide" id="intro" title="Introduction to Deck.js">
  <!-- content -->
</section>
*/

(function ($, deck, window, undefined) {
  /* Update page title on a slide change */
  $(document).bind('deck.change', function(_, _, index) {
    var section = $.deck("getSlide", index)[0];
    if (section.title) {
      document.title = section.title;
    };
  });
})(jQuery, 'deck', this);
