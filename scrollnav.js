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

    $el.find('a').on('click', function(e) {
      e.preventDefault();

      var id = $(this).attr('href').slice(1);
      scrollTo(id);
    });
  };

  $.fn.scrollNav = function (options) {
    return new scrollNav(this, options);
  }

  function scrollTo(id, ms) {
    $('html, body').animate({
      scrollTop: $('#' + id).offset().top
    }, {
      complete: function() {
        window.location.hash = id;
      }
    }, ms || 500);
  }
})(jQuery, window, document);
