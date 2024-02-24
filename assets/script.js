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
let citySearchBarBTN = document.getElementById('citySearchBarBTN');


// Current Day Weather Element
let presentDayWeather = document.getElementById('presentDayWeather');


// Next five day's Weather Elements
let secondDay = document.getElementById('secondDay');
let thirdDay = document.getElementById('thirdDay');
let fourthDay = document.getElementById('fourthDay');
let fifthDay = document.getElementById('fifthDay');
let sixthDay = document.getElementById('sixthDay');

// Weather API KEY
let apiID = 'dddef569111da5d78cc08aff79646497';

// Weather Forcast API to find weather
let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + lattitude + '&lon=' + longitude + '&appid=' + apiID;
// Geocoding API to find coordinates
let geocodingAPI = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + apiID;

// Button EventListeners
citySearchBarBTN.addEventListener('click', function() {
    // Need to add function to input city name into the API.
    

});

atlantaWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});

denverWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});

seattleWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});

sanFranciscoWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});

orlandoWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});

newYorkWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});

chicagoWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});

austinWeatherBTN.addEventListener('click', function() {
    // Need to add function to search city weather in the API
});
