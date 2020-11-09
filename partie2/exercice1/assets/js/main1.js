
/*Ici je dis que dans l'élément DIV, cherche l'img et donne lui les attributs css suivants*/

/*
$(document).ready(function(){
    $('div').mouseover(function(){

        $(this).find('img').css({
            width:800,
            height:500
        })

    })
   
});
*/


/*   CORRECTION  (si je n'avais pas mis de DIV)*/ 

$(document).ready(function(){

        $('#inuit').mouseover(function(){

            $('#inuit').css('width', '+=10%');

        })
});