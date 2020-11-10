$(document).ready(function(){

//Pour appeler un nombre aléatoire
var randomNumber = Math.floor(Math.random() * 100) +1;

//Pour le compteur
var count = 0; $("#click").click(function() { 
    count++; $("#container").html("Nombre d'essais "+count); 
});

//Pour les boîtes de dialogue
    $('#click').click(function(){
        var nombre = document.getElementById('nombre').value;

    if ( nombre < randomNumber ) {
        alert('c\'est plus');
    }

    if ( nombre > randomNumber ) {
        alert('c\'est moins');
    }
    
    if ( nombre == randomNumber ) {
        alert('c\'est correct !' + '/n' + ' Vous avez essayé ' +count+ " fois");
    }
});
});