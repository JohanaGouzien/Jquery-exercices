/*
$(document).ready(function(){

$('#green').mouseover(function(){
    $('#text').css('color', 'green');

    });

$('#red').mouseover(function(){
    $('#text').css('color', 'red');

    });

$('#blue').mouseover(function(){
    $('#text').css('color', 'blue');

    });

});


$(document).ready(function(){
    $('div').mouseout(function(){

        $('#text').css('color','black');
   
    });    

}); */

// En utilisant les div 

$(document).ready(function(){
    $('.color').mouseover(function(){
        $('#text').css('color', this.id);
    });
        $('.color').mouseout(function(){
            $('#text').css('color', 'black');
        });
});
