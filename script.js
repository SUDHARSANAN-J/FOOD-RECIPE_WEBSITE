// Function to toggle the display of items
function toggleDisplay(buttonId, targetId, cancelId) {
    var button = document.querySelector(buttonId);
    var target = document.querySelector(targetId);
    var cancel = document.querySelector(cancelId);

    button.addEventListener("click", function() {
        target.style.display = "block";
    });

    cancel.addEventListener("click", function() {
        target.style.display = "none";
    });
}

// Call the function for each recipe
toggleDisplay("#Cheese_hamburger", "#Hamburger", "#cancel");
toggleDisplay("#Chicken_Steak", "#Steak", "#cancel1");
toggleDisplay("#berries_tarts", "#berries", "#cancel2");
toggleDisplay("#chicken_rice_bowl", "#rice_bowl", "#cancel3");
toggleDisplay("#grilled_skewer", "#skewers", "#cancel4");
toggleDisplay("#prawn_ramen", "#ramen", "#cancel5");
toggleDisplay("#honey_pancake", "#pancake", "#cancel6");
toggleDisplay("#chicken_dumplings", "#dumplings", "#cancel7");
toggleDisplay("#chicken_wings", "#wings", "#cancel8");
toggleDisplay("#seafood_soup", "#soup", "#cancel9");
toggleDisplay("#choco_icecream", "#Icecream", "#cancel10");
toggleDisplay("#salad_with_mint", "#salad", "#cancel11");


document.querySelectorAll('.video').forEach(function(button) {
    button.onclick = function() {
        let videoId = this.id;
        let videoLinks = {
            burger_video: 'https://www.youtube.com/watch?v=nM_IozMfv7A&t=11s',
            videoSteak: 'https://www.youtube.com/watch?v=5qS4Fnb9GMA', // Steak Recipe
            videoBerries: 'https://www.youtube.com/watch?v=AF1b8XNn1SU', // Mixed Berry Tart Recipe
            videoRiceBowl: 'https://www.youtube.com/watch?v=EcYNGDmfHCgI', // Chicken Rice Bowl Recipe
            videoSkewers: 'https://www.youtube.com/watch?v=xxTthduw5Ts', // Chicken Skewers Recipe
            videoRamen: 'https://www.youtube.com/watch?v=WIMaG3qDB-w', // Prawn Ramen Recipe
            videoPancake: 'https://www.youtube.com/watch?v=NCMKedZvnyI', // Honey Pancake Recipe
            videoDumplings: 'https://www.youtube.com/watch?v=CFC82ec9ft4&t=5s', // Chicken Dumplings Recipe
            videoWings: 'https://www.youtube.com/watch?v=_r1B365GxNY', // Chicken Wings Recipe
            videoSoup: 'https://www.youtube.com/watch?v=PnWkar7WVeg', // Seafood Soup Recipe
            videoIcecream: 'https://www.youtube.com/watch?v=T3d0zQRPk4U', // Chocolate Ice Cream Recipe
            videoSalad: 'https://www.youtube.com/watch?v=NbwVUWMHXh0' // Salad with Mint Recipe
        };

        window.location.href = videoLinks[videoId]; // Redirect to the appropriate YouTube link
    };
});