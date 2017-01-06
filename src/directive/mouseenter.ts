import * as angular from "angular";

// @ngInject
export function mouseenter() {
	var link = function(scope, element) {

		$(".sharps-position").mouseenter(function() {
			$('#square-big').css("opacity", 0.5);
			$('#square-small').css("opacity", 0.5);
			$('#square-mid').css("opacity", 0.5);
			$('h3').css("visibility", 'hidden');
		});

		$(".sharps-position").mouseleave(function() {
			$('#square-big').css("opacity", 1);
			$('#square-small').css("opacity",1);
			$('#square-mid').css("opacity", 1);
			$('h3').css("visibility", 'visible');
		});
	}

	return {
		restrict: "A",
		link: link
	};
}
