$(window).on("load",function(){
    setTimeout(
        function(){
            $(".LoadingAnimation").fadeOut("slow");
        },100);
});

$(document).ready(function(){
    $(window).scroll(function(){
        $(".fadeinAnimation").each( function(i){
            var bottom_of_object = null;
            if($(document).width() > 700){
                bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
            }else{
                bottom_of_object = $(this).offset().top + ($(this).outerHeight()/4);
            }
            
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},600);
                        
                }
        });
    });
    $(".WhatsappChat").hover(function(){
        $(".WhatsappName").animate({width: 'toggle'});
    },
    function(){
        $(".WhatsappName").animate({width: 'toggle'});
    });
});

function MobileMenuOpen(){
    document.getElementById("overlayMobile").style.display = "block";
}
function MobileMenuClose(){
    document.getElementById("overlayMobile").style.display="none";
}
function scroll(){
    var element = document.getElementById("home");
    element.classList.remove("active");
    var element = document.getElementById("about");
    element.classList.add("active");
}

window.onscroll = function(){
    if(document.body.clientWidth > 900){
        if((document.body.scrollTop > 50) || (document.documentElement.scrollTop > 50)){
            document.getElementById("Desktop_Navbar_Vcube").classList.add("not_transparant");
            document.getElementById("Desktop_Logo").classList.add("not_transparant_Logo");
        }
        else{
            document.getElementById("Desktop_Navbar_Vcube").classList.remove("not_transparant");
            document.getElementById("Desktop_Logo").classList.remove("not_transparant_Logo");
        }
    }
    else{
        if((document.body.scrollTop > 50) || (document.documentElement.scrollTop > 50)){
            document.getElementById("mobile_TopLayout").classList.add("background");
            document.getElementById("Mobile_Logo").classList.add("small_Logo");
        }
        else{
            document.getElementById("mobile_TopLayout").classList.remove("background");
            document.getElementById("Mobile_Logo").classList.remove("small_Logo");
        }
    }
    
}

$('.carousel').carousel({
    interval: 2000
})