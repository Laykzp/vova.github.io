$(document).ready(function() {

	$(window).on("scroll", function() {

		if ($(this).scrollTop() > 400 ) {
			$(".btn-top").addClass("show");

		} else {
			$(".btn-top").removeClass("show");
		}
	});


	$(".anchor").click(function(event) {
		event.preventDefault();

		$("html, body").animate({
			scrollTop: $( $(this).attr("href") ).offset().top
		}, 1000);
	})

});