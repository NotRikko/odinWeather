import { displayWeatherInfo } from "./domMethods";

async function getCurrentWeather(location) {
    let currentData;

    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=141b536978514027968202337240304&q=${location}`)
    
    currentData = await res.json();

    const processedData = {
        condition: currentData.current.condition,
        temperature: {
            celsius: currentData.current.temp_c,
            fahrenheit: currentData.current.temp_f
        },
        humidity: currentData.current.humidity,
        wind: {
            direction: currentData.current.wind_dir,
            speed_kph: currentData.current.wind_kph,
            speed_mph: currentData.current.wind_mph
        },
        location: {
            name: currentData.location.name,
            country: currentData.location.country,
            region: currentData.location.region
        }
    };

    displayWeatherInfo(processedData);

    console.log(processedData);
}


function setLocation(newLocation) {
    return newLocation
}

const input = document.getElementById("input");
input.addEventListener("keydown", function(event) {
    if(event.key === 'Enter') {
        const newLocation = setLocation(input.value)
        getCurrentWeather(newLocation);
    }
});


export {getCurrentWeather}

