
function yscroll_to(selector)
{
	$(selector).on( "click", function(event) {
		
		targ = $(this).attr('href');
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $(targ).offset().top-100
		}, "slow");
		
		return false;
	});
}//end yscroll_to

///////lightbox////////
function y_lightbox(selector,open_selector,close_selector)
{
	$(selector).hide();

	$(selector).addClass("lightbox");
	//open lightbox
	$(open_selector).on('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$(selector).show();
		$(".ytop_bar").animate({width:'toggle'},350);
	});
	//Click anywhere on the page to get rid of lightbox window
	$(close_selector).on('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$(selector).hide();
		$(".ytop_bar").animate({width:'toggle'},350);
	});
	$(".lightbox").on('click', function(e) { //must use live, as the lightbox element is inserted into the DOM
		
		    if($(e.target).is(this))
			{
				$(this).hide();
				$(".ytop_bar").show(200);
			}
	});
	 
	 //if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {}
	
}

function y_show_more(selector,open_selector,close_selector)
{
		$(selector).hide();

	
	$(open_selector).on('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$(this).hide(500);
		$(selector).animate({height:'toggle'},350);
	});
	//Click anywhere on the page to get rid of lightbox window
	$(close_selector).on('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$(open_selector).show();
		$(selector).animate({height:'toggle'},350);
	});
}

function y_faq(selectior)
{
	var content = $(selectior).next();
	content.hide();
	$(selectior).on('click', function(event) { 
		event.preventDefault();
	    content = $(this).next();
		$(selectior).next().slideUp();
		content.slideToggle(200);
	});
	
}//end y_faq

function y_product_show(selector, yparent,close,yhide)
{
	$(close).hide();
	
	$(selector).on('click', function(event) { 
		event.preventDefault();
		text = $(this).next("p").html();
		texth2 = $(this).text();
		$(yparent).hide();
		$(close+" p").html(text);
		$(close+" h2").text(texth2);
		$(close).show(500);
		//scroll to
		$('html, body').animate({
			scrollTop: $(yparent).parent().offset().top-100
		}, "slow");
		
	});
	$(close+" ").on('click', function(event) 
	{
		event.preventDefault();
		$(yparent).show(200);
		$(close+" p").html("");
		$(close).hide(100);
		$(yhide).hide();
	});
}