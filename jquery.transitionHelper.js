/*! jQuery.transitionHelper, v0.2 | MIT */
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
			}[ Modernizr.prefixed('transition') ],

			animationend: {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'MozAnimation'    : 'animationend',
				'OAnimation'      : 'oAnimationEnd oanimationend',
				'msAnimation'     : 'MSAnimationEnd',
				'animation'       : 'animationend'
			}[ Modernizr.prefixed('animation') ]
		};

	var helper = function (event, callback, off) {
		callback = callback || function () {};
		if (EVENTS[event]){
			return (off ? this.off : this.on).call(this, EVENTS[event] + '.transitionHelper', function (ev) {
				//ignore events bubbling from descendants
				if (ev.target !== this) {
					return ;
				}
				$(this).off(EVENTS[event] + '.transitionHelper').removeClass('transition-helper');
				callback.call(this, ev);
			}).toggleClass('transition-helper', !off);
		} else {
			callback.call(this);
			return this;
		}
	};

	$.fn.transitionHelper = function (callback, off) {
		return helper.call(this, 'transitionend', callback, off);
	};

	$.fn.animationHelper = function (callback, off) {
		return helper.call(this, 'animationend', callback, off);
	};

}(jQuery, this));
