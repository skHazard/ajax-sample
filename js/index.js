$(function(){
    $('#btn-send').click(sendForm);
    
});

function sendForm(e){
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/kolesnuk_serg@komitex.net", 
    method: "POST",
    data: {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#msg').val()
        
    },
    dataType: "json",
    success: function(){
        $('#thanks').html('Thank you for contacting us!');
    }
});
}