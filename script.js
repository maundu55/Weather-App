const apiKey ="78864d879e25d6f9d32610ba5fb3193f";
const city = 'dubai'

const checkWeather = async () =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    console.log('hi there')

}
checkWeather();