/**
 * Created by Chelsea on 12/27/16.
 */

var onScreen = true;

$(window).scroll(function() {
    if (onScreen === true) {
        var scroll = $(window).scrollTop();

        var srotate = "translate(" + scroll / 2 + "px,-" + scroll / 2 + "px)";
        $(" .rocket ").css({"-moz-transform": srotate, "-webkit-transform": srotate});
    }
});

var waypoint = new Waypoint({
    element: document.getElementById('wayOrange'),
    handler: function() {
        onScreen = !onScreen;
    }
});