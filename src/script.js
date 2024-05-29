// aa5764616697886870b3e2a5e28b45ea

//api bandeira//
const data = await getWeatherData(city);

const apiCountryURL = `https://flagsapi.com/${data.sys.country}/flat/64.png`;

cityElement.innerText = data.name;
//api bandeira//