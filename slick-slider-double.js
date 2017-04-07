/* main-spec-slick */
	$('#sl-spec').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '#sl-nav',
		
		speed: 600,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					dots: true,
					fade: false,
					speed: 300,
				}
			}
		]
	});
			
	$('#sl-nav').slick({
		useTransform: false,
		cssEase: 'cubic-bezier(0, 0, 0, 0.4)',
		variableWidth: true,
		speed: 150,
		
		centerMode: true,
		asNavFor: '#sl-spec',
		centerPadding: '0',
		slidesToScroll: 1,
		draggable: false,
		arrows: true,
		prevArrow: '<div class="slick-prev"><div class="arrow-left"></div></div>',
		nextArrow: '<div class="slick-next"><div class="arrow-right"></div></div>',
		slidesToShow: 7,
		infinite: true,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 567,
				settings: {
					arrows: false,
					centerPadding: '0',
					dots: true,
					centerMode: true,
					slidesToShow: 1
				}
			},
		]
	});	
	/* end main-spec-slick */
