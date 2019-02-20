


var chaos;
$( document ).ready(function()
{
    
    chaos=[$(".chaos").length];
    
    for(var i=0;i<$(".chaos").length;i++)
    {
        chaos[i]=new  kromleh_chaos($(".chaos").get(i));
    }
    
    
    
});

function kromleh_chaos(sSelector)
{
    
    var g = this;
    g.chaos=$(sSelector);
    g.chaos_elements=g.chaos.find(".photocard");
    g.chaos_elements.css("border-radius","50%");
   
    
    g.field_width=parseInt(g.chaos.css("width"));
    g.field_height=parseInt(g.chaos.css("height"));
    
   
    g.element_width=parseInt(g.chaos_elements.css("width"));
    g.element_height=parseInt(g.chaos_elements.css("height"));
    g.zoom_radius=g.element_width*3;
    g.maxWidth=g.field_width-g.element_width;
    
    g.maxHeight=g.field_height-g.element_height;
    g.activeelement;
     g.left=g.chaos_elements.css("left");
    g.help=0;
    g.Ismoove=true;
    g.IsZoome=false;
    g.timeinterval=1000;
    g.random=function(min,max)
    {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    


    
    g.load_elements=function(){
        
       for(var i=0;i<g.chaos_elements.length;i++)
            {
          
                $(g.chaos_elements[i]).css("left",g.random(0,g.maxWidth)+"px");
                $(g.chaos_elements[i]).css("top",g.random(0,g.maxHeight)+"px");
           
            
        }
      g.Ismoove=true;
    g.IsZoome=false;
    };
   
    g.load_elements();
     g.setpositions=function(){
     for(var i=0;i<g.chaos_elements.length;i++)
            {
          
                 $(g.chaos_elements[i]).css("left",g.random(0,g.maxWidth)+"px");
                $(g.chaos_elements[i]).css("top",g.random(0,g.maxHeight)+"px");
           
           
            
        }
     
  };
     g.chaos.click(function(){
         
       if((g.Ismoove==false)&(g.IsZoome==false))
            {g.Ismoove=true;}
         else
             {g.Ismoove=false;}
         
         
     });
    g.chaos_elements.click(function(){
        
    
        if(g.IsZoome==false)
            {
                if(g.field_width>g.field_height)
                    {
                       g.zoom_radius=g.field_height*0.9;
                        
                    }
                else
                    {
                      
                         g.zoom_radius=g.field_width*0.9;
                    }
            
                g.activeElement=this;
                
                $(this).css("left",(g.field_width-g.zoom_radius-10)/2+"px");
                $(this).css("top",(g.field_height-g.zoom_radius)/2+"px");
                
                $(this).css("z-index",60);
                $(this).css("width",g.zoom_radius+"px");
                $(this).css("height",g.zoom_radius+"px");
                g.IsZoome=true;
                $(this).css("border","5px solid white");
                $(this).css("box-shadow","0 0 30px rgba(0,0,0,0.9)");
            }
            else if (this==g.activeElement)
                {
                $(this).css("z-index",50);
                $(this).css("width",g.element_width+"px");
                $(this).css("height",g.element_height+"px");
                g.IsZoome=false;
                $(this).css("left",g.random(0,g.maxWidth)+"px");
                $(this).css("top",g.random(0,g.maxHeight)+"px");
                $(this).css("border","none");
                $(this).css("box-shadow","none");
                    g.activeElement=null;
                }
        
        
        event.stopPropagation();
    });
    g.elements_animation=function(){
          if((g.Ismoove==true)&(g.IsZoome==false))
            {
        g.setpositions();
            }
        else if(g.IsZoome==true)
            {
                
                
            }
    };
    window.setInterval(function(){g.elements_animation()},g.timeinterval);
    
    
    
    
    
}