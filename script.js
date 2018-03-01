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
