
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.enter-button');
    const square = document.querySelector('.square');
    const content = document.getElementById('content');
    const overlay = document.getElementById('overlay');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add 'dim-effect' and 'blur-effect' to buttons, image, and content
            buttons.forEach(btn => btn.classList.add('dim-effect', 'blur-effect'));
            square.classList.add('dim-effect', 'blur-effect', 'bobbing');
            content.classList.add('dim-effect', 'blur-effect');

            showWhiteBox(this);
        });
    });

    overlay.addEventListener('click', hideWhiteBox);
});

function showWhiteBox(clickedButton) {
    document.getElementById('overlay').style.display = 'block';
    setTimeout(() => {
        document.getElementById('overlay').style.opacity = 1;
        document.getElementById('white-box').style.display = 'flex';
        document.getElementById('white-box').style.opacity = 1;
    }, 10);
}

function hideWhiteBox() {
    // Grab all elements that have dim and blur effects
    const dimmedElements = document.querySelectorAll('.dim-effect');
    const blurredElements = document.querySelectorAll('.blur-effect');

    // Start the fade-out effect for dim and blur effects
    dimmedElements.forEach(el => {
        el.classList.remove('dim-effect');
    });
    blurredElements.forEach(el => {
        el.classList.remove('blur-effect');
    });

    // Remove 'clicked' class from all buttons when white box is closed
    document.querySelectorAll('.enter-button').forEach(btn => btn.classList.remove('clicked'));

    const backgroundCities = document.getElementById('background-cities');
    backgroundCities.innerHTML = ''; // Remove all child elements

    // Start the fade-out effect for the overlay and white box
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('white-box').style.opacity = 0;

    // Wait for the fade-out effect to finish before hiding elements
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('white-box').style.display = 'none';
    }, 500); // The timeout should match the duration of the CSS transition
}

// Additional JavaScript to make buttons stay red when clicked
document.querySelectorAll('.enter-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'clicked' class from all buttons to reset their state
        document.querySelectorAll('.enter-button').forEach(btn => btn.classList.remove('clicked'));
        // Add 'clicked' class to the clicked button
        this.classList.add('clicked');
    });
});

// Define an array of cities and names
const citiesAndNames = [
    
    // Add other cities and names here...
];

// Function to create and animate background cities and names
function createStaticCityNames() {
    const backgroundCities = document.getElementById('background-cities');

    citiesAndNames.forEach(cityName => {
        const cityElement = document.createElement('div');
        cityElement.classList.add('city-name');

        // Randomize the initial position
        cityElement.style.left = `${Math.random() * 100}%`;
        cityElement.style.top = `${Math.random() * 100}%`;

        // Set the text content of the city element
        cityElement.textContent = cityName;

        // Add city-name elements to the background
        backgroundCities.appendChild(cityElement);

        // Initially hide the city names
        cityElement.style.display = 'none';
    });
}

// Function to toggle the visibility of city names
function toggleCityNames() {
    const cityElements = document.querySelectorAll('.city-name');

    cityElements.forEach(cityElement => {
        // Toggle the display style to show/hide city names
        cityElement.style.display = (cityElement.style.display === 'none') ? 'block' : 'none';
    });
}

// Call the function to create static city names when the page loads
window.addEventListener('DOMContentLoaded', createStaticCityNames);

// Call the function to toggle city names when any button with class 'enter-button' is clicked
document.querySelectorAll('.enter-button').forEach(button => {
    button.addEventListener('click', toggleCityNames);
    
});

