function fetchWeather() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Sunny");
        }, 3000);
    });
}

async function getWeather() {
    let weather = await fetchWeather();
    console.log(weather);
}

getWeather();