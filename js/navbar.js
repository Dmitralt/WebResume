/*$('.topmenu').css('background-color','red');*/
var menu;
$( document ).ready(function()
{
    
    menu=[$(".topmenu").length];
    
    for(var i=0;i<$(".topmenu").length;i++)
    {
        menu[i]=new navbar_script($(".topmenu").get(i));
    }
    
    
    
});
              
function navbar_script(sSelector)
{
    var g = this;
    g.navbar=$(sSelector);
    g.topposition=g.navbar.offset().top;
    g.info=g.navbar.find(".info");
    g.counter=0;
    
    g.showposition=function(){return g.topposition - $(window).scrollTop();};
    g.changeposition=function(){if((g.topposition!=g.navbar.offset().top)&(g.navbar.hasClass("fixed_nav")==false))
           {g.topposition=g.navbar.offset().top;}
        if(g.topposition - $(window).scrollTop()<=0)
        {
            g.navbar.addClass("fixed_nav");
             
        }
        else
        {
            g.navbar.removeClass("fixed_nav");
              
        }};
    g.changeposition();
    $(window).scroll(function() 
    {
        g.changeposition();
            
    });
}


$(document).ready(function(){
	$(".topmenu").on("click","a", function (event) {
		
		event.preventDefault();

		
		var id  = $(this).attr('href'),

		
			top = $(id).offset().top;
		
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});