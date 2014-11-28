jQuery.transitionHelper
=================

Tiny jQuery- &amp; Modernizr-dependent plugin helping with simple CSS transitions &amp; animations.

Usage
-----------------

    $('.element-to-be-animated-right-now').transitionHelper([callback]);
    $('.element-to-be-animated-right-now').transitionHelper([{
      callback: function() {},
      off: false,
      timeout: 0,
    }]);

    $('.element-to-be-animated-right-now').animationHelper([callback]);
    $('.element-to-be-animated-right-now').animationHelper([{
      callback: function() {},
      off: false,
      timeout: 0,
    }]);
