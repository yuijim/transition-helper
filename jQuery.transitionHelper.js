/*! jQuery.transitionHelper, v0.1 | MIT */
/**
 * @fileOverview Micro plugin to help with CSS transitions
 *
 * @copyright Copyright (c) 2013 Urszula Ciaputa (http://urszula.ciaputa.com)
 * @author Urszula Ciaputa <urszula@ciaputa.com>
 *
 * @version 0.1
 * @license http://www.opensource.org/licenses/mit-license.php
 */
/*jslint unparam: true, browser: true */
/*global jQuery, Modernizr */

/**
 * jQuery
 *
 * @name jQuery
 * @namespace
 *
 * This just documents the function and classes that are added to jQuery
 * by this plug-in.
 * @see <a href="http://jquery.com/">jQuery Library</a>
 */
/**
 * jQuery.fn
 *
 * @name fn
 * @memberOf jQuery
 * @namespace
 *
 * This just documents the function and classes that are added to jQuery
 * by this plug-in.
 * @see <a href="http://jquery.com/">jQuery Library</a>
 */
/**
 * Modernizr
 *
 * @name Modernizr
 * @namespace
 *
 * @see <a href="http://modernizr.com/">Modernizr Library</a>
 */
/**
 * Modernizr.prefixed
 *
 * @name prefixed
 * @memberOf Modernizr
 * @function
 *
 * @see <a href="http://modernizr.com/docs/#prefixed">Modernizr.prefixed() Docs</a>
 */

;(function ($, window, undefined) {

	"use strict";

	var EVENTS = {
			transitionend: {
				'WebkitTransition' : 'webkitTransitionEnd',
				'MozTransition'    : 'transitionend',
				'OTransition'      : 'oTransitionEnd otransitionend',
				'msTransition'     : 'MSTransitionEnd',
				'transition'       : 'transitionend'
			}[ Modernizr.prefixed('transition') ]
		};

	$.fn.transitionHelper = function (callback, off) {
		callback = callback || function () {};
		if (EVENTS.transitionend){
			return (off ? this.off : this.one).call(this, EVENTS.transitionend + '.transitionHelper', function () {
				$(this).removeClass('transition-helper');
				callback.call(this);
			}).toggleClass('transition-helper', !off);
		} else {
			callback.call(this);
			return this;
		}
	};

}(jQuery, this));
