fetch('http://api.openweathermap.org/data/2.5/weather?id=6548066&appid=b23aa5b1fc2f5ed96f3147131acfce5f&lang=ru')

  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    console.log(data);
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather-cloud').innerHTML = data.weather[0]['description'];
    document.querySelector('.weather-icon').innerHTML = data.weather[0]['icon'];
  })
  .catch(function () {
    // eroros
  });


