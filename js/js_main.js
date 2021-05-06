$(document).scroll(function(){

var y = $(document).scrollTop();
var h = $(document).height() - $(window).height();
var scrolled = (y/h) * 100;

$(".bar").css("width", scrolled + "%");

});
