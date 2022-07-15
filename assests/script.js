var cityNameEl = document.getElementById("cityName");
var searchButtonEl = document.getElementById("searchButton");

var input = cityNameEl.value;
console.log(input);



searchButtonEl.addEventListener('click', getWeather, saveCity)

function getWeather() {
    var userSearch = cityNameEl.value.trim();

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + userSearch + "&limit=1&appid=72ee85d5414d2d017cb185582d883b57")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            console.log(lat);
            console.log(lon);

            var cityName = data[0].name;

            weatherToScreen(lat, lon, cityName)

        })
}

function weatherToScreen(lat, lon, cityName) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=72ee85d5414d2d017cb185582d883b57&units=imperial")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            data.daily.forEach(function weatherLoop(weather, i) {
                document.querySelector("#city" + i).textContent = cityName + " (" + new Date(weather.dt * 1000).toLocaleDateString() + ")"
                document.querySelector("#icon" + i).src = "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
                document.querySelector("#temp" + i).textContent = "Temp: " + weather.temp.day + "°F";
                document.querySelector("#wind" + i).textContent = "Wind: " + weather.wind_speed;
                document.querySelector("#humidity" + i).textContent = "Humidity: " + weather.humidity;
                document.querySelector("#uv" + i).textContent = "UV Index: " + weather.uvi;
            });
        })
}



// function saveResults()

// Variable to get search history as an array
// Get Search History Function
// function getCity(){
// var results = JSON.parse(localStorage.getItem("searchHistory", input)) || [];
// saveCity(results)
// }
// loop through and display results

// This is how you save a new item // Create Array
// Save Search History Function
function saveCity() {
    localStorage.setItem("searchHistory", JSON.stringify(input));
    console.log(input)
}

// var resultsShow = JSON.parse(localStorage.getItem("searchHistory", input)) || [];
// results.push(resultsShow);

// function showResults() {
//     var cityList = document.createElement("li");
//     var textshow = document.createTextShow(input);
//     show.appendChild(textshow);
//     document.getElementById("#results").appendChild(cityList);
// }