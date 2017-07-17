$(document).ready(function() {

	$('.slide').slick({
		infinite: true
	});

	$('.doc_items').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots:true
	});


	$( "form" ).each( function() {
		$( this ).validate();
	} );
});
