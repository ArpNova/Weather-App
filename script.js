const apiKey="93ca7fb145e5176337a770044af8a29c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    if(data.cod != 200){
        alert("City not found!");
        return;
    }

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main == "Fog"){
        weatherIcon.src = "fog.png";
    }
    else if(data.weather[0].main == "Drizzel"){
        weatherIcon.src = "drizzel.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";

}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
