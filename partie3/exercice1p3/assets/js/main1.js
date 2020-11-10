




    var randomNumber = Math.floor(Math.random() * 100) +1;

    (function sendData(){
        var nombre = document.getElementById('nombre').value;

    if ( randomNumber > nombre) {
        alert('c\'est plus');
    }
    if (randomNumber < nombre) {
        alert ('c\'est moins');
    }

    if (randomNumber = nombre) {
        alert ('c\'est correct');
    }   
});

/*$('#paris').submit(function(event){
    paris = $('#nombre').val();

    if (paris == prix) {
        $('.reponse').html('C\'est correct');
    }

    else if (paris<prix){
        $('.reponse').html('C\'est plus');
    }

    else if (paris>prix){
        $('.reponse').html('C\'est moins');
    }

    //$('#nombre').val('');

    // event.preventDefault();


});

}); 
