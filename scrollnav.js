;(function ($, window, document) {
  var defaults = {};

  function scrollNav(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options) ;

    this.init();
    return element;
  }

  scrollNav.prototype.init = function () {
    $el = $(this.element);

    $(window).bind('hashchange', function(e) {
      checkHash();
    });

    checkHash();
  };

  $.fn.scrollNav = function (options) {
    return new scrollNav(this, options);
  }

  function checkHash() {
    if (window.location.hash.slice(0, 3) === '#!/') {
      var id = window.location.hash.slice(3);
      scrollTo(id);
    }
  }

  function scrollTo(id, ms) {
    $('html, body').animate({
      scrollTop: $('#' + id).offset().top
    }, ms || 500);
  }
})(jQuery, window, document);
