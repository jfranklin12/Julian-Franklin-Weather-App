var cityNameEl = document.getElementById("cityName");
var searchButtonEl = document.getElementById("searchButton");


searchButtonEl.addEventListener('click', function(){
    var input = cityNameEl.value;
    console.log(input);

    var userSearch = cityNameEl.value.trim()

    localStorage.setItem("City Search", JSON.stringify(userSearch))
    
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + userSearch + "&limit=1&appid=72ee85d5414d2d017cb185582d883b57")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(lat);
        console.log(lon);
         

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=72ee85d5414d2d017cb185582d883b57")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
            var results =
        })



    })
})



// Variable to get search history as an array
// Get Search History Function
// var results = JSON.parse(localStorage.getItem("searchHistory")) || []
// loop through and display results

// This is how you save a new item // Create Array
// Save Search History Function
// var results = JSON.parse(localStorage.getItem("searchHistory")) || []
// results.push(item)
// localStorage.setItem("searchHistory", JSON.stringify(results))