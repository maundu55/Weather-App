const apiKey ="78864d879e25d6f9d32610ba5fb3193f";
const apiUrl ="";

const checkWeather = async () =>{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

}
checkWeather();