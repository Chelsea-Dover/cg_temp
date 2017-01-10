/**
 * Created by Chelsea on 1/9/17.
 */

$(function openNav() {
    $(' #icon ').click(function(e) {
        console.log('Hello there!');
        $(' #menu-main-menu ').toggleClass('top-nav');
    })
});