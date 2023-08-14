// -----------------------------------------------------------------------------
// Plants Array
// -----------------------------------------------------------------------------

const arrPlants = [
    {
        name: "Ficus Tree",
        price: 350,
        description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brightens any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior decor.",
        image: "plant1.png",
        lightAmount: "low",
        addedDate: "2023-03-25",
    },
    {
        name: "White Sprite Succulent",
        price: 200,
        description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
        image: "plant2.png",
        lightAmount: "bright",
        addedDate: "2023-01-21",
    },
    {
        name: "Snake Plant",
        price: 400,
        description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
        image: "plant3.png",
        lightAmount: "low",
        addedDate: "2023-02-18",
    },
    {
        name: "Parlour Palm",
        price: 350,
        description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
        image: "plant4.png",
        lightAmount: "low",
        addedDate: "2023-07-01",
    },
    {
        name: "Japanese Maple",
        price: 1200,
        description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
        image: "plant5.png",
        lightAmount: "bright",
        addedDate: "2023-05-13",
    },
];

let appliedFilter = "";
let appliedSort = "date added";

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
    filterSortPlants();

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

function loadPlants(plantsToShow) {

    console.log(plantsToShow);

    // Clear all elements in plants container

    $("#plantsContainer").empty();

    // Loop through plants

    for (let i = 0; i < plantsToShow.length; i++) {
        const plant = plantsToShow[i];

        console.log(plant);
        
        // 1: Select the plants container and add the current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        
        // 2: Create a variable that contains the most recently added plant card
        let currentChild = $("#plantsContainer").children().eq(i);

        // 3: Set the content for current plant card from the plants array
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        $(currentChild).find(".card-img-top").attr('src', '../assets/Plants/' + plant.image);

        // 4: Hide the description text from the current card item
        $(currentChild).find("#descriptionText").hide();

    };

};

// -----------------------------------------------------------------------------
// When a filter or sort is clicked
// -----------------------------------------------------------------------------

$("input[name='filterRadio']").click(function() {
    appliedFilter = $(this).attr('value');


    console.log(appliedFilter);
    filterSortPlants();
});

$("input[name='sortRadio']").click(function() {
    appliedSort = $(this).attr('value');


    console.log(appliedSort);
    filterSortPlants();
});

function filterSortPlants() {

    let filteredSortedArrPlants = [];

    // Filter plants

    if (appliedFilter) {
        filteredSortedArrPlants = arrPlants.filter(plant => plant.lightAmount == appliedFilter);
    } else {
        filteredSortedArrPlants = arrPlants;
    }

    // Sort Plants

    if (appliedSort == "low to high") {

        // Sort the plants from lowest to highest price
        filteredSortedArrPlants = filteredSortedArrPlants.sort((a,b) => {
            return a.price - b.price;
        });
    }   else if (appliedSort == "date added") {

        // Sort plants from newest to oldest
        filteredSortedArrPlants = filteredSortedArrPlants.sort((a,b) => {
            let da = new Date(a.addedDate);
            let db = new Date(b.addedDate);

            return db -da;
        });
    }

    loadPlants(filteredSortedArrPlants);
}



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
