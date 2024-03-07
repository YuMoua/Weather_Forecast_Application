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

// Weather API KEY
let apiKey = 'dddef569111da5d78cc08aff79646497';


// Weather Forcast API to find weather

let requestOptions = {
    method: 'GET',
    mode: 'no-cors',
    redirect: 'follow'
}

function weatherGet(cityName) {
    
    let weatherAPIURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial';
    fetch(weatherAPIURL)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.list)
        console.log(data.list[0])
        console.log(data.list[0].main)
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

atlantaWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '33.7488';
    let longitude = '84.3877';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});

denverWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '39.7392';
    let longitude = '104.9903';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});

seattleWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '47.6061';
    let longitude = '122.3328';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});

sanFranciscoWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '37.7749';
    let longitude = '122.4194';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});

orlandoWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '28.5384';
    let longitude = '81.3789';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});

newYorkWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '40.7128';
    let longitude = '74.0060';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});

chicagoWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '41.8781';
    let longitude = '87.6298';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});

austinWeatherBTN.addEventListener('click', function () {
    // Need to add function to search city weather in the API
    let latitude = '30.2672';
    let longitude = '97.7431';
    function weatherGet(weatherAPIURL, response) {
        let weatherAPIURL = 'https//api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;
        let requestOptions = {
            'method': 'GET',
            'mode': 'no-cors',
            'redirect': 'follow'
        }
        fetch(weatherAPIURL, requestOptions)
            .then(response => response.json())
        console.log(response);
    };

    weatherGet()
});
