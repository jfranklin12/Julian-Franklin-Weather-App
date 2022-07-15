var cityNameEl = document.getElementById("cityName");
var searchButtonEl = document.getElementById("searchButton");

var citySearch = cityNameEl.value.trim();
console.log(citySearch)

searchButtonEl.addEventListener('click', getWeather)
searchButtonEl.addEventListener('click', saveCity)
searchButtonEl.addEventListener('click', showResults)


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
// Save city to local storage
function saveCity() {
    var citySearch = cityNameEl.value;
    localStorage.setItem("Search History", JSON.stringify(citySearch)) || [];
    console.log(citySearch);
}

// Get Search History Function
function getCity() {
    var results = JSON.parse(localStorage.getItem("searchHistory", input)) || [];
    saveCity(results)
}

// display city on screen
function showResults() {
    var cityList = document.createElement("li");
    var textShow = document.innerHTML(cityList);
    show.appendChild(textShow);
    document.getElementById("#results").appendChild(cityList);
}