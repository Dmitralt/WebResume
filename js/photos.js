var alboms;
$( document ).ready(function()
{
    
    alboms=[$(".circle-albom").length];
    
    for(var i=0;i<$(".circle-albom").length;i++)
    {
        alboms[i]=new circle_galary($(".circle-albom").get(i));
    }
    
    
    
});
         
function circle_galary(sSelector)
{
    
    var g=this;
    g.circle_albom = $(sSelector);
    g.photocard= g.circle_albom.find(".photocard");
    g.albom_preview= g.circle_albom.find(".albom-preview");
    g.button_prev=g.circle_albom.find(".arrow-prev");
    g.button_next=g.circle_albom.find(".arrow-next");
    g.positions=NaN;
    g.displacement=NaN;
    g.angle=360;
    g.loadcards=function()
    {
        g.positions=[g.photocard.length];
        g.displacement=[g.photocard.length];
        g.angle=360/g.photocard.length;
        $(g.photocard).css("transition","all 0s");
        g.albom_preview.prepend("<img>");
        $(g.albom_preview.find("img")).attr("src",$( $(g.photocard.get(0)).find("img")).attr("src"));
        //alert(g.photocard.length);
        for(var i=0;i<g.photocard.length;i++)
        {
            $(g.photocard.get(i)).css("transform","rotate("+i*g.angle+"deg)");
            g.positions[i]=i;
            
            if(i<=g.photocard.length/2)
            {
                g.displacement[i]=0-i;
            }
            else
            {
                g.displacement[i]=g.photocard.length-i;
            }
        }
        

    }
    function rotate(steps){
        
        $(g.photocard).css("transition","all 1s");        
        g.angle=360/g.photocard.length;
        for(var i=0;i<g.photocard.length;i++)
        {
            if(g.displacement[i]==steps)
            {
                $(g.albom_preview.find("img")).attr("src",$(g.photocard[i]).find("img").attr("src"));
            }
            g.positions[i]=g.positions[i]+steps;
            g.displacement[i]=g.displacement[i]-steps;
            if(g.displacement[i]>=g.photocard.length/2)
            {
                g.displacement[i]=0-(g.photocard.length-g.displacement[i]);
            }
            if(g.displacement[i]<=0-(g.photocard.length/2))
            {
                g.displacement[i]=g.photocard.length+g.displacement[i];
            }
            $(g.photocard.get(i)).css("transform","rotate("+(g.positions[i])*g.angle+"deg)");
        }
    
    
    }

    g.photocard.click(function()
    {
        rotate(g.displacement[g.photocard.index($(this))]);  
    });
    g.button_prev.click(function(){rotate(-1);});
    g.button_next.click(function(){rotate(1);});
    g.loadcards();
}
   
