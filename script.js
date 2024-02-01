function showCityInfo() {
    var city = document.getElementById('cityDropdown').value;
    var cityNameHeader = document.getElementById('cityName');
    var photographerTitle = document.getElementById('photographerTitle');
    var cityInfoDiv = document.getElementById('cityInfo');

    // Define a mapping of cities to photographers
    var cityPhotographerMapping = {
        // Add your city-to-photographer mapping here
        "Johannesburg, South Africa": "Robyn Davie Creative Studio",
        "Lagos, Nigeria": "Olutobi Harry Photography",
        // Add more mappings for other cities
    };

    // Update the city name heading based on selection
    cityNameHeader.innerText = city ? city.split(" (")[0] : "Select a Region";
    photographerTitle.innerText = cityPhotographerMapping[city] ? "(" + cityPhotographerMapping[city] + ")" : "";

    // Placeholder content for city information
    var placeholderText = "Information about " + (city ? city.split(" (")[0] : "Select a Region") + " will be displayed here.";
    typeText(cityInfoDiv, placeholderText, 20); // Type the information text faster (adjust speed here)
}

// Function to simulate typing effect with adjustable speed
function typeText(element, text, speed) {
    element.innerHTML = ""; // Clear existing content
    var i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

