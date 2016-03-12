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

  Drupal.behaviors.before_after = {
    attach: function(context, settings) {
      $('.title-curve').lettering();
    }
  };


})(jQuery, Drupal);

