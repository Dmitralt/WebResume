var carousel;
$( document ).ready(function()
{
    
    carousel=[$(".carousel").length];
    
    for(var i=0;i<$(".carousel").length;i++)
    {
        carousel[i]=new  kromleh_carousel($(".carousel").get(i));
    }
    
    
    
});

function kromleh_carousel(sSelector)
{
    var g = this;
    g.carousel=$(sSelector);
    g.carousel_elements=g.carousel.find(".photocard");
    g.left=g.carousel_elements.css("left");
    g.width=g.carousel_elements.css("width");
    g.progress=g.carousel.find(".progress");
    g.elements;
    
   
    g.carousel_elements.css("border","2px solid black");
   g.create_progressbar=function(){
       
        for(var i=0;i<g.carousel_elements.length;i++)
            {
            g.progress.append(' <div class="element noselect ">'+(i+1)+'</div>');
                
            }
       g.elements=g.progress.find(".element");
       
   };
    g.create_progressbar();
    g.load_elements=function(position){
        
       for(var i=0;i<g.carousel_elements.length;i++)
            {
            $(g.carousel_elements[i]).css("left",parseInt(g.left)+(parseInt(g.width))*(i-position)+"px");
            $(g.elements[i]).css("background-color","darkseagreen");
            
        }
        $(g.carousel_elements[position]).css("z-index","300");
        $(g.carousel_elements[position-1]).css("z-index","200");
        $(g.carousel_elements[position+1]).css("z-index","200");
       $(g.elements[position]).css("background-color","firebrick");
        
    };
   
    g.load_elements(0);
    
    
    g.carousel_elements.click(function(){    
       g.load_elements(g.carousel_elements.index($(this)));
        
    });
    g.elements.click(function(){    
       g.load_elements(g.elements.index($(this)));
        
    });
}