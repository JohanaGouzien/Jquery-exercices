//Donner aux élément 'li' l'attribut = texte rouge

/*$(document).ready(function() {

        $('li').css("color", "red");
      

}); */

/*Correction Tous les enfants de UL sont rouges*/
$(document).ready(function(){
$('ul').children().css('color', 'red');

});

//On peut cibler chaque enfant ex:firstChildren ... parent//