
var $ = jQuery.noConflict();
$( document ).ready(function() {
				
		y_lightbox('.ylightbox_terms','.ylightbox_terms_open',".yclose_lightbox")	
			
			
			
			
			
			
		});



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