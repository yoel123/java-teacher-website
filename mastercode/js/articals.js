$( document ).ready(function() {
	click_load(".yload_link",".art_content");
	yscroltop(".scroltop")
});


function click_load(selector,target)
{
	  $(document).on( "click", selector,function(event) {
		   data =$(this).attr("ydata") 
           $(target).load(data+".txt").hide().fadeIn();
		    event.preventDefault();
			return;	
    });
}

function yscroltop(selector)
{
	$(selector).click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	 
	});
}