// -----------------------------------------------------------------------------
// Plants Array
// -----------------------------------------------------------------------------

const arrPlants = [
    {
        name: "Ficus Tree",
        price: 350,
        description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brightens any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior decor.",
        image: "plant1.png"
    },
    {
        name: "White Sprite Succulent",
        price: 200,
        description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
        image: "plant2.png",
    },
    {
        name: "Snake Plant",
        price: 400,
        description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
        image: "plant3.png",
    },
    {
        name: "Parlour Palm",
        price: 350,
        description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
        image: "plant4.png",
    },
    {
        name: "Japanese Maple",
        price: 1200,
        description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
        image: "plant5.png",
    },
];

// -----------------------------------------------------------------------------
// When the document loads
// -----------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello" );

    // -----------------------------------------------------------------------------
    // Home Page

    // When the hero image loads animate it upwards
    $( ".hero-image" ).animate({top: '-=100px'})
    
    // -----------------------------------------------------------------------------
    // Browse Page

    // Loads plants function
    loadplants();

    // -----------------------------------------------------------------------------
    // Wishlist Page

    // When the Remove btn is clicked remove the row
    $(".removeButton").click(function(){
        $(this).closest("tr").remove();
    })

});

// -----------------------------------------------------------------------------
// Load all plants
// -----------------------------------------------------------------------------

function loadplants() {

    console.log(arrPlants);

    for (let i = 0; i < arrPlants.length; i++) {
        const plant = arrPlants[i];

        console.log(plant);
        
        // 1: Select the plants container and add the current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        
        // 2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantsContainer").children().eq(i+1);

        // 3: Set the content for current plant card from the plants array
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        $(currentChild).find(".card-img-top").attr('src', '../assets/Plants/' + plant.image);

        // 4: Hide the description text from the current card item
        $(currentChild).find("#descriptionText").hide();

    }

};

// -----------------------------------------------------------------------------
// When the plant card is clicked
// -----------------------------------------------------------------------------

$("#plantsContainer").on('click', '.card' , function() {

    // Toggle the price and description text
    $(this).find("#descriptionText").toggle();
    $(this).find("#priceText").toggle();

    // Resize the plant image to fit additional content
    $(this).find(".card-img-top").toggleClass("small");

});
