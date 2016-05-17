/*global hljs */
(function($, Drupal) {
  'use strict';

  // A demo Drupal behavior
  Drupal.behaviors.customBehavior = {
    attach: function(context, settings) {
      //$('body', context).prepend('Demo drupal behavior in js/script.js');
      //console.log('Drupal behavior from js/script.js');
    }
  };
  Drupal.behaviors.HighlightJsStartup = {
    attach: function(context, settings) {
      //$('body', context).prepend('Demo drupal behavior in js/script.js');
      hljs.initHighlightingOnLoad();
      //console.log(hljs.listLanguages());
    }
  };
  // @todo import select2
  //Drupal.behaviors.select2 = {
  //  attach: function(context, settings) {
  //    // INIT SELECT2
  //    $("select", context).select2({
  //      placeholder: "Select an option"
  //    });
  //  }
  //};
  Drupal.behaviors.before_after = {
    attach: function(context, settings) {
      // data-attr before
      function attr_dupe(el) {
        $(el).attr('data-dupe-text', $(el).text());
      }
      // init
      $('.site-name [class*="word-"]').each(function(){
        attr_dupe($(this), true, true);
      });
    }
  };

  Drupal.behaviors.title_curve = {
    attach: function(context, settings) {
      $('.title-curve').lettering();
    }
  };

  Drupal.behaviors.menu_auto_show = {
    attach: function(context, settings) {
      if ($('.nav-primary').css("z-index") == 3) {
        $('#nav-primary-trigger').click();
      }
    }
  };

  Drupal.behaviors.detect_touch = {
    attach: function(context, settings) {
      if(Modernizr.touch) {
        // this browser claims to support touch, so remove fixed background
        $('.po-item--link').addClass('touch-detected');
      }
    }
  };

  Drupal.behaviors.button_image_cycle = {
    attach: function(context, settings) {
      function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var $this_image = getRandomIntInclusive(1, 10);
      $('.button-logo').addClass('image-' + $this_image);
    }
  };

  Drupal.behaviors.batman_audio = {
    attach: function(context, settings) {
      var audio = $("#batman")[0];
      $('#footer-monogram').mouseenter(function() {
        audio.play();
      });
    }
  };


})(jQuery, Drupal);

