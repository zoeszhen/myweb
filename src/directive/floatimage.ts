import * as angular from "angular";

// @ngInject
export function panning() {
	var link = function(scope, element) {

		var movementStrength = 25;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();

		$(".title").mousemove(function(e) {
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 50;
          var newvalueY = height * pageY * -1 - 90;
          var style ={
			  left:newvalueX+55 + "px",
			  top:newvalueY+93 + "px"
          }
		  $('.title').css("background-position", newvalueX + "px " + newvalueY + "px");
		  $('.floating-function').css(style);
		});
	}

	return {
		restrict: "A",
		link:link
	};
}
