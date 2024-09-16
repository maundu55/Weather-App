const apiKey ="78864d879e25d6f9d32610ba5fb3193f";
// const city = 'nairobi'
apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=dubai22"

const searchInput = document.querySelector('.search');
const btnElement = document.getElementById('btn');

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


const checkWeather = async () =>{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

   console.log(data);

   document.querySelector('.city').innerHTML = data.name;
   document.querySelector('.temp').innerHTML = data.main.temp;
   document.querySelector('.humidity').innerHTML = data.main.humidity;
   document.querySelector('.wind').innerHTML = data.wind.speed;


}
checkWeather();