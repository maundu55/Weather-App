const apiKey ="78864d879e25d6f9d32610ba5fb3193f";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


const checkWeather = async (city) =>{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

   console.log(data);

   document.querySelector('.city').innerHTML = data.name;
   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
   document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
   document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener('click', ()=>{
   checkWeather(searchBox.value);
   searchBox.value='';
})

searchBox.addEventListener("keypress", (event)=>{
    if(event.key === 'Enter'){
        event.preventDefault();
        checkWeather(searchBox.value);
        searchBox.value='';
    }
})