const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Programming'

// Get the jokes from API
async function getJoke() {
    try {
        const response = await fetch(jokeApiUrl);
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

getJoke();