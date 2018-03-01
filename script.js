function saut() {
  $("#flappy").css({marginBottom:'300px'})
}

function sauter(){
  $("#flappy").animate({marginBottom: "+=100px"},speed=20,easing="swing");
  $("#flappy").animate({marginBottom: "+=200px"},speed=20,easing="swing");
  $("#flappy").animate({marginBottom: "+=-100px"},speed=20,easing="swing");
}
// $("#flappy").click(function(){
// alert("Coucou")
// });

$("#flappy").click(function(touche){
  console.log(touche);
});

$("#flappy").keydown(function(touche){
  alert('tr');
  console.log(touche);
});



//$( "#flappy" ).keydown(function() {
  //alert( "Handler for .keydown() called." );
//});

function deplacement_vertical(sens){
  if(sens == 1){
    deplacement = "+=100px";
  }
  else{
    deplacement = "-=100px";
  }
  $("#flappy").animate(
    {
      "marginTop": deplacement
    },
    500,
    'swing'
  )
}


$("img").ready( function () {
$("img").on('click',function () {
  alert("FLAPPY EST DANS L'ESPACE !!!");
    });
});




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

$("#flappy").click (function (touche) {
alert("Coucou");
console.log(touche);
});

$("#flappy").click(function (touche) {
   console.log(touche.type);
});


$(document).keydown(function (bra) {
if (bra.keyCode == 65){
alert("A");
}
});
