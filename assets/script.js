// let dayjs = require('dayjs');


// Main City Weather Buttons Element
// let atlantaWeatherBTN = document.getElementById('AtlantaWeather');
// let denverWeatherBTN = document.getElementById('denverWeather');
// let seattleWeatherBTN = document.getElementById('seattleWeather');
// let sanFranciscoWeatherBTN = document.getElementById('sanFranciscoWeather');
// let orlandoWeatherBTN = document.getElementById('orlandoWeather');
// let newYorkWeatherBTN = document.getElementById('newYorkWeather');
// let chicagoWeatherBTN = document.getElementById('chicagoWeather');
// let austinWeatherBTN = document.getElementById('austinWeather');

// Searched City Name Typed
let selectedCity = document.getElementById('selectedCity');

// searchBar typed city name element
let cityNameSearched = document.getElementById('cityNameSearched');


// Search Bar Button Element
let searchForm = document.getElementById('searchForm');
let citySearchBarBTN = document.getElementById('citySearchBarBTN');


// Current Day Weather Element
let presentDayWeather = document.getElementById('presentDayWeather');


// Next five day's Date Elements
let firstDate = document.getElementById('firstDate');
let secondDate = document.getElementById('secondDate');
let thirdDate = document.getElementById('thirdDate');
let fourthDate = document.getElementById('fourthDate');
let fifthDate = document.getElementById('fifthDate');
let sixthDate = document.getElementById('sixthDate');

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
    // .then((data) => {
    //     console.log(data)
    //     console.log(data.list)
    //     console.log(data.list[0])
    //     console.log(data.list[0].main)
    //     console.log(data.list[0].main.temp + ' Degrees fahrenheit')
    //     console.log(data.list[0].wind.speed + ' MPH')
    //     console.log('Humidity: ' + data.list[0].main.humidity)
    // })
    .then((data) => {
        // CityName on HTML Page Code
        selectedCity.textContent = cityName;
        let today = dayjs().format('MM-DD');
        firstDate.textContent = today;
        // ---- Day 1 ----
        let temp1 = data.list[0].main.temp + ' Degrees';
        d1Temp.innerText = temp1;
        let windSpeed1 = data.list[0].wind.speed + ' MPH';
        d1WindSpeed.innerText = windSpeed1;
        let humidity1 = data.list[0].main.humidity + '%';
        d1Humidity.innerText = humidity1;
        // ---- Day 2 ----
        let day2 = dayjs().add(1, 'day').format('MM-DD');
        secondDate.textContent = day2;

        let temp2 = data.list[8].main.temp + ' Degrees';
        d2Temp.innerText = temp2;
        let windSpeed2 = data.list[8].wind.speed + ' MPH';
        d2WindSpeed.innerText = windSpeed2;
        let humidity2 = data.list[8].main.humidity + '%';
        d2Humidity.innerText = humidity2;
        // ---- Day 3 ----
        let day3 = dayjs().add(2, 'day').format('MM-DD');

        thirdDate.textContent = day3;

        let temp3 = data.list[16].main.temp + ' Degrees';
        d3Temp.innerText = temp3;
        let windSpeed3 = data.list[16].wind.speed + ' MPH';
        d3WindSpeed.innerText = windSpeed3;
        let humidity3 = data.list[16].main.humidity + '%';
        d3Humidity.innerText = humidity3;
        // ---- Day 4 ----
        let day4 = dayjs().add(3, 'day').format('MM-DD');

        fourthDate.textContent = day4;

        let temp4 = data.list[24].main.temp + ' Degrees';
        d4Temp.innerText = temp4;
        let windSpeed4 = data.list[24].wind.speed + ' MPH';
        d4WindSpeed.innerText = windSpeed4;
        let humidity4 = data.list[24].main.humidity + '%';
        d4Humidity.innerText = humidity4;
        // ---- Day 5 ----
        let day5 = dayjs().add(4, 'day').format('MM-DD');

        fifthDate.textContent = day5;

        let temp5 = data.list[32].main.temp + ' Degrees';
        d5Temp.innerText = temp5;
        let windSpeed5 = data.list[32].wind.speed + ' MPH';
        d5WindSpeed.innerText = windSpeed5;
        let humidity5 = data.list[32].main.humidity + '%';
        d5Humidity.innerText = humidity5;
        
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
