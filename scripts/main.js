// When the document loads
$(document).ready(function(){

    console.log("Hello" );

    // -----------------------------------------------------------------------------
    // Home Page

    // When the hero image loads animate it upwards
    $( ".hero-image" ).animate({top: '-=100px'})
    
    // -----------------------------------------------------------------------------
    // Browse Page

    // Hide the description text from the plant card
    $("#descriptionText").hide();

});

// When the plant card is clicked
$(".card").click(function(){

    // Toggle the price and description text
    $("#descriptionText").toggle();
    $("#priceText").toggle();

    // Resize the plant image to fit additional content
    $(".card-img-top").toggleClass("small");

})

// When the Remove btn is clicked
$("#removeButton").click(function(){

    // Remove row from function
})