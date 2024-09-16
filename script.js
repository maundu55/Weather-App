const apiKey ="";
const apiUrl ="";

const checkWeather = async () =>{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

}
checkWeather();