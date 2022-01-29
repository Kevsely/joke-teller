const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Programming';
let jokeText;
const ttsApiKey = '6c6845a1f1484c2fa00bcbba44a4984b';

// DOM Elements
const button = document.getElementById('button');

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

        
        if(data.type === 'single') // For single part joke
            jokeText = data.joke;
        else
            jokeText = `${data.setup}... ${data.delivery}`; // for two parts joke

        toggleButton();
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

// Test function to test Text-to-Speech API
VoiceRSS.speech({
    key: ttsApiKey,
    src: 'Hello, world!',
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});

// Event listeners
button.addEventListener('click', getJoke);