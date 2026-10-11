// async function getweather() {
//     const city = document.getElementById("city").value;

//     if (city === "") {
//         document.getElementById("result").innerHTML =
//             "Please check your city name";
//         return;
//     }

//     let apiKey = "445488b6555c62fa67a605012d9373bf";

//     let response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=17.3850&lon=78.4867&appid=${apiKey}`
//     );

//     let data = await response.json();

//     document.getElementById("result").innerHTML =
//         JSON.stringify(data);
// }


async function getweather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        document.getElementById("result").innerHTML =
            "Please check your city name";
        return;
    }

    let apiKey = "445488b6555c62fa67a605012d9373bf";

    let response = await fetch(
       
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    let data = await response.json();

    document.getElementById("result").innerHTML =
        "City: " + data.name + "<br>" +
        "Temperature: " + data.main.temp + " °C<br>" +
        "Weather: " + data.weather[0].description + "<br>" +
        "Humidity: " + data.main.humidity + "%";
}
