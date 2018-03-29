function bougerHaut(){
$("#flappy").animate({marginBottom:'+=100px'}, speed=200, easing="swing");
     }

function bougerBas(){
$("#flappy").animate({marginTop:'+=100px'}, speed=200, easing="swing");
     }

function bougerGauche(){
$("#flappy").animate({marginRight:'+=100px'}, speed=200, easing="swing");
     }

function bougerDroite(){
$("#flappy").animate({marginLeft:'+=100px'}, speed=200, easing="swing");
     }





$(document).keyup(function(touche){
           var appui = touche.which || touche.keyCode;
           if(appui == 38){
               bougerHaut();
           }
});


$(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if(appui == 40){
                bougerBas();
           }
});


$(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if(appui == 37){
                bougerGauche();
           }
});


$(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if(appui == 39){
                bougerDroite();
           }
});


function tuyau(){
    var n = Math.random();
    n = n * 200;
    n = n + 200;
    var n = Math.round(n);

    $("#section").append('<div class="pipe" id="pipe"></div>');
    $(".pipe").css("top","-"+ n+"px");
    $(".pipe").animate({marginRight:"+=450px"},2000);
}
setInterval(tuyau, 2000);
