function changeBackground(weatherData){
    if (weatherData.weather[0].main === 'Rain')
    changeBackground.innertext= 
    } else if(weatherData.weather[0].main === 'Clouds'){
        changeBackground.innerText = url(images/lightclouds.jpg);
    } else if (weatherData.weather[0].main === 'Clear'){
        changeBackground.innerText = url(images/clear.jpg);
    } else(weatherData.weather[0].main === 'Snow'){
        changeBackground.innerText = url(images/snow.jpg)   
    }