fetch(http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid={API key})

fetch(https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key})



// Variable to get search history as an array
// Get Search History Function
var results = JSON.parse(localStorage.getItem("searchHistory")) || []
// loop through and display results

// This is how you save a new item // Create Array
// Save Search History Function
var results = JSON.parse(localStorage.getItem("searchHistory")) || []
results.push(item)
localStorage.setItem("searchHistory", JSON.stringify(results))