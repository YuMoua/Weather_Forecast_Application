// Main City Weather Buttons Element
let atlantaWeatherBTN = document.getElementById('AtlantaWeather');
let denverWeatherBTN = document.getElementById('denverWeather');
let seattleWeatherBTN = document.getElementById('seattleWeather');
let sanFranciscoWeatherBTN = document.getElementById('sanFranciscoWeather');
let orlandoWeatherBTN = document.getElementById('orlandoWeather');
let newYorkWeatherBTN = document.getElementById('newYorkWeather');
let chicagoWeatherBTN = document.getElementById('chicagoWeather');
let austinWeatherBTN = document.getElementById('austinWeather');

// searchBar typed city name element
let cityNameSearched = document.getElementById('cityNameSearched');


// Search Bar Button Element
let searchForm = document.getElementById('searchForm');
let citySearchBarBTN = document.getElementById('citySearchBarBTN');


// Current Day Weather Element
let presentDayWeather = document.getElementById('presentDayWeather');


// Next five day's Weather Elements
let secondDay = document.getElementById('secondDay');
let thirdDay = document.getElementById('thirdDay');
let fourthDay = document.getElementById('fourthDay');
let fifthDay = document.getElementById('fifthDay');
let sixthDay = document.getElementById('sixthDay');

// Day 1 Weather Elements
let d1Temp = document.getElementById('d1Temp');
let d1WindSpeed = document.getElementById('d1WindSpeed');
let d1Humidity = document.getElementById('d1Humidity');

// Day 2 Weather Elements
let d2Temp = document.getElementById('d2Temp');
let d2WindSpeed = document.getElementById('d2WindSpeed');
let d2Humidity = document.getElementById('d2Humidity');
// Day 3 Weather Elements
let d3Temp = document.getElementById('d3Temp');
let d3WindSpeed = document.getElementById('d3WindSpeed');
let d3Humidity = document.getElementById('d3Humidity');
// Day 4 Weather Elements
let d4Temp = document.getElementById('d4Temp');
let d4WindSpeed = document.getElementById('d4WindSpeed');
let d4Humidity = document.getElementById('d4Humidity');
// Day 5 Weather Elements
let d5Temp = document.getElementById('d5Temp');
let d5WindSpeed = document.getElementById('d5WindSpeed');
let d5Humidity = document.getElementById('d5Humidity');

// Weather API KEY
let apiKey = 'dddef569111da5d78cc08aff79646497';


// Weather Forcast API to find weather

// let requestOptions = {
//     method: 'GET',
//     mode: 'no-cors',
//     redirect: 'follow'
// }

function weatherGet(cityName) {
    
    let weatherAPIURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial';
    fetch(weatherAPIURL)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.list)
        console.log(data.list[0])
        console.log(data.list[0].main)
        console.log(data.list[0].main.temp + ' Degrees fahrenheit')
        console.log(data.list[0].wind.speed + ' MPH')
        console.log('Humidity: ' + data.list[0].main.humidity)
    })
    .then((data) => {
        let temp = data.list[0].main.temp + ' Degrees fahrenheit';
        d1Temp.textContent = temp;
        let windSpeed = data.list[0].wind.speed + ' MPH';
        d1WindSpeed.textContent = windSpeed;
        let humidity = 'Humidity: ' + data.list[0].main.humidity;
        d1Humidity.textContent = humidity;
    })
    .catch(error => console.log('Error', error))
    
};

// Button EventListeners
searchForm.addEventListener('submit', function(event) {
    // Need to add function to input city name into the API.
    event.preventDefault();
    let cityName = cityNameSearched.value.trim()
    console.log(cityName);
    weatherGet(cityName)

});

// atlantaWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'atlanta';
//     weatherGet(cityName)
// });

// denverWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'denver';
//     weatherGet(cityName)
// });

// seattleWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'seattle';
//     weatherGet(cityName)
// });

// sanFranciscoWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'san+francisco';
//     weatherGet(cityName)
// });

// orlandoWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'orlando';
//     weatherGet(cityName)
// });

// newYorkWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'new+york';
//     weatherGet(cityName)
// });

// chicagoWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'chicago';
//     weatherGet(cityName)
// });

// austinWeatherBTN.addEventListener('click', function(event) {
//     // Need to add function to search city weather in the API
//     event.preventDefault();
//     let cityName = 'austin';
//     weatherGet(cityName)
// });
