const apikey="21cf9c8b97a515847cd0567f41b170ae";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon =document.querySelector(".weathericon");
async function checkweather(city){
    const response=await fetch(apiurl +city + `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +" %";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="./img/cloud.png";
    }
    
    else if(data.weather[0].main=="Clear"){
        weathericon.src="./img/sunday.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="./img/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="./img/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="./img/mist.png";
    }
    document.querySelector(".weather").style.display="block"
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value)
})