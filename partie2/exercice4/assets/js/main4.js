
$(document).ready(function(){

    $('#green').click(function(){
        $('#text').css('color', 'green');

    });

    $('#red').click(function(){
        $('#text').css('color', 'red');

    });

    $('#blue').click(function(){
        $('#text').css('color', 'blue');

    });


});

// Deuxième méthode
 /*$(document).ready(function(){
    $('.color').click(function() {
        var divcolor=$(this).attr('id');
        $('#text').css('color',divcolor);
    });

});*/

//En utilisant la class .color, on peut ajouter autant de couleurs possibles dans le CSS sans avoir à changer
// le JS 

//Méthode encore plus courte

/*$(document).ready(function(){
    $('color').click(function(){

        $('#text').css('color', this.id);
    });
}); */

//le this.id correspond à la ligne 25, (soit la valeur de la variable)