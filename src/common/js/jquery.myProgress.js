/**
 * myProgress.js
 * Version: 1.1
 * Author: Mahuaide
 * Download:
 * You may use this script for free
 */
;
(function ($) {
    if (typeof($.fn.myProgress) != 'undefined') {
        return false;
    }
    $.fn.myProgress = function (options) {
        var defaults = {
            speed: 1000,
            percent: 100,
            width: "180px",
            height: "20px",
            direction: "left"
        }
        var opts = $.extend(defaults, options);
        $(this).each(function () {
            var this_ = $(this);
            var $percent = $(this).find("div.percent-show>span");
            var progress_in = $(this).find("div.progress-in");
            initCss(opts, $(this));
            var t = setInterval(function () {
                $percent.html(parseInt(progress_in.width() / this_.width() * 100))
            }, opts.speed / 100);
            progress_in.animate({
                width: opts.percent + "%"
            }, opts.speed, function () {
                clearInterval(t);
                t = null;
                $percent.html(opts.percent);
                opts.percent == 100 && progress_in.css("border-radius", 0);
            });
        });
        return $(this);
    }

    function initCss(options, obj) {
        obj.css({
            "width": options.width,
            "height": options.height
        }).find("div.percent-show").css({
            "lineHeight": options.height,
            "fontSize": Math.floor(parseInt(options.height) * 6 / 10) + "px"
        });
        options.direction == "right" ? obj.find("div.progress-in").addClass("direction-right")
            : obj.find("div.progress-in").addClass("direction-left");
    }
})(jQuery);
