// DOM Elements
const button = document.getElementById('button');

const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Programming';

// Toggle button while fetching and listening joke
function toggleButton() {
    button.disabled = !button.disabled;
}

// Get the jokes from API
async function getJoke() {
    try {
        toggleButton();

        const response = await fetch(jokeApiUrl);
        const data = await response.json();

        console.log(data);

        toggleButton();
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

// Event listeners
button.addEventListener('click', getJoke);